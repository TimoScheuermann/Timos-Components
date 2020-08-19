<template>
  <div class="tcd-textarea">
    <h1>Variants</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      possimus consequuntur sit voluptate quidem, reiciendis id dicta fuga
      incidunt eum ducimus ad, laboriosam odio, est accusantium iste deleniti
      nemo maiores.
    </p>

    <tc-card :rounded="true" :shadow="false">
      <tl-grid>
        <div>
          <h2>Normal</h2>
          <tc-textarea />
        </div>
        <div>
          <h2>Frosted</h2>
          <div bg>
            <tc-textarea :frosted="true" />
          </div>
        </div>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-textarea />
&lt;tc-textarea :frosted="true" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h2>Options</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur
      cupiditate, molestiae veniam quos commodi odio maxime aliquam fuga labore
      eligendi aspernatur eum explicabo sapiente ipsa. Incidunt aspernatur
      repellendus cumque?
    </p>
    <tc-card :rounded="true" :shadow="false">
      <tl-grid minWidth="200">
        <tl-flow flow="column" horizontal="space-between">
          <h2>Colors</h2>
          <tc-textarea tfcolor="error" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Title</h2>
          <tc-textarea title="Title" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Tooltip</h2>
          <tc-textarea tooltip="Tooltip" />
        </tl-flow>
        <tl-flow flow="column" horizontal="space-between">
          <h2>Title & Tooltip</h2>
          <tc-textarea title="Title" tooltip="Tooltip" />
        </tl-flow>
      </tl-grid>
      <tc-code-example>
        <pre>
&lt;tc-textarea tfcolor="error" />
&lt;tc-textarea title="Title" />
&lt;tc-textarea tooltip="Tooltip" />
&lt;tc-textarea title="Title" tooltip="Tooltip" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCTextarea from '@/tccomponents/component/textarea/TC-Textarea.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'tc-textarea': TCTextarea,
    'tl-grid': TLGrid,
    'tc-card': TCCard,
    'tc-code-example': TCCodeExample,
    'tl-flow': TLFlow
  }
})
export default class TCDTextarea extends Vue {}
</script>

<style lang="scss" scoped>
[bg] {
  border-radius: $border-radius;
  background: url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5');
}
.tc-textarea {
  width: 100%;
}
</style>
