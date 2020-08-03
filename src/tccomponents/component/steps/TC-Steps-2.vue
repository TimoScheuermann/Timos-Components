<template>
  <div class="tc-steps" :key="current" :current="current">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component
export default class TCSteps2 extends Vue {
  @Prop() current!: number;
}
</script>

<style lang="scss" scoped>
.tc-steps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  user-select: none;
  margin: 10px 0;
}
</style>
