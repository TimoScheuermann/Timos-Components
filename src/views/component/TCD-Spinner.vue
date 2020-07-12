<template>
  <div>
    <h1>Spinner</h1>
    <tc-spinner />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSpinner from '@/tccomponents/spinner/TC-Spinner.vue';
@Component({
  components: {
    'tc-spinner': TCSpinner
  }
})
export default class TCDSpinner extends Vue {}
</script>
