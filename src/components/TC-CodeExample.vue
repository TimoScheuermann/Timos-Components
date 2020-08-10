<template>
  <tc-card :rounded="true" color="#fff" tfbackground="containerDark">
    <tl-flow horizontal="space-between" slot="header">
      <div class="code-example-title">{{ title }}</div>
      <tc-button name="copy" icon="component" @click="copy" />
    </tl-flow>
    <vue-code-highlight slot="media" :language="lang">
      <div :ref="uuid_">
        <slot />
      </div>
    </vue-code-highlight>
  </tc-card>
</template>

<script lang="ts">
import { Mixins, Component, Prop } from 'vue-property-decorator';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';
import TLFlow from '@/tccomponents/layout/flow/TL-Flow.vue';

@Component({
  components: {
    'tc-card': TCCard,
    'tc-button': TCButton,
    'tl-flow': TLFlow,
    VueCodeHighlight
  }
})
export default class TCCodeExample extends Mixins(TCComponent) {
  @Prop({ default: 'Code' }) title!: string;
  @Prop({ default: 'html' }) lang!: string;

  public copy(): void {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = this.getHTML();
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  getHTML(): string {
    return (this.$refs[this.uuid_] as HTMLElement).children[0].innerHTML
      .split('&lt;')
      .join('<')
      .split('&gt;')
      .join('>');
  }
}
</script>

<style lang="scss" scoped>
.tc-card {
  margin-top: 20px;
  .tl-flow {
    margin: 10px 20px;
    .code-example-title {
      font-weight: bold;
    }
  }
}
</style>
