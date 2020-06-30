<template>
  <div>
    <tc-headline title="Example" />

    <tl-grid minWidth="350">
      <portfolio-code-example
        title="Modal Demo with used button slot"
        :attr="{
          'v-model': 'modalOpened',
          title: 'Modal Demo',
          subtitle: 'Very Simple'
        }"
        tag="tc-modal"
        inner="Open Dev-Tools for a mobile demo**<tc-button**slot='buttons'**variant='filled'**@click='modalOpened = false'**name='I like it'**icon='heart'**/>"
      >
        <tc-button icon="share" name="Open Modal" @click="modalOpened = true" />
      </portfolio-code-example>
    </tl-grid>

    <tc-modal v-model="modalOpened" title="Modal Demo" subtitle="Very Simple">
      Open Dev-Tools for a mobile demo
      <tc-button
        slot="buttons"
        variant="filled"
        @click="modalOpened = false"
        name="I like it"
        icon="heart"
      />
    </tc-modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCModal from '@/tccomponents/modal/TC-Modal.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'portfolio-code-example': PortfolioCodeExample,
    'tc-modal': TCModal,
    'tc-button': TCButton,
    'tl-grid': TLGrid
  }
})
export default class TCDModal extends Vue {
  public modalOpened = false;
}
</script>
