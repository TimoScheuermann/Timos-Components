<template>
  <div class="tccomponents-details-api" v-if="component.api.length > 0">
    <tc-card rounded="true" :dark="true" title="Properties">
      <tc-table :dark="true">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Parameters</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr v-for="api in component.api" :key="api.name">
          <td>{{ api.name }}</td>
          <td>{{ api.type }}</td>
          <td>{{ api.parameters }}</td>
          <td>{{ api.description }}</td>
          <td>{{ api.default }}</td>
        </tr>
      </tc-table>
    </tc-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TCTable from '@/tccomponents/table/TC-Table.vue';

@Component({
  components: {
    'tc-card': TCCard,
    'tc-table': TCTable
  }
})
export default class TCComponentsDetailsApi extends Vue {
  @Prop() component!: TCComponent;
}
</script>
<style lang="scss" scoped>
.tccomponents-details-api {
  margin-top: 30px;
}
</style>
