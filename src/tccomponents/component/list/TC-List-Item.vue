<template>
  <div
    class="tc-list-item"
    @click="handleClickLocal"
    :class="{
      'tc-list-item__link': href || to || routeName || value,
      'tc-list-item__no-icon': !icon
    }"
  >
    <div class="tc-list-item--icon" v-if="icon">
      <tf-icon :icon="icon" />
    </div>
    <div class="tc-list-item--container">
      <div class="tc-list-item--title">
        {{ title }}
      </div>
      <div v-if="isInput" class="tc-list-item--switch">
        <tc-switch v-model="innerValue" :dark="dark" />
      </div>
      <div v-else-if="description" class="tc-list-item--description">
        {{ description }}
      </div>
      <div v-else-if="to || href || routeName" class="tc-list-item--indicator">
        <i class="ti-chevron-right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import TCSwitch from '@/tccomponents/component/switch/TC-Switch.vue';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';
import TCURLComponent from '@/tccomponents/TC-URL-Component.mixin';

@Component({
  components: {
    'tc-switch': TCSwitch,
    'tf-icon': TFIcon
  }
})
export default class TCListItem extends Mixins(TCComponent, TCURLComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() value!: boolean;
  @Prop() description!: string;

  public innerValue = this.value;

  @Watch('value')
  public changed(): void {
    this.innerValue = this.value;
  }

  get isInput(): boolean {
    return typeof this.value === 'boolean';
  }

  public handleClickLocal(e: MouseEvent): void {
    if (this.isInput) {
      this.innerValue = !this.innerValue;
      this.$emit('input', this.innerValue);
      e.preventDefault();
    } else {
      this.handleClick(e);
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 40px;

.tc-list__dark {
  /deep/ .tc-list-item {
    &:hover {
      background: rgba(lighten($paragraph_dark, 20%), 0.5);
    }
    /deep/ .tc-switch /deep/ label .container {
      background: $container_dark !important;
    }
  }
}
.tc-list-item {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: $size 1fr;
  &.tc-list-item__no-icon {
    grid-template-columns: 1fr;
    padding-left: 10px;
  }
  grid-template-rows: $size;
  border-radius: $border-radius;

  transition: background 0.2s ease-in-out, transform 0.5s;
  &:hover {
    background: rgba(darken($paragraph, 20%), 0.5);
  }

  &.tc-list-item__link {
    cursor: pointer;
  }
  &:not(:last-child) {
    .tc-list-item--container {
      &::after {
        position: absolute;
        content: '';
        z-index: 10;
        bottom: 0;
        right: 0;
        left: 0;
        height: 1px;
        background: currentColor;
        opacity: 0.2;
      }
    }
  }
  .tc-list-item--icon {
    text-align: center;
    line-height: $size;
  }
  .tc-list-item--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .tc-list-item--title {
      padding-right: 10px;
      user-select: none;
    }
    .tc-list-item--switch,
    .tc-list-item--indicator,
    .tc-list-item--description {
      padding-right: 10px;
    }
    .tc-list-item--description {
      opacity: 0.8;
      user-select: none;
    }
    .tc-list-item--switch {
      display: flex;
      padding-right: 7px;
    }
    .tc-list-item--indicator {
      display: flex;
      i {
        opacity: 0.4;
        font-size: 12px;
      }
    }
  }
}
</style>
