<template>
  <div>
    <h1>Options</h1>

    <tl-grid minWidth="320">
      <portfolio-code-example
        title="Simple Headline"
        tag="tc-headline"
        :attr="{ title: 'Welcome back!' }"
      >
        <tc-headline title="Welcome back!" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Simple Headline with Icon"
        tag="tc-headline"
        :attr="{ title: 'Welcome back!', icon: 'heart' }"
      >
        <tc-headline title="Welcome back!" icon="heart" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Example of Default Slot"
        tag="tc-headline"
        inner="<tc-button name='Logout' icon='logout' />"
        :attr="{ title: 'Welcome back!' }"
      >
        <tc-headline title="Welcome back!">
          <tc-button name="Logout" icon="logout"></tc-button>
        </tc-headline>
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCButton from '@/tccomponents/button/TC-Button.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-button': TCButton,
    'tl-grid': TLGrid
  }
})
export default class TCDHeadline extends Vue {}
</script>
