<template>
  <div>
    <h1>Slider</h1>
    <tc-slider />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSlider from '@/tccomponents/slider/TC-Slider.vue';
@Component({
  components: {
    'tc-slider': TCSlider
  }
})
export default class TCDSlider extends Vue {}
</script>
