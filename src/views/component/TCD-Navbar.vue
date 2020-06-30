<template>
  <div>
    <tc-headline title="Examples" />

    <tl-grid>
      <portfolio-code-example
        title="Logo Slot"
        tag="tc-navbar"
        inner='<b slot="logo">Logo</b>'
      >
        <tc-navbar class="tc-navbar__example">
          <b slot="logo">Logo</b>
        </tc-navbar>
      </portfolio-code-example>

      <portfolio-code-example
        title="Navbar Item"
        tag="tc-navbar"
        inner='
          <tc-navbar-item icon="house" name="Home" to="./Navbar" />'
      >
        <tc-navbar class="tc-navbar__example">
          <tc-navbar-item icon="house" name="Home" to="./Navbar" />
        </tc-navbar>
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCNavbar from '@/tccomponents/navbar/TC-Navbar.vue';
import TCNavbarItem from '@/tccomponents/navbar/TC-Navbar-Item.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tc-navbar': TCNavbar,
    'tc-navbar-item': TCNavbarItem,
    'tl-grid': TLGrid
  }
})
export default class TCDNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.tc-navbar__example {
  position: static !important;
  margin-bottom: 20px;
  backdrop-filter: none !important;
}
</style>
