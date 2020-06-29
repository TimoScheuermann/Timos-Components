<template>
  <div>
    <tc-headline title="Buttons" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-headline title="Variants" />

    <tl-grid minWidth="320">
      <portfolio-code-example
        v-for="variant in variants"
        :title="variant"
        :key="variant"
        tag="tc-button"
        :attr="{
          variant: variant.split(' ')[0].toLowerCase(),
          name: 'Default | \'\'',
          icon: 'heart | \'\'',
          disabled: 'true | false'
        }"
      >
        <tc-button :variant="variant" name="Default" icon="" disabled="" />
        <tc-button :variant="variant" icon="heart" disabled="" />
        <tc-button :variant="variant" name="Default" icon="heart" disabled="" />
        <tc-button :variant="variant" name="Default" icon="" disabled="true" />
      </portfolio-code-example>
    </tl-grid>

    <tc-headline title="Colors" />
    <tl-grid minWidth="320">
      <portfolio-code-example
        v-for="color in colors"
        :title="color"
        :key="color"
        tag="tc-button"
        :attr="{
          tccolor: color,
          variant: 'border | filled | opaque',
          name: color,
          icon: 'color-fan'
        }"
      >
        <tc-button
          v-for="v in variants"
          :key="color + v"
          :variant="v"
          :tccolor="color"
          :name="color"
          icon="color-fan"
        />
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-button': TCButton,
    'tl-grid': TLGrid
  }
})
export default class TCDButton extends Vue {
  public variants: string[] = ['Border (default)', 'Filled', 'Opaque'];
  public colors: string[] = [
    'primary',
    'error',
    'success',
    'alarm',
    'paragraph'
  ];
}
</script>
