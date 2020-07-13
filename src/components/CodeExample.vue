<template>
  <div class="portfolio--codeexample">
    <tc-card
      :title="title"
      :shadow="false"
      rounded="true"
      :dark="$store.getters.dark"
    >
      <tc-segments :segments="['Example', 'Code']" :dark="$store.getters.dark">
        <div id="Example" slot="Example">
          <slot />
        </div>
        <div class="portfolio--codeexample--code" slot="Code">
          <div class="portfolio--codeexample--code__tag">&lt;{{ tag }}</div>
          <div v-if="attr">
            <div
              class="portfolio--codeexample--code__attr"
              v-for="(a, index) in Object.keys(attr)"
              :key="a"
            >
              <div class="attr">{{ a }}</div>
              <div class="value">"{{ Object.values(attr)[index] }}"</div>
            </div>
          </div>
          <div class="portfolio--codeexample--code__tag">
            {{ inner ? '>' : '/>' }}
          </div>
          <div v-if="inner">
            <div
              class="portfolio--codeexample--code__inner"
              v-for="i in inner.split('**')"
              :key="i"
            >
              {{ i }}
            </div>
          </div>
          <div class="portfolio--codeexample--code__tag" v-if="inner">
            {{ `&lt;/` + tag + '>' }}
          </div>
        </div>
      </tc-segments>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TCSegments from '@/tccomponents/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
@Component({
  components: {
    'tc-segments': TCSegments,
    'tc-card': TCCard
  }
})
export default class PortfolioCodeExample extends Vue {
  @Prop() title!: string;
  @Prop() tag!: string;
  @Prop() attr!: Record<string, unknown>;
  @Prop() inner!: string;
}
</script>
<style lang="scss" scoped>
.portfolio--codeexample {
  .tc-card {
    // background: $background;
  }
  .tc-card__dark {
    // background: $background_dark;
  }
  &--code {
    text-align: left;
    &__inner {
      margin-left: 10px;
    }
    &__attr {
      margin-left: 10px;
      display: flex;
      .attr {
        color: #dd7828;
        &::after {
          color: #000;
          content: '=';
        }
      }
      .value {
        color: #3b95d5;
        max-width: 100%;
        overflow-wrap: break-word;
      }
    }
    &__tag {
      color: #962525;
    }
  }
}
</style>
