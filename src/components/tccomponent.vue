<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCComponent extends Vue {
  @Prop({ default: false }) dark!: boolean;
  @Prop() color!: string;
  @Prop() background!: string;

  get usedSlots(): string[] {
    return Object.keys(this.$slots!);
  }

  get defaultStyle(): any {
    var style: any = { bg: this.background };
    if (this.color) style.color = this.color;
    if (this.background) style.background = this.background;
    return style;
  }
}
</script>
