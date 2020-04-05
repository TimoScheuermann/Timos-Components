<template>
  <div class="tc-switch">
    <input
      @input="updateVal()"
      type="checkbox"
      :id="'tc-switch_' + uuid"
      v-model="toggled"
    />
    <label :for="'tc-switch_' + uuid">
      <div class="container">
        <div class="ball"></div>
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import uuidVue from '../uuid.vue';
@Component({
  mixins: [uuidVue],
})
export default class TCSwitch extends Vue {
  @Prop({ default: false }) value!: boolean;

  toggled: boolean = this.value;
  updateVal() {
    this.$emit('input', !this.toggled);
  }
}
</script>
<style lang="scss" scoped>
@import '../../variables';
.tc-switch {
  user-select: none;
  $ballSize: 21;

  display: inline-block;
  margin: 3px;
  input {
    display: none;
  }
  input:checked + label {
    .container {
      background: $primary;
      .ball {
        transform: translate(calc(50% + #{$ballSize / 2 + 2}px), -50%);
      }
    }
  }
  label {
    cursor: pointer;
    .container {
      width: #{$ballSize * 2 + 4}px;
      height: #{$ballSize + 4}px;
      border-radius: #{$ballSize + 4}px;
      background: $paragraph;
      position: relative;
      transition: 0.2s ease-in;

      .ball {
        position: absolute;
        transition: 0.2s cubic-bezier(0.73, 1.64, 0.35, 0.65);
        left: 0;
        top: 50%;
        height: #{$ballSize}px;
        width: #{$ballSize}px;
        border-radius: inherit;
        background: #fff;
        transform: translate(calc(50% - #{$ballSize / 2 - 2}px), -50%);
      }
    }
  }
}
</style>
