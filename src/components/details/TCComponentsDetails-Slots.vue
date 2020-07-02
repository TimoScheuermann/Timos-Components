<template>
  <tc-card
    class="tccomponents-details-slots"
    :key="component.name + component.icon"
    v-if="component.slots.length > 0"
    title="Slots"
    rounded="true"
  >
    <transition-group name="image-swap" class="slot-images" tag="div">
      <tc-image
        v-for="img in currentSlotTitle"
        :key="img"
        :src="img"
        fallback="assets/wip.svg"
      />
      <!--
      </tc-image>
      <img
        onerror="if (this.src != 'assets/wip.svg') this.src = 'assets/wip.svg';"
      /> -->
    </transition-group>

    <tc-segments v-model="currentSelection" :segments="segments">
      <h2
        v-for="slot in component.slots"
        :key="slot.name + 't'"
        :slot="slot.name"
      >
        {{ slot.name }}
      </h2>
      <p v-for="slot in component.slots" :key="slot.name" :slot="slot.name">
        {{ slot.description }}
      </p>
    </tc-segments>
  </tc-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import TLGrid from '@/tccomponents/_layout/grid/TL-Grid.vue';
import TCSegments from '@/tccomponents/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/card/TC-Card.vue';
import TCImage from '@/tccomponents/image/TC-Image.vue';

@Component({
  components: {
    'tl-grid': TLGrid,
    'tc-segments': TCSegments,
    'tc-card': TCCard,
    'tc-image': TCImage
  }
})
export default class TCComponentsDetailsSlots extends Vue {
  @Prop() component!: TCComponent;
  @Prop({ default: 'tc' }) prefix!: string;

  public currentSelection = 0;

  get filePath(): string {
    return `assets/slots/${this.prefix}/${this.component.name}/`;
  }

  get segments(): string[] {
    return this.component.slots.map(x => x.name);
  }

  get currentSlotTitle(): string[] {
    return this.component.slots
      .filter((x, i) => i === this.currentSelection)
      .map(x => this.filePath + x.name + '.svg');
  }
}
</script>

<style lang="scss" scoped>
.tccomponents-details-slots {
  animation: slide-in-top 0.4s ease-in-out 0.4s both;
  margin-bottom: 40px;
}

@keyframes slide-in-top {
  0% {
    filter: grayscale(100%);
  }
  100% {
    filter: grayscale(0%);
  }
}
.slot-images {
  width: 100%;
  min-height: 100px;
  position: relative;
  margin-bottom: 10px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    left: 0;
  }
}

.image-swap-enter-active,
.image-swap-leave-active {
  transition: all 0.4s ease-in-out;
}
.image-swap-enter,
.image-swap-leave-to {
  opacity: 0;
}
</style>
