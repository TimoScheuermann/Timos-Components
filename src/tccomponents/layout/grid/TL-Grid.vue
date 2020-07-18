<template>
  <div class="tl-grid" :style="style">
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

  get style(): string {
    return (
      '--arrangement: ' +
      this.arrange +
      ';--gap: ' +
      this.gap +
      'px;--minWidth: ' +
      this.minWidth +
      'px'
    );
  }
}
</script>

<style lang="scss" scoped>
.tl-grid {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(
    var(--arrangement),
    minmax(var(--minWidth), 1fr)
  );
}
</style>
