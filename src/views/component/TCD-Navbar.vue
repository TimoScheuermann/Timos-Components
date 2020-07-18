<template>
  <div>
    <h1>Examples</h1>

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

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCNavbar from '@/tccomponents/component/navbar/TC-Navbar.vue';
import TCNavbarItem from '@/tccomponents/component/navbar/TC-Navbar-Item.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

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
