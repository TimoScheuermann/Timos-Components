<template>
  <div class="tl-grid" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TLGrid extends Vue {
  @Prop({ default: '300' }) minWidth!: string;
  @Prop({ default: 'auto-fit' }) arrangement!: string;

  get arrange(): string {
    if (this.arrangement !== 'auto-fill') return 'auto-fit';
    return this.arrangement;
  }

  get style(): Record<string, string> {
    return {
      'grid-template-columns': `repeat(${this.arrange}, minmax(${this.minWidth}px, 1fr))`
    };
  }
}
</script>

<style lang="scss" scoped>
.tl-grid {
  display: grid;
  grid-gap: 30px;
}
</style>
