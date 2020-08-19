<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      tempora recusandae esse commodi! Quibusdam, omnis quis excepturi quidem
      quos repellat obcaecati nesciunt, minus dolorem ex aperiam placeat nobis
      temporibus atque.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid>
        <div>
          <h2>Simple Tabbar</h2>
          <!-- Simple Tabbar -->
          <tc-tabbar>
            <tc-tabbar-item icon="house" title="Home" />
            <tc-tabbar-item
              icon="tabbar"
              title="Tabbar"
              routeName="TC-tabbar"
            />
          </tc-tabbar>
        </div>
        <div>
          <h2>Tabbar with 3 items</h2>
          <!-- Tabbar with 3 items -->
          <tc-tabbar>
            <tc-tabbar-item icon="house" title="Home" />
            <tc-tabbar-item icon="chat-bubbles" title="Chat" />
            <tc-tabbar-item
              icon="tabbar"
              title="Tabbar"
              routeName="TC-tabbar"
            />
          </tc-tabbar>
        </div>
        <div>
          <h2>Tabbar with 4 items</h2>
          <!-- Tabbar with 4 items -->
          <tc-tabbar>
            <tc-tabbar-item icon="house" title="Home" />
            <tc-tabbar-item icon="chat-bubbles" title="Chat" />
            <tc-tabbar-item
              icon="tabbar"
              title="Tabbar"
              routeName="TC-tabbar"
            />
            <tc-tabbar-item icon="settings" title="Settings" />
          </tc-tabbar>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;!-- Simple Tabbar -->
&lt;tc-tabbar>
  &lt;tc-tabbar-item icon="house" title="Home" />
  &lt;tc-tabbar-item
    icon="tabbar"
    title="Tabbar"
    routeName="TC-tabbar"
  />
&lt;/tc-tabbar>

&lt;!-- Tabbar with 3 items -->
&lt;tc-tabbar>
  &lt;tc-tabbar-item icon="house" title="Home" />
  &lt;tc-tabbar-item icon="chat-bubbles" title="Chat" />
  &lt;tc-tabbar-item
    icon="tabbar"
    title="Tabbar"
    routeName="TC-tabbar"
  />
&lt;/tc-tabbar>

&lt;!-- Tabbar with 4 items -->
&lt;tc-tabbar>
  &lt;tc-tabbar-item icon="house" title="Home" />
  &lt;tc-tabbar-item icon="chat-bubbles" title="Chat" />
  &lt;tc-tabbar-item
    icon="tabbar"
    title="Tabbar"
    routeName="TC-tabbar"
  />
  &lt;tc-tabbar-item icon="settings" title="Settings" />
&lt;/tc-tabbar></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>TC Tabbar Item</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum
      commodi, sit est quibusdam, quia earum sed nesciunt in iste aut enim,
      dignissimos quo vero a fuga. Vero, quisquam eveniet.
    </p>

    <tc-card :rounded="true" :shadow="false" snbi>
      <h2>Colors (active state)</h2>
      <tl-grid>
        <div>
          <h3>error</h3>
          <tc-tabbar>
            <tc-tabbar-item
              icon="cross-inverted"
              title="error"
              tfcolor="error"
              routeName="TC-tabbar"
            />
          </tc-tabbar>
        </div>
        <div>
          <h3>success</h3>

          <tc-tabbar>
            <tc-tabbar-item
              icon="checkmark-circle"
              title="success"
              tfcolor="success"
              routeName="TC-tabbar"
            />
          </tc-tabbar>
        </div>
        <div>
          <h3>magenta</h3>

          <tc-tabbar>
            <tc-tabbar-item
              icon="heart"
              title="magenta"
              color="magenta"
              routeName="TC-tabbar"
            />
          </tc-tabbar>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-tabbar-item
  icon="cross-inverted"
  title="error"
  tfcolor="error"
  routeName="TC-tabbar"
/>
&lt;tc-tabbar-item
  icon="checkmark-circle"
  title="success"
  tfcolor="success"
  routeName="TC-tabbar"
/>
&lt;tc-tabbar-item
  icon="heart"
  title="magenta"
  color="magenta"
  routeName="TC-tabbar"
/></pre
        >
      </tc-code-example>
      <tccomponents-details-api
        suffix="for TC Tabbar Item"
        :component="component.children[0]"
      />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TCTabbar from '@/tccomponents/component/tabbar/TC-Tabbar.vue';
import TCTabbarItem from '@/tccomponents/component/tabbar/TC-Tabbar-Item.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import { TCComponent } from '@/models/TCComponent.model';

@Component({
  components: {
    'tc-tabbar': TCTabbar,
    'tc-tabbar-item': TCTabbarItem,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tc-code-example': TCCodeExample,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDTabbar extends Vue {
  @Prop() component!: TCComponent;
}
</script>
<style lang="scss" scoped>
.tc-tabbar {
  position: static;
  backdrop-filter: none;
  .tc-tabbar-item {
    flex-direction: column;
    /deep/ &,
    /deep/ i {
      margin: 0 2.5px !important;
    }
  }
}
</style>
