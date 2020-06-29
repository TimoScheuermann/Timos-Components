<template>
  <div>
    <tc-headline title="Sidebar Layout" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
@Component({
  components: {
    'tc-headline': TCHeadline
  }
})
export default class TLDSidebar extends Vue {}
</script>
