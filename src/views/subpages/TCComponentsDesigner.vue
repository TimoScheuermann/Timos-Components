<template>
  <div class="tc-components-designer">
    <tccomponents-subpage-hero
      :dark="true"
      banner="assets/banner_white.svg"
      subtitle="Designer"
    />

    <div content>
      <tc-headline :dark="true" :title="selectedComponent && 'Properties'">
        <div>
          <span select v-if="!selectedComponent">
            <span>
              Select a component to get started
            </span>
            <i class="ti-arrow-right" />
          </span>
          <tc-button
            v-else
            name="Examples"
            icon="exchange"
            variant="opaque"
            tccolor="alarm"
            @click="showExamples"
          />
          <tc-select
            inline
            :dark="true"
            placeholder="Component"
            v-model="selectedComponent"
            :values="componentList"
          />
        </div>
      </tc-headline>

      <tl-grid class="tc-properties" :minWidth="175">
        <div v-for="api in iconAttributes" :key="api.name">
          <tc-icon-select
            :tooltip="api.description"
            :title="api.name"
            v-model="data[api.name]"
          />
        </div>
        <div v-for="api in selectAttributes" :key="api.name">
          <tc-select
            :tooltip="api.description"
            :title="api.name"
            :dark="true"
            :values="api.selectValues"
            v-model="data[api.name]"
          />
        </div>
        <div v-for="api in inputAttributes" :key="api.name">
          <tc-input
            :tooltip="api.description"
            :title="api.name"
            :dark="true"
            :type="api.type === 'number' ? 'number' : 'text'"
            :buttons="api.type === 'number'"
            v-model="data[api.name]"
          />
        </div>
      </tl-grid>

      <div v-if="component && component.slots && component.slots.length > 0">
        <tc-headline :dark="true" title="Slots" />
        <tl-grid class="tc-slots">
          <tc-textarea
            v-for="slot in component.slots"
            :key="slot.name"
            :title="slot.name"
            :tooltip="slot.description"
            v-model="slots[slot.name]"
            :dark="true"
          />
        </tl-grid>
      </div>

      <div v-if="component">
        <tc-headline title="Output" :dark="true">
          <tc-checkbox :dark="true" v-model="darkCanvas" title="Dark Canvas" />
          <tc-button
            :name="copyHTMLText"
            @click="copyHTML()"
            style="min-width: 141px;"
          />
        </tc-headline>
        <div
          class="designer-canvas"
          :class="{ 'designer-canvas__dark': darkCanvas }"
        >
          <div ref="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import TCHeader from '@/tccomponents/component/header/TC-Header.vue';

import tcComponents from '@/components';
import TCHero from '@/tccomponents/component/hero/TC-Hero.vue';
import TCHeadline from '@/tccomponents/component/headline/TC-Headline.vue';
import TCSelect from '@/tccomponents/component/select/TC-Select.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCInput from '@/tccomponents/component/input/TC-Input.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCheckbox from '@/tccomponents/component/checkbox/TC-Checkbox.vue';
import TCDivider from '@/tccomponents/component/divider/TC-Divider.vue';
import TCImage from '@/tccomponents/component/image/TC-Image.vue';
import TCLink from '@/tccomponents/component/link/TC-Link.vue';
import TCList from '@/tccomponents/component/list/TC-List.vue';
import TCModal from '@/tccomponents/component/modal/TC-Modal.vue';
import TCNavbar from '@/tccomponents/component/navbar/TC-Navbar.vue';
import TCProgress from '@/tccomponents/component/progress/TC-Progress.vue';
import TCRevealer from '@/tccomponents/component/revealer/TC-Revealer.vue';
import TCScrollUp from '@/tccomponents/component/scrollup/TC-Scroll-Up.vue';
import TCQuote from '@/tccomponents/component/quote/TC-Quote.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';
import TCSpinner from '@/tccomponents/component/spinner/TC-Spinner.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCTextarea from '@/tccomponents/component/textarea/TC-Textarea.vue';
import TCSegments from '@/tccomponents/component/segments/TC-Segments.vue';
import TCSidebar from '@/tccomponents/component/sidebar/TC-Sidebar.vue';
import TCSlider from '@/tccomponents/component/slider/TC-Slider.vue';
import TCSteps from '@/tccomponents/component/steps/TC-Steps.vue';
import TCSwitch from '@/tccomponents/component/switch/TC-Switch.vue';
import TCTabbar from '@/tccomponents/component/tabbar/TC-Tabbar.vue';
import TCTable from '@/tccomponents/component/table/TC-Table.vue';
import TCTooltip from '@/tccomponents/component/tooltip/TC-Tooltip.vue';
import TCBadge from '@/tccomponents/component/badge/TC-Badge.vue';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import { VueClass } from 'vue-class-component/lib/declarations';
import IconSelect from '@/components/IconSelect.vue';
import { EventBus } from '@/eventBus';
import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCAvatar from '@/tccomponents/component/avatar/TC-Avatar.vue';

@Component({
  components: {
    'tc-header': TCHeader,
    'tc-hero': TCHero,
    'tc-headline': TCHeadline,
    'tc-select': TCSelect,
    'tc-input': TCInput,
    'tc-button': TCButton,
    'tc-icon-select': IconSelect,
    'tc-checkbox': TCCheckbox,
    'tl-grid': TLGrid,
    'tc-textarea': TCTextarea,
    'tccomponents-subpage-hero': TCComponentsSubpageHero
  }
})
export default class TCComponentsDesigner extends Vue {
  public components: TCComponent[] = tcComponents.filter(
    (x: TCComponentGroup) => x.group === 'Components'
  )[0].components;

  public selectedComponent = this.$store.getters.designerComponent;
  public copyHTMLText = 'Copy HTML Markup';
  public darkCanvas = true;
  public data: Record<string, unknown> = {};
  public slots = {};
  public available: { [x: string]: VueClass<Vue> } = {
    Badge: TCBadge,
    Button: TCButton,
    Card: TCCard,
    Checkbox: TCCheckbox,
    Divider: TCDivider,
    Header: TCHeader,
    Headline: TCHeadline,
    Hero: TCHero,
    Image: TCImage,
    Input: TCInput,
    Link: TCLink,
    List: TCList,
    Modal: TCModal,
    Navbar: TCNavbar,
    Progress: TCProgress,
    Quote: TCQuote,
    Revealer: TCRevealer,
    'Scroll Up': TCScrollUp,
    Segments: TCSegments,
    Select: TCSelect,
    Sidebar: TCSidebar,
    Slider: TCSlider,
    Spinner: TCSpinner,
    Steps: TCSteps,
    Switch: TCSwitch,
    Tabbar: TCTabbar,
    Table: TCTable,
    Tooltip: TCTooltip,
    Avatar: TCAvatar
  };

  mounted(): void {
    if (this.selectedComponent.length > 0) {
      this.$store.commit('updateDesignerComponent', '');
    }

    EventBus.$on('designer-downloadFile', this.downloadFile);
    EventBus.$on('designer-fileLoaded', (content: string) => {
      this.fileLoaded(content);
    });
  }

  get componentList(): string[] {
    return this.components
      .filter((x: TCComponent) => x.api.length > 0)
      .map((x: TCComponent) => x.name)
      .filter((x: string) => Object.keys(this.available).includes(x))
      .sort((a: string, b: string) => a.localeCompare(b));
  }
  get component(): TCComponent | undefined {
    if (this.selectedComponent)
      return this.components.filter(
        (x: TCComponent) => x.name === this.selectedComponent
      )[0];
    return undefined;
  }

  get html(): string {
    if (!this.component) return '';
    let html = '<tc-' + this.component.name.toLowerCase();
    Object.keys(this.data).forEach((x, i) => {
      const val = Object.values(this.data)[i];
      if (val)
        html += ` ${x}="${x === 'icon' ? 'ti-' : ''}${
          Object.values(this.data)[i]
        }"`;
    });
    return html + ' />';
  }

  get allAttributes(): TCComponentApi[] {
    if (this.selectedComponent) {
      const comp = this.component;
      if (comp) return comp.api;
    }
    return [];
  }

  get iconAttributes(): TCComponentApi[] {
    return this.allAttributes.filter(
      (x: TCComponentApi) => x.parameters && x.parameters === "Timo's Icons"
    );
  }
  get inputAttributes(): TCComponentApi[] {
    return this.allAttributes.filter(
      (x: TCComponentApi) => !(x.parameters || x.type === 'boolean')
    );
  }
  get selectAttributes(): TCComponentApi[] {
    return this.allAttributes
      .filter(
        (x: TCComponentApi) =>
          ((x.parameters && x.parameters !== "Timo's Icons") ||
            x.type === 'boolean') &&
          x.name !== 'dark'
      )
      .map((x: TCComponentApi) => {
        x.selectValues = x.parameters
          ? x.parameters.split(', ')
          : [true, false];
        return x;
      });
  }

  @Watch('selectedComponent')
  public switch(): void {
    this.data = {};
    this.slots = {};
    this.$nextTick(() => {
      this.changed();
    });
  }

  @Watch('darkCanvas', { deep: true })
  @Watch('data', { deep: true })
  @Watch('slots', { deep: true })
  public changed(): void {
    try {
      const ComponentClass = Vue.extend(this.available[this.selectedComponent]);
      const instance = new ComponentClass({
        propsData: { ...this.data, dark: this.darkCanvas },
        parent: this
      });
      for (const [key, value] of Object.entries(this.slots)) {
        (instance.$slots as Record<string, unknown>)[key] = [value];
      }

      instance.$mount();
      const element: HTMLElement = this.$refs.container as HTMLElement;
      element.innerHTML = '';
      element.appendChild(instance.$el);
    } catch (error) {
      //
      // console.log('e', error);
    }
  }

  public copyHTML(): void {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = this.html;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    this.copyHTMLText = 'Copied!';
    setTimeout(() => {
      this.copyHTMLText = 'Copy HTML Markup';
    }, 1500);
  }

  public downloadFile(): void {
    const str = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({
        ...this.data,
        component: this.selectedComponent,
        dark: this.darkCanvas
      })
    )}`;
    const anchor = window.document.createElement('a');
    anchor.setAttribute('href', str);
    anchor.setAttribute('download', `${this.selectedComponent}.tccomponent`);
    anchor.click();
  }
  public fileLoaded(content: string): void {
    const data = JSON.parse(content);
    if (data && data.component) {
      this.selectedComponent = data.component;
      this.darkCanvas = data.dark;
      delete data.component;
      delete data.dark;
      setTimeout(() => {
        this.data = data;
      }, 10);
    }
  }
  public showExamples() {
    this.$router.push({
      name:
        'TC-' +
        this.selectedComponent
          .split(' ')
          .join('-')
          .toLowerCase()
    });
  }
}
</script>

<style lang="scss" scoped>
[content] {
  min-height: 300px;
  padding-top: 0px;
}

[inline] {
  display: inline-flex !important;
}

[color-fff] {
  color: #fff;
}

.tc-properties,
.tc-slots {
  padding-top: 20px;
}

.designer-canvas {
  background: $background;
  color: $color;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  border-radius: 5px;
  overflow: visible;
  text-align: center;
  max-width: 100%;

  &__dark {
    background: $background_dark;
    color: $color_dark;
  }
  /deep/ .tc-header {
    position: relative !important;
  }
  /deep/ .tc-card {
    animation: none !important;
  }
}

span[select] {
  color: #08f;
  position: relative;
  span {
    padding-right: 25px;
  }
  i {
    top: 50%;
    position: absolute;
    margin-left: -20px;
    animation: move 0.8s ease-in-out infinite alternate-reverse;
  }
  @keyframes move {
    from {
      transform: translate(-3px, -50%);
    }
    to {
      transform: translate(3px, -50%);
    }
  }
}
</style>
