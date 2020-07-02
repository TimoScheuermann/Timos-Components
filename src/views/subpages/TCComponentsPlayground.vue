<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />
    <div content>
      <h1 @click="toggled = !toggled">SVG Animation</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="5"
        viewBox="0 0 16 5"
      >
        <path
          class="a"
          d="M2226,8l7,3,7-3-7,3Z"
          transform="translate(-2225 -7)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="5"
        viewBox="0 0 16 5"
      >
        <path
          class="a"
          d="M2226,8l7-3,7,3-7-3Z"
          transform="translate(-2225 -4)"
        />
      </svg>

      <svg viewBox="0 0 32 32">
        <path
          class="a b"
          d="M2218.5,8l14,5,14-5-14,5Z"
          transform="translate(-2216.5 -6)"
        />
      </svg>
      <svg viewBox="0 0 32 32">
        <path
          class="a b"
          d="M2218.5,8l14-5,14,5-14-5Z"
          transform="translate(-2216.5 -1)"
        />
      </svg>

      <svg viewBox="0 0 32 32">
        <path
          d="M3 16l13-5 13 5-13-5z"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        />
      </svg>
      <svg viewBox="0 0 32 32">
        <path class="arrow" :class="{ up: toggled }" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCSelect from '@/tccomponents/select/TC-Select.vue';
import TCInput from '@/tccomponents/input/TC-Input.vue';
import TCCheckbox from '@/tccomponents/checkbox/TC-Checkbox.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-select': TCSelect,
    'tc-input': TCInput,
    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid
  }
})
export default class TCComponentsPlayground extends Vue {
  toggled = false;
}
</script>

<style lang="scss" scoped>
.arrow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 4;
  transition: all 0.3s cubic-bezier(0.55, 1.93, 0.53, 0.59);

  d: path('M3 16l13 5 13-5-13 5z');
  &.up {
    d: path('M3 16l13-5 13 5-13-5z');
  }
}
svg {
  width: 32px;
  height: 32px;
}
.a {
  fill: none;
  stroke: #111;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}
.b {
  stroke-width: 4px;
}
.c {
  stroke-width: 6px;
}
</style>
