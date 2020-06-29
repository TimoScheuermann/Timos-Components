<template>
  <div>
    <tc-headline title="Spinner"></tc-headline>
    <tc-spinner />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCSpinner from '@/tccomponents/spinner/TC-Spinner.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-spinner': TCSpinner
  }
})
export default class TCDSpinner extends Vue {}
</script>
