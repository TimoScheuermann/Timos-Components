<template>
  <div class="tccomponents--playground">
    <tccomponents-subpage-hero subtitle="Playground" />

    <div content>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        cumque impedit quis iusto est totam fugiat quod. Deserunt, similique
        nisi praesentium nam, ab cum, optio sunt repudiandae dolorum quae
        libero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
        architecto at, perferendis exercitationem laborum ullam unde dolorum
        corporis sed, ipsa, accusamus quos facilis! Consequatur soluta eum rem
        non cupiditate eos.
      </h1>
      <h1>TC Select 2</h1>
      <!-- <tc-select title="Wähle">
        <tc-select-item title="FitnessHub" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
      </tc-select> -->
      <div style="text-align: right">
        <tc-select :showSelection="false" :onlyIcon="true" variant="filled">
          <tc-select-item title="FitnessHub" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
          <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
        </tc-select>
      </div>
      <!-- <tc-select title="Wähle" variant="filled">
        <tc-select-item title="FitnessHub" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
      </tc-select> -->
      <!-- <tc-select title="Wähle" variant="border">
        <tc-select-item title="FitnessHub" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
      </tc-select>
      <tc-select title="Wähle" variant="opaque">
        <tc-select-item title="FitnessHub" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
        <tc-select-item title="Gastro Assistant" icon="gastro-assistant" />
      </tc-select> -->
      <h1>TC Image</h1>
      <tc-image
        src="https://images.unsplash.com/photo-1597606781340-e2661f37b5b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
      >
      </tc-image>
      <h1>TC Magic Card</h1>
      <div class="exgrid">
        <tc-magic-card
          :dark="true"
          subtitle="Website"
          title="TC Components"
          :maxHeight="200"
          src="https://images.unsplash.com/photo-1597606781340-e2661f37b5b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
        >
          <div class="wrapper">
            <h1>Verrückt es funktioniert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repudiandae ad tempora eveniet ex minus, quasi, optio eius
              temporibus, saepe beatae dignissimos. Cumque rem eos inventore
              officiis, aliquam corrupti iste.
            </p>
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              inventore accusantium aliquid debitis nihil ipsa, quas saepe nobis
              provident nulla fugiat molestiae aliquam corrupti, porro beatae
              expedita, incidunt autem eaque.
            </h1>
          </div>
        </tc-magic-card>
        <tc-magic-card
          subtitle="Website"
          title="TC Components"
          :maxHeight="200"
          src="https://images.unsplash.com/photo-1597730075497-f322c72e3eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        >
          <div class="wrapper">
            <h1>Verrückt es funktioniert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repudiandae ad tempora eveniet ex minus, quasi, optio eius
              temporibus, saepe beatae dignissimos. Cumque rem eos inventore
              officiis, aliquam corrupti iste.
            </p>
          </div>
        </tc-magic-card>
        <tc-magic-card
          subtitle="Website"
          title="TC Components"
          :maxHeight="200"
          src="https://images.unsplash.com/photo-1597481561318-98b9b065c9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        >
          <div class="wrapper">
            <h1>Verrückt es funktioniert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repudiandae ad tempora eveniet ex minus, quasi, optio eius
              temporibus, saepe beatae dignissimos. Cumque rem eos inventore
              officiis, aliquam corrupti iste.
            </p>
          </div>
        </tc-magic-card>
        <tc-magic-card
          subtitle="Website"
          title="TC Components"
          :maxHeight="200"
          src="https://images.unsplash.com/photo-1597693197150-1db724be28cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        >
          <div class="wrapper">
            <h1>Verrückt es funktioniert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              repudiandae ad tempora eveniet ex minus, quasi, optio eius
              temporibus, saepe beatae dignissimos. Cumque rem eos inventore
              officiis, aliquam corrupti iste.
            </p>
          </div>
        </tc-magic-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCComponentsSubpageHero from '@/components/shared/TCComponents-Subpage-Hero.vue';
import TCSidebar from '@/tccomponents/component/sidebar/TC-Sidebar.vue';
import TCSidebarGroup from '@/tccomponents/component/sidebar/TC-Sidebar-Group.vue';
import TCSidebarItem from '@/tccomponents/component/sidebar/TC-Sidebar-Item.vue';
import TCMagicCard from '@/tccomponents/component/magic-card/TC-Magic-Card.vue';
import TCImage2 from '@/tccomponents/component/image/TC-Image.vue';
import TCSelect2 from '@/tccomponents/component/select/TC-Select.vue';
import TCSelectItem from '@/tccomponents/component/select/TC-Select-Item.vue';

@Component({
  components: {
    'tccomponents-subpage-hero': TCComponentsSubpageHero,
    'tc-sidebar': TCSidebar,
    'tc-sidebar-group': TCSidebarGroup,
    'tc-sidebar-item': TCSidebarItem,
    'tc-magic-card': TCMagicCard,
    'tc-image': TCImage2,
    'tc-select': TCSelect2,
    'tc-select-item': TCSelectItem
  }
})
export default class TCComponentsPlayground extends Vue {}
</script>
<style lang="scss" scoped>
[content] {
  position: relative;
  .exgrid {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    div {
      padding: 1%;
    }
    @media #{$isDesktop} {
      .tc-magic-card {
        flex: 0 0 58%;
        max-width: 58%;
      }
      .tc-magic-card:nth-child(4n + 4),
      .tc-magic-card:nth-child(4n + 1) {
        flex: 0 0 38%;
        max-width: 38%;
      }
    }
  }
}
.wrapper {
  padding: 20px 5vw !important;
}
.tc-image {
  max-height: 200px;
}
</style>
