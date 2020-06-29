<template>
  <div>
    <tc-headline title="Scroll Up"></tc-headline>
    <tc-scroll-up />
    <tc-scroll-up icon="double-chevron-up" />
    <tc-scroll-up icon="house" />
    <tc-scroll-up icon="heart" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCScrollUp from '@/tccomponents/scrollup/TC-Scroll-Up.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-scroll-up': TCScrollUp
  }
})
export default class TCDScrollUp extends Vue {}
</script>
<style lang="scss" scoped>
.tc-scroll-up {
  display: inline-flex;
  transform: scale(1);
  position: relative;
  margin: 3px;
}
</style>
