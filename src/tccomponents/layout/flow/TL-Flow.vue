<template>
  <div class="tl-flow" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TLFlow extends Vue {
  @Prop({ default: 'center' }) vertical!: string;
  @Prop({ default: 'center' }) horizontal!: string;
  @Prop({ default: 'row' }) flow!: string;

  get classes(): string {
    const classes = ['h-' + this.horizontal, 'v-' + this.vertical];
    if (this.flow === 'column') classes.push('tl-flow__column');
    return classes.join(' ');
  }
}
</script>

<style lang="scss" scoped>
.tl-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &.tl-flow__column {
    flex-direction: column;
  }
  &.h-space-between {
    justify-content: space-between;
  }
  &.h-space-around {
    justify-content: space-around;
  }
  &.h-start {
    justify-content: flex-start;
  }
  &.h-end {
    justify-content: flex-end;
  }
  &.v-start {
    align-items: flex-start;
  }
  &.v-end {
    align-items: flex-end;
  }
}
</style>
