<template>
  <div class="tc-table-2" :class="classes">
    <div class="tc-table-search-section" v-if="$slots.search">
      <slot name="search" />
    </div>
    <div class="tc-table-container" v-if="uuid_">
      <div class="tc-table-head">
        <tc-th v-if="selectable">
          <!-- <tc-checkbox v-if="multiSelect" :dark="dark" v-model="allSelected" /> -->
        </tc-th>
        <slot name="head" />
      </div>
      <transition-group
        tag="div"
        name="tc-table-row-anim"
        class="tc-table-body"
      >
        <slot />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCTh from './TC-Th.vue';
import TCCheckbox from '../checkbox/TC-Checkbox.vue';

@Component({
  components: {
    'tc-th': TCTh,
    'tc-checkbox': TCCheckbox
  }
})
export default class TCTable extends Mixins(TCComponent) {
  @Prop({ default: false }) selectable!: boolean;
  @Prop({ default: false }) multiSelect!: boolean;
  @Prop({ default: false }) striped!: boolean;
  @Prop({ default: true }) border!: boolean;

  public allSelected = false;
  public currentSelection: object[] = [];
  public sort: object[] = [];

  @Watch('sort')
  sortChanged(to: object[]) {
    if (to.length !== 1) {
      this.sort.splice(0, this.sort.length - 1);
    }
    this.$emit('sort', this.sort[0]);
  }

  @Watch('currentSelection', { deep: true, immediate: true })
  selectionChanged() {
    if (this.multiSelect) {
      this.$emit('input', this.currentSelection);
    } else {
      this.$emit(
        'input',
        this.currentSelection[this.currentSelection.length - 1]
      );
    }
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-table__dark': this.dark,
      'tc-table__striped': this.striped,
      'tc-table__border': this.border
    };
  }
}
</script>

<style lang="scss" scoped>
@mixin tc-table-style($bg, $hover, $stripe, $c) {
  background: $bg;
  color: $c;
  .tc-table-head,
  .tc-table-search-section {
    background: $hover;
  }
  .tc-table-search-section {
    position: sticky;
    left: 0;
    padding: 10px;
  }
  &.tc-table__striped /deep/ .tc-tr:nth-child(EVEN) {
    background: $stripe;
  }
  &.tc-table__border /deep/ .tc-tr:not(:last-of-type) {
    border-bottom: 1px solid rgba($c, 0.2);
  }
}

.tc-table-2 {
  max-width: 100%;

  overflow-x: auto;
  border-radius: $border-radius;

  .tc-table-container {
    width: 100%;
    display: table;
    border-collapse: collapse;
  }

  // === COLORS =========
  @include custom-scrollbar__light();
  @include tc-table-style($paragraph, $container, $background, $color);
  &.tc-table__dark {
    @include custom-scrollbar__dark();
    @include tc-table-style(
      $paragraph_dark,
      $container_dark,
      $background_dark,
      $color_dark
    );
  }
  // ====================

  .tc-table-head {
    display: table-row;
  }
  .tc-table-body {
    display: table-row-group;
  }
}
.tc-table-row-anim-move {
  transition: transform 1s;
}
</style>
