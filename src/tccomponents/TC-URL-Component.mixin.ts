import { Component, Prop, Vue } from 'vue-property-decorator';

interface TCRoute {
  name: string;
}

@Component
export default class TCURLComponent extends Vue {
  @Prop() to!: TCRoute;
  @Prop() href!: string;
  @Prop() routeName!: string;

  public handleClick(e: MouseEvent) {
    this.$emit('click', e);
    this.open();
  }

  public open(target: '_blank' | undefined = undefined) {
    if (this.href) {
      window.open(this.href, target);
    } else {
      let route: TCRoute = this.to;
      if (!route && this.routeName) {
        route = { name: this.routeName };
      }
      if (route && this.$route.name !== route.name) {
        this.$router.push(route);
      }
    }
  }

  get isURLActive(): boolean {
    if (this.to) return this.$route.name === this.to.name;
    if (this.routeName) return this.$route.name === this.routeName;
    if (this.href) return this.$route.path === this.href;
    return false;
  }
}
