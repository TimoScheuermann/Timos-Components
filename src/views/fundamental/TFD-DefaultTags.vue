<template>
  <div class="tfd-default-tags">
    <tl-grid>
      <div>
        <tc-headline title="Headings" />
        <component v-for="(a, i) in Array(5)" :is="'h' + (i + 1)" :key="i">
          Heading {{ i + 1 }}
        </component>
      </div>
      <div>
        <tc-headline title="Text" />
        <div class="text__example"><span>Sample Text</span></div>
        <div class="text__example"><b>Sample Text bold</b></div>
        <div class="text__example"><i>Sample Text italic</i></div>
        <div class="text__example"><u>Sample Text underline</u></div>
      </div>

      <div>
        <tc-headline title="List" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </div>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';

@Component({
  components: {
    'tc-headline': TCHeadline,
    'tl-grid': TLGrid
  }
})
export default class TFDDefaultTags extends Vue {
  public tags: { tag: string; example: string }[] = [
    {
      tag: 'h1',
      example: 'Heading 1'
    }
  ];
}
</script>
<style lang="scss" scoped>
.text__example {
  margin-bottom: 10px;
}
</style>
