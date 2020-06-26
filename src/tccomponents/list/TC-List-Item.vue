<template>
  <div
    class="tc-list-item"
    @click="clicked()"
    :class="{ 'tc-list-item__link': !isSwitch }"
  >
    <div class="tc-list-item--icon">
      <i :class="'ti-' + icon"></i>
    </div>
    <div class="tc-list-item--container">
      <div class="tc-list-item--title">
        <span>{{ title }}</span>
      </div>
      <div v-if="isSwitch" class="tc-list-item--switch">
        <tc-switch v-model="innerValue" />
      </div>
      <div v-else class="tc-list-item--indicator">
        <i class="ti-chevron-right" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import TCSwitch from "../switch/TC-Switch.vue";
import TCComponent from "../TC-Component.mixin";
@Component({
  components: {
    "tc-switch": TCSwitch
  }
})
export default class TCListItem extends Mixins(TCComponent) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() to!: any;
  @Prop() href!: string;
  @Prop({ default: false }) value!: boolean;
  @Prop({ default: false }) isSwitch!: boolean;

  public innerValue = this.value;

  @Watch("value")
  public changed() {
    this.innerValue = this.value;
  }

  public clicked(): void {
    if (!this.isSwitch) {
      if (this.to) {
        if (typeof this.to == "string") {
          this.$router.push({ name: this.to });
        } else {
          this.$router.push(this.to);
        }
      } else {
        window.open(this.href, "_blank");
      }
    } else {
      this.innerValue = !this.innerValue;
      this.$emit("input", this.innerValue);
    }
  }
}
</script>
<style lang="scss" scoped>
$size: 40px;

.tc-list__dark {
  .tc-list-item {
    &:hover {
      background: lighten($color, 15%);
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
    background: $paragraph;
  }

  &.tc-list-item__link {
    cursor: pointer;
  }
  &:not(:last-child) {
    .tc-list-item--container {
      &::after {
        position: absolute;
        content: "";
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
      span {
        padding-right: 10px;
      }
    }
    .tc-list-item--switch,
    .tc-list-item--indicator {
      padding-right: 10px;
    }
    .tc-list-item--switch {
      display: flex;
    }
    .tc-list-item--indicator {
      margin-right: -5px;
      i {
        opacity: 0.4;
        // font-size: 10px;
      }
    }
  }
}
</style>
