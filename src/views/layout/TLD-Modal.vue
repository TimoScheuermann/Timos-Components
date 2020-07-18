<template>
  <div>
    <tc-headline title="Modal" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
@Component({
  components: {
    'tc-headline': TCHeadline
  }
})
export default class TLDModal extends Vue {}
</script>
