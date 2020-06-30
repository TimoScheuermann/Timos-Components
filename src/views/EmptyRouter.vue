<template>
  <div class="tccomponents--details">
    <tc-hero :hasFixedHeader="true" height="200" background="#b0b0b0">
      <img slot="background" src="assets/hero.png" />

      <transition-group tag="div" class="hero-content" name="swap">
        <div class="hero-inner" v-if="component" :key="component.icon">
          <tf-icon
            v-if="component"
            :key="component.icon"
            :icon="component.icon"
          />
          <div class="title" v-if="component" :key="component.name">
            {{ $route.meta.title.split('|').pop() }}
          </div>
        </div>
      </transition-group>
    </tc-hero>
    <transition name="slither">
      <div :key="component.name">
        <div content>
          <router-view :component="component" />
          <div v-if="component && component.api.length > 0">
            <tc-card rounded="true" :dark="true" title="Properties">
              <tc-table :dark="true">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Parameters</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
                <tr v-for="api in component.api" :key="api.name">
                  <td>{{ api.name }}</td>
                  <td>{{ api.type }}</td>
                  <td>{{ api.parameters }}</td>
                  <td>{{ api.description }}</td>
                  <td>{{ api.default }}</td>
                </tr>
              </tc-table>
            </tc-card>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import tcComponents from '@/components';
import TCHero from '@/tccomponents/hero/TC-Hero.vue';
import TFIcon from '@/tccomponents/_fundamental/icon/TF-Icon.vue';
import TCTable from '@/tccomponents/table/TC-Table.vue';
import TCCard from '../tccomponents/card/TC-Card.vue';

@Component({
  components: {
    'tc-hero': TCHero,
    'tf-icon': TFIcon,
    'tc-table': TCTable,
    'tc-card': TCCard
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
    z-index: 1;
    font-size: 20em;
  }
}
</style>
