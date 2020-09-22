<template>
  <div class="tccomponents--howto">
    <tccomponents-subpage-hero subtitle="Getting Started" />
    <div content>
      <h1>Installation</h1>
      <p>
        TC Components is a framework of UI components based on Vuejs which means
        that vuejs has to be in your project so that TC Components can do the
        magic.
      </p>
      <h2>NPM</h2>
      <p>
        You can install TC Components through npm with the command:
      </p>
      <tc-code-example lang="javascript" title="Command">
        <pre>
npm i tccomponents_vue
// or
yarn add tccomponents_vue</pre
        >
      </tc-code-example>

      <h1>Import in your project</h1>
      <p>
        To use TC Components in your vuejs project, add this code:
      </p>

      <tc-code-example lang="javascript">
        <pre>
// main.ts or main.js
import Vue from 'vue'

import * as TCComponents from "tccomponents_vue";
import "tccomponents_vue/lib/tccomponents_vue.css";

for (const component in TCComponents) {
  Vue.component(
    component,
    TCComponents[component],
  );
}</pre
        >
      </tc-code-example>

      <h2>If you only want specific components do this:</h2>

      <tc-code-example lang="javascript">
        <pre>
// main.ts or main.js
import Vue from 'vue'

import "tccomponents_vue/lib/tccomponents_vue.css";
import { tcButton, tcTable, tcAvatar } from "tccomponents_vue";

Vue.component("tc-button", tcButton);
Vue.component("tc-table", tcTable);
Vue.component("tc-avatar", tcAvatar);</pre
        >
      </tc-code-example>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-code-example': TCCodeExample
  }
})
export default class TCComponentsHowTo extends Vue {}
</script>

<style lang="scss" scoped></style>
