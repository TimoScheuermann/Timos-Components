<template>
  <div>
    <tc-revealer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quos
        eveniet magni! Ipsam est eos alias saepe nostrum pariatur delectus nam
        in veritatis ex neque temporibus voluptatum provident, praesentium
        minus.
      </p>
      <tc-revealer title="Revealer inside" icon="share" />

      <h2>Hello</h2>
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

import TCRevealer from '@/tccomponents/revealer/TC-Revealer.vue';
@Component({
  components: {
    'tc-revealer': TCRevealer
  }
})
export default class TCDRevealer extends Vue {}
</script>
