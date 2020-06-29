<template>
  <div subpage tc-dark-container class="tc-components-designer">
    <tc-hero height="200" background="#000">
      <div class="title">Designer</div>
      <div class="icons">
        <i class="ti-color-fan" />
        <i class="ti-tools" />
        <i class="ti-component" />
      </div>
    </tc-hero>

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
            :dark="true"
            placeholder="Component"
            v-model="selectedComponent"
            :values="componentList"
          />
        </div>
      </tc-headline>

      <transition-group
        name="options-trans"
        class="tc-properties"
        is="tc-grid"
        :minWidth="175"
      >
        <tc-icon-select
          v-for="api in iconAttributes"
          :key="api.name"
          :title="api.name"
          v-model="data[api.name]"
          :tooltip="api.description"
        />
        <tc-select
          v-for="api in selectAttributes"
          :dark="true"
          :title="api.name"
          :key="api.name"
          :placeholder="api.name"
          :values="api.selectValues"
          v-model="data[api.name]"
          :tooltip="api.description"
        />
        <tc-input
          v-for="api in inputAttributes"
          :dark="true"
          :title="api.name"
          :type="api.type === 'number' ? 'number' : 'text'"
          :buttons="api.type === 'number'"
          :key="api.name"
          :placeholder="api.name"
          v-model="data[api.name]"
          :tooltip="api.description"
        />
      </transition-group>

      <div v-if="component && component.slots && component.slots.length > 0">
        <tc-headline :dark="true" title="Slots" />
        <tc-grid>
          <tc-textarea
            v-for="slot in component.slots"
            :key="slot.name"
            :title="slot.name"
            :tooltip="slot.description"
            v-model="slots[slot.name]"
            :dark="true"
          />
        </tc-grid>
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
import TCHeader from '@/tccomponents/header/TC-Header.vue';

import tcComponents from '@/components';
import TCHero from '@/tccomponents/hero/TC-Hero.vue';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCSelect from '@/tccomponents/select/TC-Select.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCInput from '@/tccomponents/input/TC-Input.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TCCheckbox from '@/tccomponents/checkbox/TC-Checkbox.vue';
import TCDivider from '@/tccomponents/divider/TC-Divider.vue';
import TCImage from '@/tccomponents/image/TC-Image.vue';
import TCLink from '@/tccomponents/link/TC-Link.vue';
import TCList from '@/tccomponents/list/TC-List.vue';
import TCModal from '@/tccomponents/modal/TC-Modal.vue';
import TCNavbar from '@/tccomponents/navbar/TC-Navbar.vue';
import TCProgress from '@/tccomponents/progress/TC-Progress.vue';
import TCRevealer from '@/tccomponents/revealer/TC-Revealer.vue';
import TCScrollUp from '@/tccomponents/scrollup/TC-Scroll-Up.vue';
import TCQuote from '@/tccomponents/quote/TC-Quote.vue';
import { TCComponentApi } from '@/models/TCComponentApi.model';
import TCSpinner from '@/tccomponents/spinner/TC-Spinner.vue';
import TCGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCTextarea from '@/tccomponents/textarea/TC-Textarea.vue';
import TCSegments from '@/tccomponents/segments/TC-Segments.vue';
import TCSidebar from '@/tccomponents/sidebar/TC-Sidebar.vue';
import TCSlider from '@/tccomponents/slider/TC-Slider.vue';
import TCSteps from '@/tccomponents/steps/TC-Steps.vue';
import TCSwitch from '@/tccomponents/switch/TC-Switch.vue';
import TCTabbar from '@/tccomponents/tabbar/TC-Tabbar.vue';
import TCTable from '@/tccomponents/table/TC-Table.vue';
import TCTooltip from '@/tccomponents/tooltip/TC-Tooltip.vue';
import TCBadge from '@/tccomponents/badge/TC-Badge.vue';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import { VueClass } from 'vue-class-component/lib/declarations';
import IconSelect from '@/components/IconSelect.vue';
import { EventBus } from '@/eventBus';

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
    'tc-grid': TCGrid,
    'tc-textarea': TCTextarea
  }
})
export default class TCComponentsDesigner extends Vue {
  public components: TCComponent[] = tcComponents.filter(
    (x: TCComponentGroup) => x.group === 'Components'
  )[0].components;

  public selectedComponent = '';
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
    Tooltip: TCTooltip
  };

  mounted(): void {
    const loadedComp: string = this.$store.getters.designerComponent;
    if (loadedComp.length > 0) {
      this.selectedComponent = loadedComp;
      this.$store.commit('updateDesignerComponent', '');
      this.changed();
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
  background: #000;

  overflow-x: hidden;
  padding-top: 0px;
}

[color-fff] {
  color: #fff;
}

.designer-canvas {
  background: #fafafa;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  max-width: 100%;

  &__dark {
    background: #000;
  }
  /deep/ .tc-header {
    position: relative !important;
  }
  /deep/ .tc-card {
    animation: none !important;
  }
}

.tc-hero {
  color: #fff;
  @media #{$isDesktop} {
    padding-left: 45px;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 4em;
  }
  .icons {
    opacity: 0.25;
    font-size: 11em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
    padding-top: 50px;
    i {
      margin: 0 20px;
    }
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
