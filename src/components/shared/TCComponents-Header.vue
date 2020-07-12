<template>
  <tc-header
    :title="headerTitle"
    :variant="sidebarVisible && 'sticky'"
    :dark="$store.state.dark || $route.name === 'designer'"
    :key="$route.name"
  >
    <template v-if="isDesigner">
      <div tc-header-line>
        <tc-button
          @click="downloadFile"
          name="Save Configuration"
          icon="download"
          variant="filled"
          class="save-config"
        />
      </div>
      <div tc-header-line>
        <tc-input
          accept=".tccomponent"
          type="file"
          icon="component"
          filePlaceholder="Load Configuration"
          @fileLoaded="fileLoaded"
          :dark="true"
        />
      </div>
    </template>
    <template v-if="!isDesigner">
      <div class="darkmode" :class="{ dark: headerSwitch }">
        <tc-switch v-model="headerSwitch" @input="darkModeChanged" />
        <span t>Dark</span>
      </div>
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
import TCSwitch from '@/tccomponents/switch/TC-Switch.vue';

@Component({
  components: {
    'tc-header': TCHeader,
    'tc-button': TCButton,
    'tc-input': TCInput,
    'tc-switch': TCSwitch
  }
})
export default class TCComponentsHeader extends Vue {
  @Prop() sidebarVisible!: boolean;
  public headerSwitch: boolean = this.$store.getters.dark;

  get routeName(): string {
    return this.$route.name || '';
  }

  get headerTitle(): string {
    return (this.$route.meta.title || '').split(' | ').pop();
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

  public darkModeChanged() {
    this.$store.commit('setDarkMode', this.headerSwitch);
    this.$forceUpdate();
  }
}
</script>

<style lang="scss" scoped>
.save-config,
.darkmode {
  display: flex;
}
.darkmode {
  justify-content: center;
  align-items: center;
  margin: 3px;
  border-radius: $border-radius;
  background: $paragraph;
  &.dark {
    background: $paragraph_dark;
  }
  span[t] {
    font-weight: 500;
    margin: {
      left: 10px;
      right: 10px;
    }
  }
}
</style>
