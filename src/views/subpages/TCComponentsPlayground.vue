<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />
    <div content>
      <h1>Updated Modal</h1>
      <tc-button
        :name="(opened ? 'Close' : 'Open') + ' modal'"
        icon="plus"
        @click="opened = !opened"
      />
      <tc-modal
        v-model="opened"
        title="Install as PWA"
        subtitle="Make Timo's Components available offline"
      />
      <h1>New Spinner</h1>
      <tc-spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCModal from '@/tccomponents/component/modal/TC-Modal.vue';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TCSpinner from '@/tccomponents/component/spinner/TC-Spinner.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-button': TCButton,
    'tc-modal': TCModal,
    'tc-spinner': TCSpinner
  }
})
export default class TCComponentsPlayground extends Vue {
  public opened = false;
}
</script>
