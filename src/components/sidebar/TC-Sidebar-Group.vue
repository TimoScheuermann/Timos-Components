<template>
  <div class="tc-sidebar--group">
    <div class="header">
      <input type="checkbox" :id="'groupExpand_' + uuid" v-model="expanded" />
      <label :for="'groupExpand_' + uuid">
        <div class="title"><i :class="'ti-' + icon"></i>{{ name }}</div>
        <div class="expander">
          <i class="ti-arrow-right"></i>
        </div>
      </label>
    </div>
    <div
      class="tc-sidebar--items"
      :class="{ expanded: expanded }"
      :style="maxheight"
    >
      <slot />
      <tc-divider />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import uuidVue from "../uuid.vue";
import TCDivider from "../divider/TC-Divider.vue";
@Component({
  mixins: [uuidVue],
  components: {
    "tc-divider": TCDivider
  }
})
export default class TCSidebarGroup extends Vue {
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop({ default: "300px" }) maxHeight!: string;

  public expanded = true;
  get maxheight(): {} {
    return {
      "max-height": this.expanded ? this.maxHeight : "0px"
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-sidebar--group {
  padding: 5px 0;
  .header {
    input {
      display: none;
    }
    input:checked + label {
      .expander {
        transform: rotate(90deg);
      }
    }
    label {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      opacity: 0.6;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
      padding: {
        right: 10px;
      }
      .title {
        display: flex;
        align-items: center;
        padding-left: 5px;
        i {
          width: 30px;
        }
      }
      .expander {
        transition: 0.2s ease-in-out;
        i {
          color: inherit;
        }
      }
    }
  }

  .tc-sidebar--items {
    overflow: {
      x: hidden;
      y: auto;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    transition: 0.3s ease-in-out;

    &.expanded {
      margin-top: 5px;
    }
  }
}
</style>
