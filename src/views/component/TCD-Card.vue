<template>
  <div>
    <h1>Options</h1>

    <tl-grid minWidth="320">
      <portfolio-code-example
        title="Simple Card"
        tag="tc-card"
        :attr="{ title: 'Card Title', subtitle: 'Subtitle' }"
        inner="Hello World!"
      >
        <tc-card
          class="tc-card__example"
          title="Card Title"
          subtitle="Subtitle"
        >
          Hello World!
        </tc-card>
      </portfolio-code-example>

      <portfolio-code-example
        title="Example of Media Slot"
        tag="tc-card"
        :attr="{ title: 'Card Title', subtitle: 'Subtitle' }"
        :inner="`<img slot='media' src='${src}' />**Hello World!`"
      >
        <tc-card
          class="tc-card__example"
          title="Card Title"
          subtitle="Subtitle"
        >
          <img slot="media" :src="src" />
          Hello World!
        </tc-card>
      </portfolio-code-example>

      <portfolio-code-example
        title="Example of Media Slot (dark) & rounded"
        tag="tc-card"
        :attr="{
          title: 'Card Title',
          subtitle: 'Subtitle',
          dark: 'true',
          rounded: 'true'
        }"
        :inner="`<img slot='media' src='${src}' />**Hello World!`"
      >
        <tc-card
          class="tc-card__example"
          dark="true"
          rounded="true"
          title="Card Title"
          subtitle="Subtitle"
        >
          <img slot="media" :src="src" />
          Hello World!
        </tc-card>
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCImage from '@/tccomponents/component/image/TC-Image.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tc-image': TCImage
  }
})
export default class TCDCard extends Vue {
  @Prop() component!: TCComponent;

  public src =
    'https://davidjrodger.files.wordpress.com/2013/06/travel-photo-arctic-circle-norway-misty-mountains-like-smoke-rising-from-forest-image-copyright-david-j-rodger.jpg';
  // public src: string = "https://gradientjoy.com/400x300?id=44";
}
</script>
<style lang="scss" scoped>
.tc-card__example {
  max-width: 350px;
}
</style>
