<template>
  <div
    class="tc-list-item"
    @click="clicked"
    :class="{ 'tc-list-item__link': href || to || value }"
  >
    <div class="tc-list-item--icon">
      <tf-icon :icon="icon" />
    </div>
    <div class="tc-list-item--container">
      <div class="tc-list-item--title">
        {{ title }}
      </div>
      <div v-if="value" class="tc-list-item--switch">
        <tc-switch v-model="innerValue" />
      </div>
      <div v-else-if="description" class="tc-list-item--description">
        {{ description }}
      </div>
      <div v-else-if="to || href" class="tc-list-item--indicator">
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
import { RawLocation } from 'vue-router';

@Component({
  components: {
    'tc-switch': TCSwitch,
    'tf-icon': TFIcon
  }
})
export default class TCListItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() to!: string | RawLocation;
  @Prop() href!: string;
  @Prop() value!: boolean;
  @Prop() description!: string;

  public innerValue = this.value;

  @Watch('value')
  public changed(): void {
    this.innerValue = this.value;
  }

  public clicked(event: MouseEvent): void {
    this.$emit('click', event);
    if (this.to) {
      let route: { name: string } = this.to as { name: string };
      if (typeof this.to == 'string') {
        route = { name: this.to };
      }
      if (this.$router.currentRoute.name !== route.name) {
        this.$router.push(route);
      }
    } else if (this.href) {
      window.open(this.href, '_blank');
    } else if (this.value) {
      this.innerValue = !this.innerValue;
      this.$emit('input', this.innerValue);
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 40px;

.tc-list__dark {
  .tc-list-item {
    &:hover {
      background: rgba(lighten($paragraph_dark, 20%), 0.5);
    }
  }
}
.tc-list-item {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: $size 1fr;
  grid-template-rows: $size;
  border-radius: $border-radius;

  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(darken($paragraph, 15%), 0.5);
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