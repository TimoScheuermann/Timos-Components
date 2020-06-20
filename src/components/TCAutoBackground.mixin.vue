<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class TCAutoBackgroundMixin extends Vue {
  [x: string]: any;

  public lightContainer: HTMLElement[] = [];
  public darkContainer: HTMLElement[] = [];
  public mainContainer!: HTMLElement;
  public isDark = this.dark;
  private recheckContainer: any;

  public _mounted(): void {
    if (this.autoColor) {
      this.mainContainer = document.getElementById(this.id)!;
      window.addEventListener("scroll", this.handleScroll);
      this.updateContainerList();
      this.handleScroll();
      console.log("scroll mounted for auto color");
      this.recheckContainer = setTimeout(() => {
        this.updateContainerList();
      }, 1000);
    }
  }
  public _destroyed(): void {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.recheckContainer);
  }

  public _routeChanged(): void {
    if (this.autoColor) {
      this.updateContainerList();
    }
  }

  public handleScroll() {
    if (this.darkContainer.length > 0 || this.lightContainer.length > 0) {
      if (
        this.darkContainer.filter(x => this.collide(x, this.mainContainer))
          .length > 0
      ) {
        // console.log("Now hovering over dark container");
        this.isDark = true;
        return;
      } else if (
        this.lightContainer.filter(x => this.collide(x, this.mainContainer))
          .length > 0
      ) {
        // console.log("Now hovering over light container");
        this.isDark = false;
        return;
      }
      // console.log(
      //   "Now hovering over no tc-X-container... setting color dark back to ",
      //   this.dark
      // );
      this.isDark = this.dark;
    }
  }

  public updateContainerList(): void {
    this.$nextTick(() => {
      // console.log("Updateing container list...");
      for (const t of ["dark", "light"]) {
        this[t + "Container"] = [];
        document.querySelectorAll("[tc-" + t + "-container]").forEach(x => {
          this[t + "Container"].push(x as HTMLElement);
          // console.log("Found ", x);
        });
      }
      this.handleScroll();
      // console.log("Container list updated.");
    });
  }

  public collide(el1: HTMLElement, el2: HTMLElement): boolean {
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
</script>
