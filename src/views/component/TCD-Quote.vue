<template>
  <div>
    <h1>Variants</h1>

    <tl-grid minWidth="350">
      <portfolio-code-example
        tag="tc-quote"
        title="Simple Quote"
        :attr="{ title: 'Java is just an island' }"
        inner="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in commodi corrupti id distinctio sequi temporibus tempore, architecto quibusdam!"
      >
        <tc-quote title="Java is just an island">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          in commodi corrupti id distinctio sequi temporibus tempore, architecto
          quibusdam!
        </tc-quote>
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-quote"
        title="Custom Header"
        inner="<div slot='header'>**<b style='margin-right: 10px'>Really cool article</b>**<tc-button icon='heart' name='10 Likes' />**</div>**Nisi obcaecati distinctio laudantium assumenda."
      >
        <tc-quote>
          <div slot="header">
            <b style="margin-right: 10px;">Really cool article</b>
            <tc-button icon="heart" name="10 Likes" />
          </div>
          Nisi obcaecati distinctio laudantium assumenda.
        </tc-quote>
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCQuote from '@/tccomponents/quote/TC-Quote.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
@Component({
  components: {
    'tc-quote': TCQuote,
    'tl-grid': TLGrid,
    'tc-button': TCButton,
    'portfolio-code-example': PortfolioCodeExample
  }
})
export default class TCDQuote extends Vue {}
</script>
