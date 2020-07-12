<template>
  <div>
    <h1>Options</h1>

    <portfolio-code-example
      title="Only Title"
      tag="tc-header"
      :attr="{ title: 'Only Title' }"
    >
      <tc-header class="tc-header__example" title="Only Title" />
    </portfolio-code-example>

    <portfolio-code-example
      title="Title + Default Slot"
      tag="tc-header"
      :attr="{ title: 'Title' }"
      inner="Whatever you want to put in"
    >
      <tc-header class="tc-header__example" title="Title">
        What ever you want to put in
      </tc-header>
    </portfolio-code-example>

    <portfolio-code-example
      title="Only Backbutton"
      tag="tc-header"
      :attr="{ backTo: to, '@click': 'clicked' }"
    >
      <tc-header class="tc-header__example" :backTo="to" @click="clicked" />
    </portfolio-code-example>

    <portfolio-code-example
      title="Title + Backbutton"
      tag="tc-header"
      :attr="{
        title: 'Title',
        backName: 'Home',
        backTo: to,
        '@click': 'clicked'
      }"
    >
      <tc-header
        class="tc-header__example"
        title="Title"
        backName="Home"
        :backTo="to"
        @click="clicked"
      />
    </portfolio-code-example>

    <portfolio-code-example
      title="Title + Backbutton + Default Slot"
      inner="<tc-button name='Login' />"
      tag="tc-header"
      :attr="{
        title: 'Title',
        backName: 'Previous Page',
        backTo: 'to',
        '@click': 'clicked'
      }"
    >
      <tc-header
        class="tc-header__example"
        title="Title"
        backName="Previous Page"
        :backTo="to"
        @click="clicked"
      >
        <tc-button name="Login" />
      </tc-header>
    </portfolio-code-example>

    <h1>Variants</h1>
    <portfolio-code-example
      title="Fixed / Sticky"
      tag="tc-header"
      :attr="{
        title: 'Example'
      }"
    >
      <tc-header class="tc-header__example" title="Example"></tc-header>
    </portfolio-code-example>
    <portfolio-code-example
      title="Floating"
      tag="tc-header"
      :attr="{
        title: 'Example',
        variant: 'floating'
      }"
    >
      <tc-header
        class="tc-header__example"
        variant="floating"
        title="Example"
      ></tc-header>
    </portfolio-code-example>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCHeader from '@/tccomponents/header/TC-Header.vue';

import TCButton from '@/tccomponents/button/TC-Button.vue';
import TCSegments from '@/tccomponents/segments/TC-Segments.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-header': TCHeader,
    'tc-button': TCButton,
    'tc-segments': TCSegments
  }
})
export default class TCDHeader extends Vue {
  public to = {
    to: 'tc-header'
  };
  public clicked(): void {
    alert('back button clicked');
  }
}
</script>
<style lang="scss" scoped>
.tc-header__example {
  position: static !important;
  margin-bottom: 20px;
  backdrop-filter: none !important;
}
</style>
