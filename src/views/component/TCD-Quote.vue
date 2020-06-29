<template>
  <div>
    <tc-headline title="Quote" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et vero
      omnis odio natus, voluptatibus incidunt libero hic cumque, illum voluptas
      temporibus repudiandae dicta quia rerum, fugit ut odit exercitationem?
    </p>
    <tc-headline title="Slots" />
    <h3>default</h3>
    <h3>header</h3>
    <tc-headline title="Variants" />

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
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCQuote from '@/tccomponents/quote/TC-Quote.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-quote': TCQuote,
    'tl-grid': TLGrid,
    'tc-button': TCButton,
    'portfolio-code-example': PortfolioCodeExample
  }
})
export default class TCDQuote extends Vue {}
</script>
