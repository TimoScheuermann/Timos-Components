<template>
  <div class="tccomponents--home">
    <tc-hero>
      <img slot="background" src="assets/hero.png" id="bg" />
      <img src="assets/banner.png" />
      <h1 id="title">Components</h1>
    </tc-hero>
    <div content>
      <div class="hero-section" center>
        <div class="hero-tiles">
          <span>
            <i class="ti-card" />
          </span>
          <span>
            <i class="ti-button" />
          </span>
          <span>
            <i class="ti-list" />
          </span>
          <span>
            <i class="ti-painting" />
          </span>
        </div>

        <h1>Component Library</h1>
        <p>
          A library of high-quality ready to use components that will help you
          speed up your development workflow.
        </p>
        <div>
          <!-- <tc-button
            :to="{
              name: constants.projectRoutes.timos_components_getting_started
            }"
            variant="filled"
            icon="login"
            name="Getting started"
          /> -->
          <tc-button
            :to="{ name: 'designer' }"
            icon="tools"
            name="Component
          Designer"
          />
        </div>
      </div>

      <div
        v-for="group in tcComponents"
        :key="group.group"
        class="group-show-real"
        :id="'show-real_' + group.group"
      >
        <tc-list class="tc-components-home--list" :title="group.group">
          <tc-list-item
            v-for="comp in group.components"
            :key="comp.name"
            :to="{
              name:
                group.prefix + '-' + comp.name.toLowerCase().replace(' ', '-')
            }"
            :title="comp.name"
            :icon="comp.icon"
          />
        </tc-list>
        <h1 class="tc-components-home--grid">{{ group.group }}</h1>
        <tl-grid class="tc-components-home--grid" minWidth="200">
          <router-link
            v-for="comp in group.components"
            :key="comp.name"
            :to="{
              name:
                group.prefix + '-' + comp.name.toLowerCase().replace(' ', '-')
            }"
          >
            <tc-card rounded="true">
              <div class="details">
                <tf-icon :icon="comp.icon" />
                <span>{{ comp.name }}</span>
              </div>
            </tc-card>
          </router-link>
        </tl-grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCHero from '@/tccomponents/hero/TC-Hero.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCList from '@/tccomponents/list/TC-List.vue';
import TCListItem from '@/tccomponents/list/TC-List-Item.vue';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import tcComponents from '@/components';
import TFIcon from '@/tccomponents/_fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-hero': TCHero,
    'tc-card': TCCard,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-list': TCList,
    'tc-list-item': TCListItem,
    'tf-icon': TFIcon
  }
})
export default class TCComponentsHome extends Vue {
  public tcComponents: TCComponentGroup[] = tcComponents;
}
</script>

<style lang="scss" scoped>
[content] {
  @media #{$isDesktop} {
    padding-top: 10px;
    .themeSection {
      display: none;
    }
  }
  @media #{$isMobile} {
    padding-top: 0px;
  }
}
.tc-hero {
  margin-top: calc(-50px - env(safe-area-inset-top));
}
.group-show-real {
  .tc-list {
    margin-bottom: 20px;
  }
  @media only screen and(min-width: 497px) {
    &#show-real_Fundementals {
      display: none;
    }
  }
}

.tc-components-home--list {
  @media only screen and(min-width: 497px) {
    display: none;
  }
}
.tc-components-home--grid {
  @media only screen and(max-width: 496px) {
    display: none;
  }
  margin-bottom: 40px;
}
a {
  text-decoration: none;
}
.tc-card {
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tf-icon {
      font-size: 35px;
      color: $error;
      margin: -20px 0;
      opacity: 0.7;
    }
    span {
      font-weight: bold;
      opacity: 0.8;
    }
  }
}

[center] {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 400px;
  }
}
.hero-section {
  margin-bottom: 30px;

  .hero-tiles {
    margin: 20px 0 {
      top: 40px;
    }
    $colors: (
      1: '#eb3b5a',
      2: '#45aaf2',
      3: '#26de81',
      4: '#2bcbba'
    );
    span {
      @each $i, $color in $colors {
        &:nth-child(#{$i}) {
          background: #{$color};
        }
      }

      display: inline-grid;
      width: 50px;
      height: 50px;
      place-items: center;

      border-radius: 5px;
      margin: 5px;
      font-size: 25px;

      i {
        opacity: 0.8;
        color: #fff;
      }
    }
  }
}
img#bg {
  filter: blur(7px);
}
h1#title {
  margin: 0;
  text-align: center;
}
</style>
