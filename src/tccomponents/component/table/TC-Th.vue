<template>
  <div class="tc-th" :class="{ 'tc-th__sort': attribute }" @click="handleClick">
    <div class="tc-th--container">
      <div class="tc-th__content">
        <slot />
      </div>
      <transition-group
        mode="in-out"
        class="tc-th__sort"
        tag="div"
        name="sort"
        :class="{ both: sortDirection === 0 }"
        v-if="attribute"
      >
        <tf-icon
          :key="attribute + 'u'"
          icon="chevron-up"
          v-if="sortDirection < 1"
        />
        <tf-icon
          :key="attribute + 'd'"
          icon="chevron-down"
          v-if="sortDirection > -1"
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCTh extends Vue {
  @Prop() attribute!: string;

  public sortDirection = 0;

  get tctd(): Record<string, unknown> {
    return this.$parent.$data;
  }

  @Watch('tctd.sort')
  sortChanged(to: Record<string, unknown>[]) {
    if ((to[to.length - 1].attribute as string) !== this.attribute) {
      this.sortDirection = 0;
    }
  }

  public handleClick(): void {
    if (!this.attribute) return;

    this.sortDirection += 2;
    if (this.sortDirection > 1) this.sortDirection = -1;

    (this.tctd.sort as object[]).push({
      attribute: this.attribute,
      direction: this.sortDirection
    });
  }
}
</script>

<style lang="scss" scoped>
.tc-th {
  display: table-cell;
  padding: 10px;
  font-weight: bold;

  &.tc-th__sort {
    cursor: pointer;
    user-select: none;
  }

  .tc-th--container {
    display: flex;
    flex-wrap: nowrap;

    .tc-th__sort {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 10px;
      margin-left: 10px;
      width: 10px;
      position: relative;
      .tf-icon {
        position: absolute;
        transition: all 0.2s ease-in-out;
      }
      &.both .tf-icon {
        $pad: 4px;
        &:nth-child(1) {
          margin-top: -$pad;
        }
        &:nth-child(2) {
          margin-top: $pad;
        }
      }
    }
  }
}

.sort-enter-active,
.sort-leave-active {
  transition: all 1s;
}
.sort-item {
  transition: all 1s;
}
// .sort-enter {
//   opacity: 0;
//   transform: translateY(5px) rotate(-90deg);
// }
.sort-leave-to,
.sort-enter {
  opacity: 0;
  transform: scale(0) translateY(5px) rotate(90deg);
}
.sort-leave-active {
  position: absolute;
}
</style>
