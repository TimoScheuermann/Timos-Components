<template>
  <div class="">
    <tc-headline title="Headings" />

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <tc-headline title="Text" />

    <div class="text__example"><span>Sample Text</span></div>
    <div class="text__example"><b>Sample Text bold</b></div>
    <div class="text__example"><i>Sample Text italic</i></div>
    <div class="text__example"><u>Sample Text underline</u></div>

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
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
@Component({
  components: {
    'tc-headline': TCHeadline
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
