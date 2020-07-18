<template>
  <div>
    <h1>Select</h1>
    <tc-select />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSelect from '@/tccomponents/component/select/TC-Select.vue';
@Component({
  components: {
    'tc-select': TCSelect
  }
})
export default class TCDSelect extends Vue {}
</script>
