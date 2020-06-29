<template>
  <div>
    <tc-headline title="Revealer"></tc-headline>
    <tc-revealer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quos
        eveniet magni! Ipsam est eos alias saepe nostrum pariatur delectus nam
        in veritatis ex neque temporibus voluptatum provident, praesentium
        minus.
      </p>
      <tc-revealer title="Revealer inside" icon="share" />
      <tc-headline title="Hallo" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, ut
        laboriosam temporibus illum modi asperiores ab ratione dolore
        voluptates, quibusdam eos tempore nostrum tenetur consectetur assumenda
        atque natus earum eveniet! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quo, harum assumenda doloribus mollitia iusto velit
        delectus voluptatem. Voluptate excepturi itaque ipsam asperiores quos
        officiis nostrum, assumenda, hic ex inventore laboriosam?
      </p>
    </tc-revealer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCHeadline from '@/tccomponents/headline/TC-Headline.vue';
import TCRevealer from '@/tccomponents/revealer/TC-Revealer.vue';
@Component({
  components: {
    'tc-headline': TCHeadline,
    'tc-revealer': TCRevealer
  }
})
export default class TCDRevealer extends Vue {}
</script>
