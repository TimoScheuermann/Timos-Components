<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />
    <div content>
      <tl-grid>
        <tc-select />
        <tc-select :dark="true" />
      </tl-grid>

      <h1>Full width</h1>
      <!-- <tc-select /> -->
      <tc-input />
      <tc-input icon="user" />
      <tc-input type="number" :buttons="true" />
      <tc-input type="number" :buttons="true" icon="calculator" />
      <tc-checkbox />

      <h1>Full width + title</h1>
      <!-- <tc-select title="Title" /> -->
      <tc-input tooltip="Tooltip" title="Title" />
      <tc-input tooltip="Tooltip" title="Title" icon="user" />
      <tc-input tooltip="Tooltip" title="Title" type="number" :buttons="true" />
      <tc-input
        tooltip="Tooltip"
        title="Title"
        type="number"
        :buttons="true"
        icon="calculator"
      />
      <tc-checkbox title="Title" />

      <tl-grid>
        <div>
          <h1>Half width</h1>
          <!-- <tc-select /> -->
          <tc-input />
          <tc-input icon="user" />
          <tc-input type="number" :buttons="true" />
          <tc-input type="number" :buttons="true" icon="calculator" />
          <tc-checkbox />
        </div>
        <div>
          <h1>Half width + title</h1>
          <!-- <tc-select title="Title" /> -->
          <tc-input tooltip="Tooltip" title="Title" />
          <tc-input tooltip="Tooltip" title="Title" icon="user" />
          <tc-input
            tooltip="Tooltip"
            title="Title"
            type="number"
            :buttons="true"
          />
          <tc-input
            title="Title"
            type="number"
            :buttons="true"
            icon="calculator"
          />

          <tc-checkbox title="Title" />
        </div>
      </tl-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCSelect from '@/tccomponents/select/TC-Select.vue';
import TCInput from '@/tccomponents/input/TC-Input.vue';
import TCCheckbox from '@/tccomponents/checkbox/TC-Checkbox.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-select': TCSelect,
    'tc-input': TCInput,
    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid
  }
})
export default class TCComponentsPlayground extends Vue {}
</script>

<style lang="scss" scoped>
.tc-input,
.tc-select2,
.tc-select,
.tc-checkbox {
  // margin-top: 30px;
}
</style>
