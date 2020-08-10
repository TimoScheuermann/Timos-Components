import * as colorConverter from 'simple-color-converter';
import { v4 } from 'uuid';
import { Component, Prop, Vue } from 'vue-property-decorator';
import availableColors from './TFColors';

const usedUUIDs: string[] = [];
@Component
export default class TCComponent extends Vue {
  @Prop({ default: false }) dark!: boolean;

  @Prop({ default: 'primary' }) tccolor!: string;
  @Prop() tcbackground!: string;

  @Prop() color!: string;
  @Prop() tfcolor!: string;
  @Prop() background!: string;
  @Prop() tfbackground!: string;

  @Prop({ default: false }) frosted!: boolean;

  // eslint-disable-next-line
  public colorConverter: any;
  public uuid: string | null = null;

  async created(): Promise<void> {
    this.uuid = this.getUUID();
  }

  private getUUID(): string {
    let u = v4();
    while (usedUUIDs.includes(u)) {
      u = v4();
    }
    return u;
  }

  public get uuid_(): string {
    if (!this.uuid) {
      return 'NO ID';
    }
    return this.uuid;
  }

  public getHEX(color = availableColors['primary']): string {
    return availableColors[color];
  }

  public convertToRGB(color = availableColors['primary']): string {
    const rgb: { r: number; g: number; b: number } = new colorConverter({
      color: color,
      to: 'rgb'
    }).color;
    return [rgb.r, rgb.g, rgb.b].join(',');
  }

  public getChosenColor(fallback = availableColors['primary']): string {
    if (this.color) {
      return this.convertToRGB(this.color);
    }

    const wishedColor: string = this.tfcolor || '';
    const available: string[] = Object.keys(availableColors);

    if (available.includes(wishedColor)) {
      return this.convertToRGB(availableColors[wishedColor]);
    }

    return this.convertToRGB(
      availableColors[fallback] || availableColors['primary']
    );
  }

  public getChosenBackground(fallback = 'paragraph'): string {
    if (this.background) {
      return this.convertToRGB(this.background);
    }

    const wishedBackground: string = this.tfbackground || '';
    const available: string[] = Object.keys(availableColors);

    if (available.includes(wishedBackground)) {
      return this.convertToRGB(availableColors[wishedBackground]);
    }
    return this.convertToRGB(
      availableColors[fallback] || availableColors['paragraph']
    );
  }
}
