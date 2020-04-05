<template>
  <div class="tc-divider" :style="{ color: color }">
    <div class="tc-divider--bar" v-if="position != 'left'"></div>
    <div class="tc-divider--content" v-if="icon || name">
      <i v-if="icon" :class="'ti-' + icon"></i>
      <span v-if="name">{{ name }}</span>
    </div>
    <div class="tc-divider--bar" v-if="position != 'right'"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCDivider extends Vue {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() position!: string;
  @Prop() color!: string;

  get alignment() {
    return this.position || "center";
  }
}
</script>
<style lang="scss" scoped>
.tc-divider {
  display: flex;
  margin: 5px 10px;
  min-height: 10px;
  align-items: center;
  .tc-divider--bar {
    background: currentColor;
    border-radius: 5px;
    height: 1px;
    opacity: 0.3;
    flex-grow: 1;
  }
  .tc-divider--content {
    padding: 0 5px;
    display: flex;
    align-items: center;
    i,
    span {
      user-select: none;
      opacity: 0.8;
      padding: 0 3px;
      font-weight: 500;
    }
  }
}
</style>
