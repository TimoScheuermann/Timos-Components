<template>
  <div class="tccomponents--details" v-if="component">
    <tccomponents-details-hero :component="component" />
    <!-- <p>{{ component }}</p> -->
    <div
      class="open-in-designer"
      :class="{ dark: $store.getters.dark }"
      v-if="showDesignerButton"
    >
      <tc-button
        name="Open in Designer"
        variant="filled"
        icon="tools"
        @click="openDesigner"
      />
    </div>

    <transition name="slither">
      <div :key="component.name + component.icon" content>
        <router-view :component="component" />
        <template v-if="component.slots.length > 1">
          <h1>Slots</h1>
          <tccomponents-details-slots :prefix="prefix" :component="component" />
        </template>
        <h1>API</h1>
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
import TCButton from '@/tccomponents/component/button/TC-Button.vue';

@Component({
  components: {
    'tccomponents-details-api': TCComponentsDetailsApi,
    'tccomponents-details-hero': TCComponentsDetailsHero,
    'tccomponents-details-not-found': TCComponentsDetailsNotFound,
    'tccomponents-details-slots': TCComponentsDetailsSlots,
    'tc-button': TCButton
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

  get showDesignerButton(): boolean {
    return this.prefix === 'tc';
  }

  public openDesigner(): void {
    this.$store.commit(
      'updateDesignerComponent',
      this.$route.path.split('/').pop()
    );
    this.$router.push({ name: 'designer' });
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

.tccomponents--details {
  position: relative;
}
.open-in-designer {
  position: absolute;
  width: fit-content;
  border-top-left-radius: $border-radius;
  right: 0;
  top: 251px;
  transform: translateY(-100%);
  background: $background;
  &.dark {
    background: $background_dark;
  }
  padding: 5px {
    bottom: 0;
  }
  animation: show-open-in-designer 0.5s ease-in-out;
}
@keyframes show-open-in-designer {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(-100%);
  }
}
</style>
