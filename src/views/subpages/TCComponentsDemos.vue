<template>
  <div class="tccomponents--demos">
    <tccomponents-subpage-hero subtitle="Demos" />
    <div content>
      <big-heading title="Websites" subtitle="using TCComponents" />
      <tl-grid>
        <a v-for="w in websites" :key="w.name" :href="w.url" target="_blank">
          <tc-card :title="w.name" :dark="w.dark" rounded="true" hover="true">
            <img :src="w.thumbnail" />
          </tc-card>
        </a>
      </tl-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import BigHeading from '@/components/BigHeading.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'big-heading': BigHeading
  }
})
export default class TCComponentsDemos extends Vue {
  public websites: Record<string, unknown>[] = [
    {
      dark: true,
      name: "Timo's Portfolio",
      thumbnail: 'assets/demos/portfolio.png',
      url: 'https://timos.design'
    },
    {
      name: "Timo's Icons",
      thumbnail: 'assets/demos/timosicons.png',
      url: 'https://icons.timos.design'
    },
    {
      name: 'Investing Collectors',
      thumbnail: 'assets/demos/investing-collectors.png',
      url: 'http://wip-investing-collectors.netlify.app'
    },
    {
      name: "Timo's Newsroom",
      thumbnail: 'https://newsroom.timos.design/pwa/maskIcon.svg',
      url: 'http://newsroom.timos.design'
    }
  ];
}
</script>

<style lang="scss" scoped>
[content] {
  padding-top: 50px;
  text-align: center;

  .big-heading {
    margin-bottom: 20px;
  }
  a {
    color: $color;
    text-decoration: none;
  }
  img {
    max-height: 150px;
  }
}
</style>
