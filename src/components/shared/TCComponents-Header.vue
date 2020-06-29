<template>
  <tc-header
    :autoBackground="true"
    :title="headerTitle"
    :variant="sidebarVisible && 'sticky'"
  >
    <tc-button
      v-if="sidebarVisible"
      slot="pre"
      icon="assets/sidebar-alt.png"
      @click="toggleSidebar"
    />
    <template v-if="isDesigner">
      <tc-button
        @click="downloadFile"
        name="Save Configuration"
        icon="download"
        variant="filled"
      />
      <tc-input
        accept=".tccomponent"
        type="file"
        icon="component"
        filePlaceholder="Load Configuration"
        @fileLoaded="fileLoaded"
        :dark="true"
      />
    </template>
    <template v-if="isDetailView">
      <tc-button
        name="Open in Designer"
        icon="tools"
        variant="filled"
        @click="openDesigner"
      />
    </template>
  </tc-header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { EventBus } from '@/eventBus';

import TCHeader from '@/tccomponents/header/TC-Header.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TCInput from '@/tccomponents/input/TC-Input.vue';

@Component({
  components: {
    'tc-header': TCHeader,
    'tc-button': TCButton,
    'tc-input': TCInput
  }
})
export default class TCComponentsHeader extends Vue {
  @Prop() sidebarVisible!: boolean;

  get routeName(): string {
    return this.$route.name || '';
  }

  get headerTitle(): string {
    return (this.$route.meta.title || '').split('|').pop();
  }

  get isDesigner(): boolean {
    return this.routeName === 'designer';
  }

  get isDetailView(): boolean {
    return this.routeName.startsWith('TC-');
  }

  public openDesigner(): void {
    this.$store.commit(
      'updateDesignerComponent',
      this.headerTitle.split('TC ').join('')
    );
    this.$router.push({ name: 'designer' });
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

<style lang="scss" scoped></style>
