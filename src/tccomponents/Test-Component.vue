<template>
  <div class="tc-test-component">
    <ul>
      <li>UUID: {{ uuid_ }}</li>
      <li>TCCO: {{ tccolor_ }}</li>
      <li>DARK: {{ dark }}</li>
      <li>ISDA: {{ dark_ }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Mixins } from "vue-property-decorator";
import TCComponent from "./TC-Component.mixin";
import TCAutoBackground from "./TC-Auto-Background.mixin";
@Component
export default class TCTestComponent extends Mixins(TCAutoBackground) {}
</script>
