<template>
  <div class="tc-picker">
    <div class="tc-picker--custom tc-container">
      [[getTile()]]
    </div>
    <select name="" id="" :multiple="multiple" v-model="currentlySelected">
      <option v-for="v in values" :key="v" :value="v">
        {{ v }}
      </option>
    </select>
    <div>
      {{ currentlySelected }}
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import uuidVue from '../uuid.vue';
@Component({
  mixins: [uuidVue],
})
export default class TCPicker extends Vue {
  @Prop() multiple!: boolean;
  @Prop() value!: any | any[];
  @Prop() values: any | any[] = ['A', 'B', 'C', 1, true];

  currentlySelected: any | any[] = this.value;

  update(): void {
    this.$emit('input', this.currentlySelected);
  }

  get title(): string {
    return typeof this.currentlySelected;
  }
}
</script>
<style lang="scss" scoped>
@import '../../variables';
@import '../tc-container';

.tc-picker {
  display: inline-block;
  @supports (-webkit-touch-callout: none) {
    /* CSS specific to iOS devices */
    .tc-picker--custom {
      display: none;
    }
  }

  @supports not (-webkit-touch-callout: none) {
    /* CSS for other than iOS devices */
    select {
      display: none;
    }
  }
}
</style>
