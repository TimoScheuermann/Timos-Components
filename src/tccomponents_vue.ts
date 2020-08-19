import { VueConstructor } from 'vue/types/umd';
import { Store } from 'vuex';
import { tcStore } from './tccomponents/TC-Store';

export { default as tcAvatar } from './tccomponents/component/avatar/TC-Avatar.vue';
export { default as tcBadge } from './tccomponents/component/badge/TC-Badge.vue';
export { default as tcButton } from './tccomponents/component/button/TC-Button.vue';
export { default as tcCard } from './tccomponents/component/card/TC-Card.vue';
export { default as tcCheckbox } from './tccomponents/component/checkbox/TC-Checkbox.vue';
export { default as tcDivider } from './tccomponents/component/divider/TC-Divider.vue';
export { default as tcHeaderButton } from './tccomponents/component/header/TC-Header-Button.vue';
export { default as tcHeader } from './tccomponents/component/header/TC-Header.vue';
export { default as tcHeadline } from './tccomponents/component/headline/TC-Headline.vue';
export { default as tcHero } from './tccomponents/component/hero/TC-Hero.vue';
export { default as tcImage } from './tccomponents/component/image/TC-Image.vue';
export { default as tcInput } from './tccomponents/component/input/TC-Input.vue';
export { default as tcLink } from './tccomponents/component/link/TC-Link.vue';
export { default as tcListItem } from './tccomponents/component/list/TC-List-Item.vue';
export { default as tcList } from './tccomponents/component/list/TC-List.vue';
export { default as tcMagicCard } from './tccomponents/component/magic-card/TC-Magic-Card.vue';
export { default as tcModal } from './tccomponents/component/modal/TC-Modal.vue';
export { default as tcNavbarItem } from './tccomponents/component/navbar/TC-Navbar-Item.vue';
export { default as tcNavbar } from './tccomponents/component/navbar/TC-Navbar.vue';
export { default as tcProgress } from './tccomponents/component/progress/TC-Progress.vue';
export { default as tcQuote } from './tccomponents/component/quote/TC-Quote.vue';
export { default as tcRevealer } from './tccomponents/component/revealer/TC-Revealer.vue';
export { default as tcScrollUp } from './tccomponents/component/scrollup/TC-Scroll-Up.vue';
export { default as tcSegmentItem } from './tccomponents/component/segments/TC-Segment-Item.vue';
export { default as tcSegments } from './tccomponents/component/segments/TC-Segments.vue';
export { default as tcSelect } from './tccomponents/component/select/TC-Select.vue';
export { default as tcSidebarGroup } from './tccomponents/component/sidebar/TC-Sidebar-Group.vue';
export { default as tcSidebarItem } from './tccomponents/component/sidebar/TC-Sidebar-Item.vue';
export { default as tcSidebar } from './tccomponents/component/sidebar/TC-Sidebar.vue';
export { default as tcSlider } from './tccomponents/component/slider/TC-Slider.vue';
export { default as tcSpinner } from './tccomponents/component/spinner/TC-Spinner.vue';
export { default as tcStepItem } from './tccomponents/component/steps/TC-Step-Item.vue';
export { default as tcSteps } from './tccomponents/component/steps/TC-Steps.vue';
export { default as tcSwitch } from './tccomponents/component/switch/TC-Switch.vue';
export { default as tcTabbarItem } from './tccomponents/component/tabbar/TC-Tabbar-Item.vue';
export { default as tcTabbar } from './tccomponents/component/tabbar/TC-Tabbar.vue';
export { default as tcTableSearch } from './tccomponents/component/table/TC-Table-Search.vue';
export { default as tcTable } from './tccomponents/component/table/TC-Table.vue';
export { default as tcTd } from './tccomponents/component/table/TC-Td.vue';
export { default as tcTh } from './tccomponents/component/table/TC-Th.vue';
export { default as tcTr } from './tccomponents/component/table/TC-Tr.vue';
export { default as tcTextarea } from './tccomponents/component/textarea/TC-Textarea.vue';
export { default as tcTooltip } from './tccomponents/component/tooltip/TC-Tooltip.vue';
export { default as tfIcon } from './tccomponents/fundamental/icon/TF-Icon.vue';
export { default as tlFlow } from './tccomponents/layout/flow/TL-Flow.vue';
export { default as tlGrid } from './tccomponents/layout/grid/TL-Grid.vue';
export { default as tlModal } from './tccomponents/layout/modal/TL-Modal.vue';
export { default as tlSidebar } from './tccomponents/layout/sidebar/TL-Sidebar.vue';

export interface TCOptions {
  primaryColor?: string;
  store?: Store<any>;
}

export default {
  install(vue: VueConstructor<Vue>, options: TCOptions) {
    console.log('installing tccomponents_vue...');
    if (options) {
      if (options.primaryColor && !options.store) {
        throw new Error('Please initialise plugin with a Vuex store.');
      }
      if (options.store)
        options.store.registerModule('tccomponents_vue', tcStore);
      tcStore.commit('setPrimary', options.primaryColor);
    }
  }
};
