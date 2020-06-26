import * as uuid from "uuid";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TCComponent extends Vue {
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: "primary" }) tccolor!: string;
  @Prop() tcbackground!: string;
  @Prop() color!: string;
  @Prop() background!: string;

  public uuid: any;
  public colors: string[] = ["primary", "error", "alarm", "success"];

  beforeCreate() {
    this.uuid = uuid.v4();
  }

  get uuid_() {
    return this.uuid;
  }

  get tccolor_() {
    if (this.color) return this.color;
    if (!this.tccolor || !this.colors.includes(this.tccolor.toLowerCase()))
      return this.colors[0];
    return this.tccolor.toLowerCase();
  }
}
