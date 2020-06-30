<template>
  <div class="tccomponents--howto">
    <tccomponents-subpage-hero subtitle="Getting Started" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero
  }
})
export default class TCComponentsHowTo extends Vue {}
</script>

<style lang="scss" scoped></style>
