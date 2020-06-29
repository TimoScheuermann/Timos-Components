import * as uuid from 'uuid';
import { Component, Prop, Vue } from 'vue-property-decorator';

const usedUUIDs: string[] = [];
@Component
export default class TCComponent extends Vue {
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: 'primary' }) tccolor!: string;
  @Prop() tcbackground!: string;
  @Prop() color!: string;
  @Prop() background!: string;

  public uuid = '';
  public colors: string[] = [
    'primary',
    'error',
    'alarm',
    'success',
    'paragraph'
  ];

  beforeMount(): void {
    this.uuid = this.getUUID();
  }

  private getUUID(): string {
    let u = uuid.v4();
    while (usedUUIDs.includes(u)) {
      u = uuid.v4();
    }
    return u;
  }

  public get uuid_(): string {
    return this.uuid || this.getUUID();
  }

  public get tccolor_(): string {
    if (this.color) return this.color;
    if (!this.tccolor || !this.colors.includes(this.tccolor.toLowerCase()))
      return this.colors[0];
    return this.tccolor.toLowerCase();
  }
}
