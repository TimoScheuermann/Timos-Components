<template>
  <div
    class="tc-tr"
    @click="handleClick"
    :style="styles"
    :class="classes"
    :ref="uuid_"
  >
    <tc-td v-if="tctd.selectable">
      <div @click.stop>
        <tc-checkbox
          v-if="data"
          :dark="tctd.dark"
          :tfbackground="tfbackground"
          :background="background"
          :value="selected"
          @input="checkBoxClicked"
        />
      </div>
    </tc-td>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins, Watch } from 'vue-property-decorator';

import TCCheckbox from '../checkbox/TC-Checkbox.vue';
import TCTd from './TC-Td.vue';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCTrExpanded from './TC-Tr-Expanded.vue';
import { CombinedVueInstance } from 'vue/types/vue';

@Component({
  components: {
    'tc-checkbox': TCCheckbox,
    'tc-td': TCTd
  }
})
export default class TCTr extends Mixins(TCComponent) {
  @Prop() data!: object;

  public instance!: CombinedVueInstance<
    Vue,
    object,
    object,
    object,
    // eslint-disable-next-line
    Record<never, any>
  >;

  get tctd(): Record<string, unknown> {
    const parent: Vue = this.$parent.$parent;
    return { ...parent.$data, ...parent.$props } || {};
  }

  get cs(): object[] {
    return this.tctd.currentSelection as object[];
  }

  get selected(): boolean {
    if (!this.data) return false;
    return this.cs.includes(this.data);
  }

  getExpanded(): boolean {
    return (
      this.instance &&
      this.instance.$data.expanded &&
      !!document.getElementById(this.uuid_)
    );
  }

  @Watch('tctd.sort')
  public hideAllExpander() {
    document.querySelectorAll('tr.tc-tr-generated').forEach(e => e.remove());
  }

  public handleClick(): void {
    const affected: Element = this.$refs[this.uuid_] as Element;
    affected.classList.remove('tc-tr__expanded');
    if (this.getExpanded()) {
      this.hideExpander();
    } else if (this.$slots.expander) {
      this.showExpander();
      affected.classList.add('tc-tr__expanded');
    } else {
      this.checkBoxClicked();
    }
  }

  public hideExpander(): void {
    if (this.getExpanded()) {
      this.instance.$data.expanded = false;
    }
  }

  public showExpander(): void {
    this.createInstance();
    if (!document.getElementById(this.uuid_)) {
      this.mountInstance();
    }
    this.instance.$data.expanded = true;
  }

  public checkBoxClicked(): void {
    if (this.tctd.selectable && this.data) {
      if (this.tctd.multiSelect) {
        if (!this.selected) {
          this.cs.push(this.data);
        } else {
          this.cs.splice(this.cs.indexOf(this.data), 1);
        }
      } else {
        if (!this.selected) {
          // while (this.cs.length > 0) this.cs.pop();
          this.cs.splice(0, this.cs.length);
          this.cs.push(this.data);
        } else {
          this.cs.splice(0, this.cs.length);
        }
      }
    }
  }

  get styles(): string {
    return `--tc-tr__background: ${this.getChosenBackground(
      this.tctd.dark ? 'colorDark' : 'color'
    )};--tc-tr__expanded: ${this.getChosenBackground(
      this.tctd.dark ? 'containerDark' : 'container'
    )};`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-tr__dark': this.tctd.dark,
      'tc-tr__selectable': this.tctd.selectable,
      'tc-tr__selected': this.selected,
      'tc-tr__highlighted': this.tfbackground || this.background
    };
  }

  public createInstance() {
    const affected: Element = this.$refs[this.uuid_] as Element;
    if (!this.instance) {
      const TrExpanded = Vue.extend(TCTrExpanded);
      this.instance = new TrExpanded();
      this.instance.$slots.default = this.$slots.expander;
      this.instance.$mount();
    }
    this.instance.$props.colspan = affected.children.length;
    this.instance.$props.tfbackground = this.tfbackground;
    this.instance.$props.background = this.background;
    this.instance.$props.dark = this.tctd.dark;
  }

  public mountInstance() {
    const affected: Element = this.$refs[this.uuid_] as Element;
    const parent = affected.parentNode;
    const sibling = affected.nextSibling;

    const expanderElement = document.createElement('tr');
    expanderElement.setAttribute('class', 'tc-tr-generated');
    expanderElement.setAttribute('id', this.uuid_);
    expanderElement.appendChild(this.instance.$el);
    if (parent) {
      parent.insertBefore(expanderElement, sibling);
    }
  }
}
</script>

<style lang="scss" scoped>
.tc-tr {
  display: table-row;
  transition: 0.2s ease-in-out;
  border-radius: $border-radius;
  &.tc-tr__selectable {
    cursor: pointer;
  }

  .tc-td {
    color: $color;
  }

  &.tc-tr__dark .tc-td {
    color: $color_dark;
  }

  &:hover .tc-td {
    background: darken($background, 5%);
  }
  &.tc-tr__dark:hover .tc-td {
    background: lighten($background_dark, 10%);
  }

  &.tc-tr__selected {
    .tc-td {
      background: rgba(var(--tc-tr__background), 0.1);
    }
  }
  &.tc-tr__highlighted {
    .tc-td {
      background: rgba(var(--tc-tr__background), 0.3);
    }
  }
  &.tc-tr__highlighted:hover,
  &.tc-tr__highlighted.tc-tr__selected {
    .tc-td {
      background: rgba(var(--tc-tr__background), 0.8);
    }
  }

  &.tc-tr .tc-td {
    &:first-child {
      border-radius: $border-radius 0 0 $border-radius;
    }
    &:last-child {
      border-radius: 0 $border-radius $border-radius 0;
    }
  }
  &:first-child .tc-td {
    &:first-child {
      border-radius: 0 0 0 $border-radius;
    }
    &:last-child {
      border-radius: 0 0 $border-radius 0;
    }
  }

  &.tc-tr__expanded .tc-td {
    background: rgba(var(--tc-tr__expanded), 0.8);

    &:first-child {
      border-bottom-left-radius: 0px;
    }
    &:last-child {
      border-bottom-right-radius: 0px;
    }
  }
}
</style>
