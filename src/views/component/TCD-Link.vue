<template>
  <div>
    <tc-headline title="Link" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptas
      esse harum vero debitis cum officia praesentium ullam culpa impedit
      temporibus, recusandae fugit tenetur? Eveniet non inventore illum
      asperiores dolor.
    </p>
    <tc-headline title="Slots" />
    <h3>default</h3>
    <tc-headline title="Variants" />
    <tl-grid>
      <portfolio-code-example
        tag="tc-link"
        inner="A very simple Link"
        title="Simple Link"
      >
        <tc-link>A very simple Link</tc-link>
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-link"
        inner="<i class='ti ti-sun' /> Weather"
        title="Text + Icon"
      >
        <tc-link><i class="ti ti-sun" /> Weather</tc-link>
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-link"
        inner="<i class='ti ti-home' /> TC-Link"
        title="Router-Link"
        :attr="{ to: '{}' }"
      >
        <tc-link :to="{}"><i class="ti ti-home" /> TC-Link</tc-link>
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-link"
        inner="<i class='ti ti-home' /> TC-Link"
        title="href"
        :attr="{ href: './projects/timoscomponents/Link' }"
      >
        <tc-link href="./projects/timoscomponents/Link"
          ><i class="ti ti-home" /> TC-Link</tc-link
        >
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCLink from '@/tccomponents/link/TC-Link.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-link': TCLink,
    'tl-grid': TLGrid,
    'portfolio-code-example': PortfolioCodeExample
  }
})
export default class TCDLink extends Vue {}
</script>
<style lang="scss" scoped>
/deep/ .tc-link {
  margin-top: 10px !important;
}
</style>
