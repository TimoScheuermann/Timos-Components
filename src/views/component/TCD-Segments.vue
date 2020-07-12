<template>
  <div>
    <h1>Segments</h1>
    <tc-segments
      v-for="(i, index) in Array(2)"
      :key="index"
      :segments="segments"
      :dark="index === 1"
    >
      <div v-for="(seg, index) in segments" :key="seg" :slot="seg">
        <div>
          <div v-if="index === 0">
            <tc-headline v-if="index === 0" :title="seg" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            libero numquam quis earum a reiciendis dolorum excepturi voluptatem,
            ducimus doloremque soluta sed iste similique mollitia nam,
            perspiciatis quam officiis iure!
          </div>
          <div v-if="index === 1">
            <div>
              <b>2. Page</b>
            </div>
            <i class="ti-heart" />
            <i class="ti-thunder" />
            <i class="ti-divider" />
            <i class="ti-peace" />
          </div>
          <div v-if="index === 2">
            <tc-card
              title="3. Page"
              subtitle="Es funktioniert halt einfach alles"
              rounded
              dark="true"
            />
          </div>
        </div>
      </div>
    </tc-segments>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TCSegments from '@/tccomponents/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
@Component({
  components: {
    'tc-segments': TCSegments,
    'tc-card': TCCard
  }
})
export default class TCDSegment extends Vue {
  public segments: string[] = ['Section 1', 'Section 2', 'Section 3'];
}
</script>
