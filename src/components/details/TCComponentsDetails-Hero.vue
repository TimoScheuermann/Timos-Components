<template>
  <div class="tccomponents-details-hero">
    <tc-hero :hasFixedHeader="true" height="200" background="#b0b0b0">
      <img slot="background" src="assets/hero.png" />

      <transition-group tag="div" class="hero-content" name="swap">
        <div class="hero-inner" :key="component.name + component.icon">
          <tf-icon :key="component.icon" :icon="component.icon" />
          <div class="title" :key="component.name">
            {{ $route.meta.title.split('|').pop() }}
          </div>
        </div>
      </transition-group>
    </tc-hero>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import TCHero from '@/tccomponents/component/hero/TC-Hero.vue';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tc-hero': TCHero,
    'tf-icon': TFIcon
  }
})
export default class TCComponentsDetailsHero extends Vue {
  @Prop() component!: TCComponent;
}
</script>

<style lang="scss" scoped>
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
    z-index: 1;
    font-size: 20em;
  }
}

.swap-enter-active,
.swap-leave-active {
  transition: all 1s;
  transform-origin: center center;
}
.swap-enter,
.swap-leave-to {
  letter-spacing: -2em;
  filter: blur(5px);
  opacity: 0;
}
.swap-enter {
  transform: translate(50%, 70px);
  margin-top: 70px;
}
.swap-leave-to {
  opacity: 0;
  transform: scale(0);
}
.swap-leave-active {
  position: absolute;
}
</style>
