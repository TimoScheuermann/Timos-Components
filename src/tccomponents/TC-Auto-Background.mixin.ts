import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import TCComponent from "./TC-Component.mixin";

@Component
export default class TCAutoBackground extends Mixins(TCComponent) {
  @Prop({ default: true }) autoBackground!: boolean;

  public dark_: boolean = this.dark;
  @Watch("dark")
  darkChanged() {
    this.handleScroll();
  }

  // Container
  private lightContainer: HTMLElement[] = [];
  private darkContainer: HTMLElement[] = [];
  private mainContainer!: HTMLElement;

  // Timer
  private recheck: any;

  async mounted() {
    if (this.autoBackground && document.getElementById(this.uuid_)) {
      this.mainContainer = document.getElementById(this.uuid_)!;
      window.addEventListener("scroll", this.handleScroll);
      this.updateContainerLists();
      this.handleScroll();
      this.recheck = setTimeout(() => {
        this.updateContainerLists();
      }, 1000);
    }
  }

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.recheck);
  }

  handleScroll(): void {
    if (this.darkContainer.length > 0 || this.lightContainer.length > 0) {
      // console.log("check for collides");

      if (this.collidesWithAny(this.darkContainer)) {
        // console.log("collides with dark");
        this.dark_ = true;
        return;
      }
      if (this.collidesWithAny(this.lightContainer)) {
        // console.log("collides with light");
        this.dark_ = false;
        return;
      }
      // console.log("Doesnt collide");
      this.dark_ = this.dark;
    }
  }

  collidesWithAny(elements: HTMLElement[]): boolean {
    return elements.filter(x => this.collide(x, this.mainContainer)).length > 0;
  }

  @Watch("$route", { deep: true, immediate: true })
  routeChanged(): void {
    if (this.autoBackground) {
      this.updateContainerLists();
      this.handleScroll();
    }
  }

  updateContainerList(prefix: "dark" | "light"): void {
    document.querySelectorAll("[tc-" + prefix + "-container]").forEach(x => {
      if (prefix === "dark") {
        this.darkContainer.push(x as HTMLElement);
      } else {
        this.lightContainer.push(x as HTMLElement);
      }
    });
  }

  updateContainerLists(): void {
    this.$nextTick(() => {
      this.darkContainer = [];
      this.lightContainer = [];
      this.updateContainerList("dark");
      this.updateContainerList("light");
      this.handleScroll();
      // console.log("Container List updated");
    });
  }

  collide(el1: HTMLElement, el2: HTMLElement): boolean {
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
