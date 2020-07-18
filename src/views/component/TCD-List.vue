<template>
  <div>
    <h1>Sample Lists (light & dark)</h1>

    <tl-grid minWidth="320">
      <tc-list title="Sample list">
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Menu" to="TC-list" icon="settings" />
        <tc-list-item title="Swich" value="true" icon="toggle" />
        <tc-list-item
          title="Description"
          description="Hello world"
          icon="heart"
        />
      </tc-list>
      <tc-list title="Sample list" :dark="true">
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Menu" to="TC-list" icon="settings" />
        <tc-list-item title="Swich" value="true" icon="toggle" />
        <tc-list-item
          title="Description"
          description="Hello world"
          icon="heart"
        />
      </tc-list>
    </tl-grid>

    <h1>Sample Lists (frosted)</h1>
    <tl-grid minWidth="320" class="example-frosted">
      <tc-list title="Sample list" :frosted="true">
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Menu" to="TC-list" icon="settings" />
        <tc-list-item title="Swich" value="true" icon="toggle" />
        <tc-list-item
          title="Description"
          description="Hello world"
          icon="heart"
        />
      </tc-list>
      <tc-list title="Sample list" :dark="true" :frosted="true">
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Menu" to="TC-list" icon="settings" />
        <tc-list-item title="Swich" value="true" icon="toggle" />
        <tc-list-item
          title="Description"
          description="Hello world"
          icon="heart"
        />
      </tc-list>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCList from '@/tccomponents/component/list/TC-List.vue';
import TCListItem from '@/tccomponents/component/list/TC-List-Item.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tl-grid': TLGrid,
    'tc-list': TCList,
    'tc-list-item': TCListItem
  }
})
export default class TCDList extends Vue {
  public switch = true;
}
</script>
<style lang="scss" scoped>
.example-frosted {
  padding: 30px;
  border-radius: $border-radius;
  background: url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5');
}
</style>
