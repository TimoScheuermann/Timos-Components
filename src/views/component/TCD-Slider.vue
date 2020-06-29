<template>
  <div>
    <tc-headline title="Slider"></tc-headline>
    <tc-slider />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCSlider from '@/tccomponents/slider/TC-Slider.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-slider': TCSlider
  }
})
export default class TCDSlider extends Vue {}
</script>
