<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione
      porro eos aliquid? Et quas accusantium debitis, porro exercitationem
      voluptatibus sit ipsa ex. Quas dignissimos asperiores, sed iure debitis
      tenetur.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <h2>Simple Navbar</h2>
      <tc-navbar :dark="$store.getters.dark">
        <tc-navbar-item icon="house" name="Home" />
        <tc-navbar-item
          icon="file-code"
          name="TC Navbar"
          routeName="TC-navbar"
        />
      </tc-navbar>
      <tc-code-example>
        <pre>
&lt;tc-navbar>
  &lt;tc-navbar-item icon="house" name="Home" />
  &lt;tc-navbar-item
    icon="file-code"
    name="TC Navbar"
    routeName="TC-navbar"
  />
&lt;/tc-navbar></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false">
      <h2>Navbar & Logo</h2>
      <tc-navbar :dark="$store.getters.dark">
        <b slot="logo"><i class="ti-tccomponents-tc" /> Components</b>
        <tc-navbar-item icon="house" name="Home" />
        <tc-navbar-item icon="gears" name="Settings" />
      </tc-navbar>
      <tc-code-example>
        <pre>
&lt;tc-navbar>
  &lt;b slot="logo">&lt;i class="ti-tccomponents-tc" /> Components&lt;/b>
  &lt;tc-navbar-item icon="house" name="Home" />
  &lt;tc-navbar-item icon="gears" name="Settings" />
&lt;/tc-navbar></pre
        >
      </tc-code-example>
    </tc-card>

    <tc-card :rounded="true" :shadow="false">
      <h2>Navbar & Logo & Actions</h2>
      <tc-navbar :dark="$store.getters.dark">
        <b slot="logo"><i class="ti-tccomponents-tc" /> Components</b>
        <tc-navbar-item icon="house" name="Home" />
        <tc-navbar-item icon="gears" name="Settings" />
        <tc-button slot="actions" name="Login" icon="login" />
      </tc-navbar>
      <tc-code-example>
        <pre>
&lt;tc-navbar>
  &lt;!-- this can also be an image, Important! is only slot='logo' -->
  &lt;b slot="logo">&lt;i class="ti-tccomponents-tc" /> Components&lt;/b>
  &lt;tc-navbar-item icon="house" name="Home" />
  &lt;tc-navbar-item icon="gears" name="Settings" />
  &lt;tc-button slot="actions" name="Login" icon="login" />
&lt;/tc-navbar></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>TC Navbar Item</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum
      commodi, sit est quibusdam, quia earum sed nesciunt in iste aut enim,
      dignissimos quo vero a fuga. Vero, quisquam eveniet.
    </p>

    <tc-card :rounded="true" :shadow="false" snbi>
      <h2>Variants</h2>
      <tl-grid>
        <div>
          <h3>Custom Name</h3>
          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item name="My Route Name" />
          </tl-flow>
        </div>
        <div>
          <h3>Name & Icon</h3>
          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item name="Chat" icon="chat-bubbles" />
          </tl-flow>
        </div>
        <div>
          <h3>Sample routeName</h3>
          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item name="TC Navbar" icon="bar" routeName="TC-navbar" />
          </tl-flow>
        </div>
      </tl-grid>
      <h2>Colors (active state)</h2>
      <tl-grid>
        <div>
          <h3>error</h3>
          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item
              icon="cross-inverted"
              name="error"
              tfcolor="error"
              routeName="TC-navbar"
            />
          </tl-flow>
        </div>
        <div>
          <h3>success</h3>

          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item
              icon="checkmark-circle"
              name="success"
              tfcolor="success"
              routeName="TC-navbar"
            />
          </tl-flow>
        </div>
        <div>
          <h3>magenta</h3>

          <tl-flow :class="{ dark: $store.getters.dark }">
            <tc-navbar-item
              icon="heart"
              name="magenta"
              color="magenta"
              routeName="TC-navbar"
            />
          </tl-flow>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-navbar-item name="My Route Name" />
&lt;tc-navbar-item name="Chat" icon="chat-bubbles" />
&lt;tc-navbar-item name="TC Navbar" icon="bar" routeName="TC-navbar" />
&lt;tc-navbar-item
  icon="cross-inverted"
  name="error"
  tfcolor="error"
  routeName="TC-navbar"
/>
&lt;tc-navbar-item
  icon="checkmark-circle"
  name="success"
  tfcolor="success"
  routeName="TC-navbar"
/>
&lt;tc-navbar-item
  icon="heart"
  name="magenta"
  color="magenta"
  routeName="TC-navbar"
/></pre
        >
      </tc-code-example>
      <tccomponents-details-api
        suffix="for TC Navbar Item"
        :component="component.children[0]"
      />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TCNavbar from '@/tccomponents/component/navbar/TC-Navbar.vue';
import TCNavbarItem from '@/tccomponents/component/navbar/TC-Navbar-Item.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,

    'tc-navbar': TCNavbar,
    'tc-navbar-item': TCNavbarItem,
    'tl-grid': TLGrid,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tc-button': TCButton,
    'tccomponents-details-api': TCComponentsDetailsApi,
    'tl-flow': TLFlow
  }
})
export default class TCDNavbar extends Vue {
  @Prop() component!: TCComponent;
}
</script>

<style lang="scss" scoped>
.tc-navbar {
  position: static;
}
.tc-card:not(:first-child) {
  margin-top: 20px;
}
[snbi] {
  .tl-flow {
    box-shadow: $shadow;
    border-bottom: 1px solid rgba($color, 0.3);
    background: $paragraph;
    color: $color;
    &.dark {
      border-bottom: 1px solid rgba($color_dark, 0.3);
      background: $paragraph_dark;
      color: $color_dark;
    }
  }
}
</style>
