import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import TCComponent from './TC-Component.mixin';

@Component
export default class TCAutoBackground extends Mixins(TCComponent) {
  @Prop({ default: true }) autoBackground!: boolean;

  public dark_: boolean = this.dark;

  get darkmodeadv(): boolean {
    return this.dark_;
  }

  // Container
  private lightContainer: HTMLElement[] = [];
  private darkContainer: HTMLElement[] = [];
  private mainContainer: HTMLElement | null = null;
  public otherScrollContainer: HTMLElement[] = [];

  // Timer
  private recheck = 0;

  mounted(): void {
    if (this.autoBackground && document.getElementById(this.uuid_)) {
      this.mainContainer = document.getElementById(this.uuid_);

      if (this.mainContainer) {
        window.addEventListener('scroll', this.handleScroll);

        this.updateContainerLists();
        this.handleScroll();

        this.recheck = setTimeout(() => {
          this.updateContainerLists();
        }, 1000);
      }
    }
  }

  destroyed(): void {
    window.removeEventListener('scroll', this.handleScroll);
    this.removeListenerFromOthers();
    clearTimeout(this.recheck);
  }

  private removeListenerFromOthers() {
    this.otherScrollContainer.forEach(x =>
      x.removeEventListener('scroll', this.handleScroll)
    );
  }

  private handleScroll(): void {
    // console.log('handleScroll');
    if (this.darkContainer.length > 0 || this.lightContainer.length > 0) {
      if (this.collidesWithAny(this.darkContainer)) {
        this.dark_ = true;
        // console.log('Collides with dark');
        return;
      }
      if (this.collidesWithAny(this.lightContainer)) {
        this.dark_ = false;
        // console.log('Collides with light');
        return;
      }
      // console.log('Collides with nothing');
    }
    this.dark_ = this.dark;
  }

  private collidesWithAny(elements: HTMLElement[]): boolean {
    const elem: HTMLElement | null = this.mainContainer;
    let collides = false;
    if (elem) {
      collides = elements.filter(x => this.collide(x, elem)).length > 0;
    }
    if (!collides) {
      for (const elem of this.otherScrollContainer) {
        for (const check of elements) {
          if (this.collide(elem, check)) {
            collides = true;
          }
        }
      }
    }
    return collides;
  }

  @Watch('$route', { deep: true, immediate: true })
  routeChanged(): void {
    if (this.autoBackground) {
      this.updateContainerLists();
      this.handleScroll();
    }
  }

  private updateContainerList(prefix: 'dark' | 'light'): void {
    document.querySelectorAll('[tc-' + prefix + '-container]').forEach(x => {
      if (prefix === 'dark') {
        this.darkContainer.push(x as HTMLElement);
      } else {
        this.lightContainer.push(x as HTMLElement);
      }
    });
  }

  private updateContainerLists(): void {
    this.$nextTick(() => {
      this.darkContainer = [];
      this.lightContainer = [];

      this.removeListenerFromOthers();
      this.otherScrollContainer = [];
      document.querySelectorAll('.tl-sidebar--content').forEach(x => {
        this.otherScrollContainer.push(x as HTMLElement);
        x.addEventListener('scroll', this.handleScroll);
      });

      this.updateContainerList('dark');
      this.updateContainerList('light');
      this.handleScroll();
    });
  }

  private collide(el1: HTMLElement, el2: HTMLElement): boolean {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    return !(
      rect1.top > rect2.bottom ||
      rect1.right < rect2.left ||
      rect1.bottom < rect2.top ||
      rect1.left > rect2.right
    );
  }
}
