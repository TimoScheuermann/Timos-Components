<template>
  <div class="tccomponents--details" v-if="component">
    <tccomponents-details-hero :component="component" />
    <!-- <p>{{ component }}</p> -->

    <transition name="slither">
      <div :key="component.name + component.icon" content>
        <router-view :component="component" />
        <tccomponents-details-slots :prefix="prefix" :component="component" />
        <tccomponents-details-api :component="component" />
      </div>
    </transition>
  </div>

  <tccomponents-details-not-found v-else />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import tcComponents from '@/components';
import TCComponentsDetailsApi from '@/components/details/TCComponentsDetails-Api.vue';
import TCComponentsDetailsHero from '@/components/details/TCComponentsDetails-Hero.vue';
import TCComponentsDetailsNotFound from '@/components/details/TCComponentsDetails-NotFound.vue';
import TCComponentsDetailsSlots from '@/components/details/TCComponentsDetails-Slots.vue';

@Component({
  components: {
    'tccomponents-details-api': TCComponentsDetailsApi,
    'tccomponents-details-hero': TCComponentsDetailsHero,
    'tccomponents-details-not-found': TCComponentsDetailsNotFound,
    'tccomponents-details-slots': TCComponentsDetailsSlots
  }
})
export default class TCComponentsDetails extends Vue {
  get component(): TCComponent {
    const routePath = this.$route.path.split('/');
    const group = routePath[1].toLowerCase();
    const comp = routePath[2].toLowerCase();
    return tcComponents
      .filter(x => x.group.toLowerCase().startsWith(group))
      .map(x => x.components)
      .flat()
      .filter(x => x.name.toLowerCase() === comp)[0];
  }

  get prefix(): string {
    const routePath = this.$route.path.split('/');
    const group = routePath[1].toLowerCase();
    if (group.startsWith('l')) return 'tl';
    if (group.startsWith('f')) return 'tf';
    return 'tc';
  }
}
</script>
<style lang="scss" scoped>
.slither-enter-active,
.slither-leave-active {
  position: absolute;
  transition: transform 0.5s;
}

.slither-enter,
.slither-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

[content] {
  @media #{$isDesktop} {
    width: calc(
      100vw - 10vw - env(safe-area-inset-left) - env(safe-area-inset-right) -
        250px
    );
  }
  @media #{$isMobile} {
    width: calc(
      100vw - 10vw - env(safe-area-inset-left) - env(safe-area-inset-right)
    );
  }
}
</style>
