<template>
  <div>
    <tc-headline title="Select" />
    <tc-select />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCSelect from '@/tccomponents/select/TC-Select.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-select': TCSelect
  }
})
export default class TCDSelect extends Vue {}
</script>
