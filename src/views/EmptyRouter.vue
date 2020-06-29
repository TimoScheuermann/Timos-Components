<template>
  <div class="tccomponents--details">
    <tc-hero :hasFixedHeader="true" height="200" background="#b0b0b0">
      <img slot="background" src="assets/hero.png" />
      <tf-icon v-if="component" :icon="component.icon" />
      <!-- <i v-if="component" :class="'ti-' + component.icon" /> -->
      <div class="title" v-if="component">
        {{ $route.meta.title.split('|').pop() }}
      </div>
    </tc-hero>
    <transition name="slither">
      <div :key="component.name">
        <div content>
          <router-view :component="component" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import tcComponents from '@/components';
import TCHero from '../tccomponents/hero/TC-Hero.vue';
import TFIcon from '../tccomponents/_fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tc-hero': TCHero,
    'tf-icon': TFIcon
  }
})
export default class EmptyRouter extends Vue {
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
}
</script>
<style lang="scss" scoped>
.slither-enter-active,
.slither-leave-active {
  position: absolute;
  transition: transform 0.5s;
  width: calc(90vw - 225px);
}

.slither-enter,
.slither-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

[content] {
  padding-top: 2.5vw;
}

.tc-hero {
  @media only screen and(min-width: 750px) {
    margin-top: calc(-50px - env(safe-area-inset-top));
  }

  img {
    filter: blur(7px);
  }

  .title,
  .tf-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
  }

  .title {
    text-align: center;
    width: max-content;
    font-weight: 800;
    font-size: 4em;
    z-index: 2;
    color: lighten($color, 12%);
  }
  .tf-icon {
    color: lighten($color, 60%);
    opacity: 0.6;
    backdrop-filter: blur(7px);
    z-index: 1;
    font-size: 20em;
  }
}
</style>
