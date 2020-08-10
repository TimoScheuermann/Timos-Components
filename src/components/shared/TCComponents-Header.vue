<template>
  <tc-header
    :title="headerTitle"
    :variant="sidebarVisible && 'sticky'"
    :dark="$store.state.dark || $route.name === 'designer'"
    :key="$route.name"
  >
    <div tc-header-line v-if="isDesigner">
      <tc-button
        @click="downloadFile"
        name="Save Configuration"
        icon="download"
        variant="filled"
        class="save-config"
      />
    </div>
    <div tc-header-line v-if="isDesigner">
      <tc-input
        accept=".tccomponent"
        type="file"
        icon="component"
        filePlaceholder="Load Configuration"
        @fileLoaded="fileLoaded"
        :dark="true"
      />
    </div>
    <tl-flow v-if="!isDesigner">
      <img src="assets/text.svg" />
      <div class="v">{{ version }}</div>
    </tl-flow>
  </tc-header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';

import TCHeader from '@/tccomponents/component/header/TC-Header.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TCInput from '@/tccomponents/component/input/TC-Input.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'tc-header': TCHeader,
    'tc-button': TCButton,
    'tc-input': TCInput,
    'tl-flow': TLFlow
  }
})
export default class TCComponentsHeader extends Vue {
  @Prop() sidebarVisible!: boolean;

  get version(): string {
    return process.env.VUE_APP_VERSION ?? '';
  }

  get headerTitle(): string {
    return (this.$route.meta.title || '').split(' | ').pop();
  }

  get isDesigner(): boolean {
    return (this.$route.name || '') === 'designer';
  }

  public toggleSidebar(): void {
    EventBus.$emit('app-togglesidebar');
  }

  public downloadFile(): void {
    EventBus.$emit('designer-downloadFile');
  }

  public fileLoaded(content: string): void {
    EventBus.$emit('designer-fileLoaded', content);
  }
}
</script>

<style lang="scss" scoped>
.save-config {
  display: flex;
}
img {
  max-height: 20px;
  margin-right: 5px;
  margin-left: 10px;
}
.v {
  font-weight: 500;
}
</style>
