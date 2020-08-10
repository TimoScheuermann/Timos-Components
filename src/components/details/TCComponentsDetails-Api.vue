<template>
  <div class="tccomponents-details-api" v-if="component.api.length > 0">
    <tc-card rounded="true" :dark="dark" :title="'Properties ' + suffix">
      <tc-table
        :dark="dark"
        :border="false"
        :striped="true"
        @sort="s => (sort = s)"
      >
        <template slot="head">
          <tc-th attribute="name">Name</tc-th>
          <tc-th attribute="type">Type</tc-th>
          <tc-th>Parameters</tc-th>
          <tc-th attribute="description">Description</tc-th>
          <tc-th>Default</tc-th>
        </template>
        <tc-tr v-for="api in api_" :key="api.name">
          <tc-td tfcolor="error">{{ api.name }}</tc-td>
          <tc-td>{{ api.type }}</tc-td>
          <tc-td>{{ (api.parameters || []).join(', ') }}</tc-td>
          <tc-td>{{ api.description }}</tc-td>
          <tc-td tfcolor="primary">{{ api.default }}</tc-td>
        </tc-tr>
      </tc-table>
    </tc-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCTable from '@/tccomponents/component/table/TC-Table.vue';
import TCTr from '@/tccomponents/component/table/TC-Tr.vue';
import TCTd from '@/tccomponents/component/table/TC-Td.vue';
import TCTh from '@/tccomponents/component/table/TC-Th.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';

@Component({
  components: {
    'tc-card': TCCard,
    'tc-table': TCTable,
    'tc-tr': TCTr,
    'tc-td': TCTd,
    'tc-th': TCTh
  }
})
export default class TCComponentsDetailsApi extends Vue {
  @Prop() component!: TCComponent;
  @Prop({ default: true }) dark!: boolean;
  @Prop({ default: '' }) suffix!: string;

  public sort: { attribute: string; direction: number } = {
    attribute: 'name',
    direction: 0
  };

  get api_(): TCComponentApi[] {
    return this.component.api.sort(
      (a: TCComponentApi, b: TCComponentApi) =>
        this.sort.direction *
        this.getAttibute(a, this.sort.attribute).localeCompare(
          this.getAttibute(b, this.sort.attribute)
        )
    );
  }

  private getAttibute(obj: object, attr: string): string {
    return JSON.parse(JSON.stringify(obj))[attr] + '';
  }
}
</script>
<style lang="scss" scoped>
.tccomponents-details-api {
  margin-top: 30px;
}
</style>
