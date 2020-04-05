<template>
  <div class="tc-grid" :style="style">
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class TCGrid extends Vue {
  @Prop({ default: '300' }) minWidth!: string;
  get style() {
    return {
      'grid-template-columns':
        'repeat(auto-fill, minmax(' + this.minWidth + 'px, 1fr))',
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-grid {
  display: grid;
  grid-gap: 30px;
}
</style>
