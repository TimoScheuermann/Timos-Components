<template>
  <div>
    <h1>Examples</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, pariatur
      iste numquam dolore nihil illum iusto adipisci eum odio quibusdam porro!
      Reprehenderit quam fuga, porro maiores id mollitia temporibus eveniet!
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>Normal</h2>
          <tc-list :dark="$store.getters.dark">
            <tc-list-item title="Users" icon="users" />
            <tc-list-item title="Menu" routeName="TC-list" icon="settings" />
            <tc-list-item title="Swich" value="true" icon="toggle" />
            <tc-list-item
              title="Description"
              description="Hello world"
              icon="heart"
            />
          </tc-list>
        </div>
        <div>
          <h2>Frosted & Title</h2>
          <div class="example-frosted">
            <tc-list :dark="$store.getters.dark" title="Title" :frosted="true">
              <tc-list-item title="Users" icon="users" />
              <tc-list-item title="Menu" routeName="TC-list" icon="settings" />
              <tc-list-item title="Swich" value="true" icon="toggle" />
              <tc-list-item
                title="Description"
                description="Hello world"
                icon="heart"
              />
            </tc-list>
          </div>
        </div>
      </tl-grid>

      <tc-code-example>
        <pre>
&lt;tc-list>
  &lt;tc-list-item title="Users" icon="users" />
  &lt;tc-list-item title="Menu" routeName="TC-list" icon="settings" />
  &lt;tc-list-item title="Swich" value="true" icon="toggle" />
  &lt;tc-list-item
    title="Description"
    description="Hello world"
    icon="heart"
  />
&lt;/tc-list>
&lt;tc-list title="Title" :frosted="true">
  &lt;tc-list-item title="Users" icon="users" />
  &lt;tc-list-item title="Menu" routeName="TC-list" icon="settings" />
  &lt;tc-list-item title="Swich" value="true" icon="toggle" />
  &lt;tc-list-item
    title="Description"
    description="Hello world"
    icon="heart"
  />
&lt;/tc-list></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>TC List Item</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum
      commodi, sit est quibusdam, quia earum sed nesciunt in iste aut enim,
      dignissimos quo vero a fuga. Vero, quisquam eveniet.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Variants</h2>
      <tl-grid>
        <div>
          <h3>Text</h3>
          <tc-list-item icon="mail" title="Mails" description="10" />
        </div>
        <div>
          <h3>Link</h3>
          <tc-list-item icon="list" title="TC List" routeName="TC-list" />
        </div>
        <div>
          <h3>Switch</h3>
          <tc-list-item icon="timos-accounts" title="Is Admin" :value="true" />
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-list-item icon="mail" title="Mails" description="10" />
&lt;tc-list-item icon="list" title="TC List" routeName="TC-list" />
&lt;tc-list-item icon="timos-accounts" title="Is Admin" :value="true" /></pre
        >
      </tc-code-example>
      <tccomponents-details-api
        suffix="for TC List Item"
        :dark="$store.getters.dark"
        :component="component.children[0]"
      />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCList from '@/tccomponents/component/list/TC-List.vue';
import TCListItem from '@/tccomponents/component/list/TC-List-Item.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tl-grid': TLGrid,
    'tc-list': TCList,
    'tc-list-item': TCListItem,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDList extends Vue {
  @Prop() component!: TCComponent;
  public switch = true;
}
</script>
<style lang="scss" scoped>
.example-frosted {
  border-radius: $border-radius;
  background: url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5');
}
</style>
