<template>
  <div class="tl-grid" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TLGrid extends Vue {
  @Prop({ default: 300 }) minWidth!: number;
  @Prop({ default: 'auto-fit' }) arrangement!: string;
  @Prop({ default: 30 }) gap!: number;

  get arrange(): string {
    if (this.arrangement !== 'auto-fill') return 'auto-fit';
    return this.arrangement;
  }

  get styles(): string {
    return `--tl-grid__arrangement: ${this.arrange};--tl-grid__gap: ${this.gap}px;--tl-grid__min-width: ${this.minWidth}px;`;
  }
}
</script>

<style lang="scss" scoped>
.tl-grid {
  display: grid;
  grid-gap: var(--tl-grid__gap);
  grid-template-columns: repeat(
    var(--tl-grid__arrangement),
    minmax(var(--tl-grid__min-width), 1fr)
  );
}
</style>
