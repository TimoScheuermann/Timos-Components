<template>
  <div>
    <h1>Options</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam
      nisi adipisci soluta obcaecati ratione, consequuntur deserunt nemo
      accusantium repellendus, eaque vel, nihil tempora voluptates laboriosam!
      Numquam illo beatae assumenda!
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>Simple</h2>
          <tc-table :dark="$store.getters.dark">
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr v-for="p in persons" :key="p.id">
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td>{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
        </div>
        <div>
          <h2>Striped & No Border</h2>
          <tc-table :striped="true" :border="false" :dark="$store.getters.dark">
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr v-for="p in persons" :key="p.id">
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td>{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
        </div>
      </tl-grid>
      <h2>Simple Table</h2>
      <tc-code-example>
        <pre><code>&lt;tc-table :striped="true | false" :border="true | false">
  &lt;template slot="head">
    &lt;tc-th>Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th>Location&lt;/tc-th>
    &lt;tc-th>ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr v-for="p in persons" :key="p.id">
    &lt;tc-td>{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td>{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
      </tc-code-example>
    </tc-card>

    <h1>Sortable Tables</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      reiciendis, magni, quae labore ipsa nisi animi accusamus praesentium
      ratione officiis eveniet, doloribus incidunt voluptatibus! Nesciunt
      similique deleniti inventore beatae repellendus!
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <h2>Example</h2>
      <tc-table :dark="$store.getters.dark" @sort="s => (sort = s)">
        <template slot="head">
          <tc-th attribute="name">Name</tc-th>
          <tc-th>Age</tc-th>
          <tc-th attribute="location">Location</tc-th>
          <tc-th attribute="id">ID</tc-th>
        </template>
        <tc-tr v-for="p in personsSorted" :key="p.id + '_s'">
          <tc-td>{{ p.name }}</tc-td>
          <tc-td>{{ p.age }}</tc-td>
          <tc-td>{{ p.location }}</tc-td>
          <tc-td>{{ p.id }}</tc-td>
        </tc-tr>
      </tc-table>
      <tl-grid>
        <tc-code-example title="Code (html)">
          <pre><code>&lt;tc-table @sort="s => (sort = s)">
  &lt;template slot="head">
    &lt;tc-th attribute="name">Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th attribute="location">Location&lt;/tc-th>
    &lt;tc-th attribute="id">ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr v-for="p in personsSorted" :key="p.id">
    &lt;tc-td>{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td>{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
        </tc-code-example>

        <tc-code-example title="Code (ts)" lang="js">
          <pre><code>
public persons: Person[] = [...];
public sort = {
  direction: 0,
  attribute: 'name'
};

get personsSorted(): Person[] {
  return persons.sort(
    (a: any, b: any) =>
      this.sort.direction *
      b[this.sort.attribute].localeCompare(a[this.sort.attribute])
  );
}</code></pre>
        </tc-code-example>
      </tl-grid>
    </tc-card>

    <h1>Selectable Tables</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      reiciendis, magni, quae labore ipsa nisi animi accusamus praesentium
      ratione officiis eveniet, doloribus incidunt voluptatibus! Nesciunt
      similique deleniti inventore beatae repellendus!
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>Single Select</h2>
          <p>{{ singleSelect || 'nothing selected' }}</p>
          <tc-table
            :dark="$store.getters.dark"
            :selectable="true"
            v-model="singleSelect"
          >
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr v-for="p in persons" :key="p.id + 's+'" :data="p.name">
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td>{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
        </div>
        <div>
          <h2>Multi Select</h2>
          <p>{{ multiSelect.join(', ') || 'nothing selected' }}</p>
          <tc-table
            :dark="$store.getters.dark"
            :selectable="true"
            :multiSelect="true"
            v-model="multiSelect"
          >
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr v-for="p in persons" :key="p.id + 's*'" :data="p.name">
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td>{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre><code>
&lt;!-- multiSelect determines if multiple rows can be selected -->
&lt;tc-table :selectable="true" :multiSelect="true" v-model="selection">
  &lt;template slot="head">
    &lt;tc-th>Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th>Location&lt;/tc-th>
    &lt;tc-th>ID&lt;/tc-th>
  &lt;/template>
  &lt;!-- you can pass the whole object as data or only specify attributes. -->
  &lt;tc-tr v-for="p in persons" :key="p.id" :data="p.name">
    &lt;tc-td>{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td>{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>
  &lt;/tc-tr>
&lt;/tc-table>&lt;</code></pre>
      </tc-code-example>
    </tc-card>

    <h1>Expandable Tables</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At dignissimos
      quos culpa, nostrum consectetur modi asperiores soluta pariatur cumque est
      in, sunt voluptate commodi tempore, aspernatur natus eum reiciendis totam.
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <p>Click on a row to expand it for further informations</p>
      <tc-table :dark="$store.getters.dark">
        <template slot="head">
          <tc-th>Name</tc-th>
          <tc-th>Age</tc-th>
          <tc-th>Location</tc-th>
          <tc-th>ID</tc-th>
        </template>
        <tc-tr v-for="p in persons" :key="p.id + 'e'">
          <tc-td>{{ p.name }}</tc-td>
          <tc-td>{{ p.age }}</tc-td>
          <tc-td>{{ p.location }}</tc-td>
          <tc-td>{{ p.id }}</tc-td>

          <template slot="expander">
            <tl-flow horizontal="space-around">
              <tc-avatar :src="p.avatar" />
              <div>
                <h2>{{ p.name }}</h2>
                <div>Age(d): {{ p.age }}</div>
              </div>
              <tc-button
                tfbackground="error"
                variant="opaque"
                name="Find out more"
                icon="share"
              />
            </tl-flow>
          </template>
        </tc-tr>
      </tc-table>
      <tc-code-example>
        <pre><code>&lt;tc-table>
  &lt;template slot="head">
    &lt;tc-th>Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th>Location&lt;/tc-th>
    &lt;tc-th>ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr v-for="p in persons" :key="p.id">
    &lt;tc-td>{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td>{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>

    &lt;!-- you can place whatever you want inside this template -->
    &lt;!-- you can also load custom content for every row or skip some -->
    &lt;template slot="expander">
      &lt;tl-flow horizontal="space-around">
        &lt;tc-avatar :src="p.avatar" />
        &lt;div>
          &lt;h2>{ p.name }&lt;/h2>
          &lt;div>Age(d): { p.age }&lt;/div>
        &lt;/div>
        &lt;tc-button
          tfbackground="error"
          variant="opaque"
          name="Find out more"
          icon="share"
        />
      &lt;/tl-flow>
    &lt;/template>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
      </tc-code-example>
    </tc-card>

    <h1>Colors & Highlights</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat cumque
      doloribus illum officia blanditiis cum minima voluptatum harum cupiditate.
      Ipsa tempore doloribus dolorem deleniti illo ab corrupti alias vitae!
      Itaque.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>TD Color</h2>
          <tc-table :striped="true" :border="false" :dark="$store.getters.dark">
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr v-for="p in persons" :key="p.id + 'c'">
              <tc-td tfcolor="primary">{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td tfcolor="error">{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
          <tc-code-example>
            <pre><code>
&lt;tc-table :striped="true" :border="false">
  &lt;template slot="head">
    &lt;tc-th>Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th>Location&lt;/tc-th>
    &lt;tc-th>ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr v-for="p in persons" :key="p.id">
    &lt;tc-td tfcolor="primary">{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td tfcolor="error">{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
          </tc-code-example>
        </div>
        <div>
          <h2>TR Background</h2>
          <tc-table :striped="true" :border="false" :dark="$store.getters.dark">
            <template slot="head">
              <tc-th>Name</tc-th>
              <tc-th>Age</tc-th>
              <tc-th>Location</tc-th>
              <tc-th>ID</tc-th>
            </template>
            <tc-tr
              v-for="p in persons"
              :key="p.id + 'h'"
              :tfbackground="
                p.id === '2' ? 'error' : p.id === '5' ? 'success' : ''
              "
            >
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.age }}</tc-td>
              <tc-td>{{ p.location }}</tc-td>
              <tc-td>{{ p.id }}</tc-td>
            </tc-tr>
          </tc-table>
          <tc-code-example>
            <pre><code>
&lt;tc-table :striped="true" :border="false">
  &lt;template slot="head">
    &lt;tc-th>Name&lt;/tc-th>
    &lt;tc-th>Age&lt;/tc-th>
    &lt;tc-th>Location&lt;/tc-th>
    &lt;tc-th>ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr
    v-for="p in persons"
    :key="p.id"
    :tfbackground="
      p.id === '2' ? 'error' : p.id === '5' ? 'success' : ''
    "
  >
    &lt;tc-td>{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td>{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
          </tc-code-example>
        </div>
      </tl-grid>
    </tc-card>

    <h1>Searchbar & Everything Combined</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      tempore, neque voluptas numquam molestias facilis. Quam, cupiditate?
      Temporibus excepturi, rem possimus magni est aliquid cum veritatis natus,
      illum nisi enim?
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tc-table
        :dark="$store.getters.dark"
        :selectable="true"
        :multiSelect="true"
        :border="false"
        :striped="true"
        @sort="s => (sort2 = s)"
      >
        <tc-table-search slot="search" v-model="query" />
        <template slot="head">
          <tc-th attribute="name">Name</tc-th>
          <tc-th attribute="age">Age</tc-th>
          <tc-th attribute="location">Location</tc-th>
          <tc-th attribute="id">ID</tc-th>
        </template>
        <tc-tr
          v-for="p in personsSorted2"
          :key="p.id + 'l'"
          :data="p.name"
          :tfbackground="p.id === '2' ? 'error' : p.id === '5' ? 'success' : ''"
        >
          <tc-td tfcolor="primary">{{ p.name }}</tc-td>
          <tc-td>{{ p.age }}</tc-td>
          <tc-td tfcolor="error">{{ p.location }}</tc-td>
          <tc-td>{{ p.id }}</tc-td>

          <template slot="expander">
            <tl-flow horizontal="space-around">
              <tc-avatar :src="p.avatar" />
              <div>
                <h2>{{ p.name }}</h2>
                <div>Age(d): {{ p.age }}</div>
              </div>
              <tc-button
                tfbackground="alarm"
                variant="filled"
                name="Find out more"
                icon="share"
              />
            </tl-flow>
          </template>
        </tc-tr>
      </tc-table>

      <tc-code-example>
        <pre><code>
&lt;tc-table
  :selectable="true"
  :multiSelect="true"
  :border="false"
  :striped="true"
  @sort="s => (sort = s)"
>
  &lt;tc-table-search slot="search" v-model="query" />
  &lt;template slot="head">
    &lt;tc-th attribute="name">Name&lt;/tc-th>
    &lt;tc-th attribute="age">Age&lt;/tc-th>
    &lt;tc-th attribute="location">Location&lt;/tc-th>
    &lt;tc-th attribute="id">ID&lt;/tc-th>
  &lt;/template>
  &lt;tc-tr
    v-for="p in personsSorted"
    :key="p.id"
    :data="p.name"
    :tfbackground="p.id === '2' ? 'error' : p.id === '5' ? 'success' : ''"
  >
    &lt;tc-td tfcolor="primary">{ p.name }&lt;/tc-td>
    &lt;tc-td>{ p.age }&lt;/tc-td>
    &lt;tc-td tfcolor="error">{ p.location }&lt;/tc-td>
    &lt;tc-td>{ p.id }&lt;/tc-td>

    &lt;template slot="expander">
      &lt;tl-flow horizontal="space-around">
        &lt;tc-avatar :src="p.avatar" />
        &lt;div>
          &lt;h2>{ p.name }&lt;/h2>
          &lt;div>Age(d): { p.age }&lt;/div>
        &lt;/div>
        &lt;tc-button
          tfbackground="alarm"
          variant="filled"
          name="Find out more"
          icon="share"
        />
      &lt;/tl-flow>
    &lt;/template>
  &lt;/tc-tr>
&lt;/tc-table></code></pre>
      </tc-code-example>
    </tc-card>

    <h1>API for tr, td, th & Table Search</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit
      beatae inventore sapiente expedita recusandae asperiores, optio, ipsum a
      nisi maiores quaerat minus ducimus nesciunt magnam neque explicabo. Est,
      distinctio!
    </p>
    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tccomponents-details-api
        v-for="c in component.children"
        :key="c.name"
        :component="c"
        :dark="$store.getters.dark"
        :suffix="'for tc-' + c.name"
      />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { persons, Person } from '@/tccomponents/TC-SampleTableData';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCAvatar from '@/tccomponents/component/avatar/TC-Avatar.vue';
import TCTable from '@/tccomponents/component/table/TC-Table.vue';
import TCTr from '@/tccomponents/component/table/TC-Tr.vue';
import TCTd from '@/tccomponents/component/table/TC-Td.vue';
import TCTh from '@/tccomponents/component/table/TC-Th.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TCTableSearch from '@/tccomponents/component/table/TC-Table-Search.vue';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';

@Component({
  components: {
    'tc-card': TCCard,
    'tc-avatar': TCAvatar,
    'tc-button': TCButton,
    'tc-table': TCTable,
    'tc-table-search': TCTableSearch,
    'tc-tr': TCTr,
    'tc-td': TCTd,
    'tc-th': TCTh,
    'tc-code-example': TCCodeExample,
    'tl-grid': TLGrid,
    'tl-flow': TLFlow,
    'tccomponents-details-api': TCComponentsDetailsApi
  }
})
export default class TCDTable extends Vue {
  @Prop() component!: TCComponentApi;

  public persons: Person[] = persons;
  public sort: { direction: number; attribute: string } = {
    direction: 0,
    attribute: 'name'
  };
  public singleSelect: object = {};
  public multiSelect: string[] = [];

  get personsSorted(): Person[] {
    return persons.sort(
      // eslint-disable-next-line
      (a: any, b: any) =>
        this.sort.direction *
        b[this.sort.attribute].localeCompare(a[this.sort.attribute])
    );
  }

  public query = '';
  public sort2: { direction: number; attribute: string } = {
    direction: 0,
    attribute: 'name'
  };
  get personsSorted2(): Person[] {
    return persons
      .filter(x => {
        if (this.query.length === 0) return true;
        else
          return JSON.stringify(x)
            .toLowerCase()
            .includes(this.query.toLocaleLowerCase());
      })
      .sort(
        // eslint-disable-next-line
        (a: any, b: any) =>
          this.sort2.direction *
          b[this.sort2.attribute].localeCompare(a[this.sort2.attribute])
      );
  }
}
</script>
<style lang="scss" scoped>
.tc-card:not(:first-child) {
  margin-top: 20px;
}
</style>
