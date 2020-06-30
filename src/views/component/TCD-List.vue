<template>
  <div>
    <tl-grid minWidth="320">
      <tc-list title="Sample list">
        <tc-list-item title="Settings" icon="settings" />
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Account" icon="heart" />
      </tc-list>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCList from '@/tccomponents/list/TC-List.vue';
import TCListItem from '@/tccomponents/list/TC-List-Item.vue';
@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-headline': TCHeadline,
    'tl-grid': TLGrid,
    'tc-list': TCList,
    'tc-list-item': TCListItem
  }
})
export default class TCDList extends Vue {}
</script>
