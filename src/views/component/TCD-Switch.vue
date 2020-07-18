<template>
  <div>
    <h1>Switch</h1>
    <tc-switch></tc-switch>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSwitch from '@/tccomponents/component/switch/TC-Switch.vue';
@Component({
  components: {
    'tc-switch': TCSwitch
  }
})
export default class TCDSwitch extends Vue {}
</script>
