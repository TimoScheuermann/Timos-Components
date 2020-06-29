<template>
  <div>
    <tc-headline title="Headline" />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam
      eligendi ut, libero illo quam earum odit neque harum ex velit maiores
      aliquam quae itaque placeat, natus accusamus error reprehenderit.
    </p>
    <tc-headline title="Slots" />
    <h3>Default</h3>
    <h3>Title</h3>
    <tc-headline title="Options" />

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
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
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
