<template>
  <div class="tccomponents--home">
    <tccomponents-subpage-hero subtitle="Components" />
    <div content>
      <tc-card hero :shadow="false" :dark="$store.getters.dark" rounded="true">
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
          <tc-button
            :to="{ name: 'howto' }"
            variant="filled"
            icon="login"
            name="Getting started"
          />
          <tc-button
            :to="{ name: 'designer' }"
            icon="tools"
            name="Component Designer"
          />
        </div>
      </tc-card>

      <div
        v-for="group in tcComponents"
        :key="group.group"
        class="group-show-real"
        :id="'show-real_' + group.group"
      >
        <tc-list
          class="tc-components-home--list"
          :dark="$store.getters.dark"
          :title="group.group"
        >
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
        <section class="tc-components-home--grid" :class="group.group">
          <h1>{{ group.group }}</h1>
          <tl-grid minWidth="200" arrangement="auto-fill">
            <router-link
              v-for="comp in group.components"
              :key="comp.name"
              :to="{
                name:
                  group.prefix + '-' + comp.name.toLowerCase().replace(' ', '-')
              }"
            >
              <tc-card :dark="$store.getters.dark" :hover="true" rounded="true">
                <div class="details">
                  <div class="watermark">
                    <tf-icon :icon="comp.icon" />
                  </div>
                  <span>{{ comp.name }}</span>
                </div>
              </tc-card>
            </router-link>
          </tl-grid>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TCButton from '@/tccomponents/button/TC-Button.vue';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCList from '@/tccomponents/list/TC-List.vue';
import TCListItem from '@/tccomponents/list/TC-List-Item.vue';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import tcComponents from '@/components';
import TFIcon from '@/tccomponents/_fundamental/icon/TF-Icon.vue';
import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';

@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-card': TCCard,
    'tc-button': TCButton,
    'tl-grid': TLGrid,
    'tc-list': TCList,
    'tc-list-item': TCListItem,
    'tf-icon': TFIcon,
    'tccomponents-subpage-hero': TCComponentsSubpageHero
  }
})
export default class TCComponentsHome extends Vue {
  public tcComponents: TCComponentGroup[] = tcComponents;
}
</script>

<style lang="scss" scoped>
.group-show-real {
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
  margin-top: 30px;
}
.tc-components-home--grid {
  @media only screen and(max-width: 496px) {
    display: none;
  }

  h1 {
    margin-top: 30px;
    font-size: 2em;
  }
}
a {
  text-decoration: none;
}
.tc-card {
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .watermark {
      position: absolute;
      opacity: 0.9;

      .tf-icon {
        font-size: 35px;
        color: $error;
      }
    }
    span {
      display: block;
      text-align: right;
      width: 100%;
      white-space: nowrap;
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
.tc-card[hero] {
  h1 {
    margin: 0;
  }
  div,
  h1,
  p {
    text-align: center;
  }
  .hero-tiles {
    margin-bottom: 20px;
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
</style>
