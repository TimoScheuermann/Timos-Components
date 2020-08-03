<template>
  <div>
    <h1>Sizes</h1>
    <tl-grid minWidth="250">
      <portfolio-code-example
        v-for="size in sizes"
        :title="size"
        :key="size"
        tag="tc-avatar"
        :attr="{
          size: size,
          src: src
        }"
      >
        <tc-avatar :size="size" :src="src" />
      </portfolio-code-example>
    </tl-grid>

    <h1>Borders</h1>
    <tl-grid>
      <portfolio-code-example
        v-for="border in borders"
        :title="border"
        :key="border"
        tag="tc-avatar"
        :attr="{
          border: border,
          src: src
        }"
      >
        <tc-avatar :border="border" :src="src" />
      </portfolio-code-example>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCAvatar from '@/tccomponents/component/avatar/TC-Avatar.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tl-grid': TLGrid,
    'tc-avatar': TCAvatar
  }
})
export default class TCDBadge extends Vue {
  public src = 'https://timos.design/assets/me.jpg';
  public sizes: string[] = ['large', 'medium', 'small', 'tiny'];
  public borders: string[] = ['circle', 'rounded', 'square'];
}
</script>
