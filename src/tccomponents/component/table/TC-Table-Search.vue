<template>
  <div class="tc-table-search">
    <div class="tc-table-search__icon">
      <tf-icon :icon="icon" />
    </div>
    <div class="tc-table-search__input">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="innerValue"
        @input="update"
      />
      <div class="bar" />
      <div class="bar" />
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
export default class TCTableSearch extends Vue {
  @Prop({ default: 'lens' }) icon!: string;
  @Prop({ default: 'Search' }) placeholder!: string;
  @Prop() value!: string;

  public innerValue: string = this.value;

  @Watch('value')
  public valueChanged() {
    this.innerValue = this.value;
  }

  update() {
    this.$emit('input', this.innerValue);
  }
}
</script>

<style lang="scss" scoped>
.tc-table-search {
  padding: 10px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;

  .tc-table-search__icon {
    font-size: 20px;
    display: grid;
    place-content: center;
  }
  .tc-table-search__input {
    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
      z-index: 1;
      position: relative;
      color: currentColor;
      font: inherit;
      padding: 7.5px;
    }
    input:focus + .bar:nth-child(2) {
      width: 100%;
    }
    position: relative;
    .bar {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      opacity: 0.1;
      transform: translateX(-50%);
      transition: 0.2s ease-in-out;
      &:nth-child(2) {
        opacity: 0.6;
        width: 0%;
      }
    }
  }
}
</style>
