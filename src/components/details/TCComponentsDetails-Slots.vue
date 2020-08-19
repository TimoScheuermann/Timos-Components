<template>
  <tc-card
    class="tccomponents-details-slots"
    :key="component.name + component.icon"
    v-if="component.slots.length > 0"
    title="Slots"
    rounded="true"
  >
    <template v-if="component.slots.length > 1">
      <transition-group name="image-swap" class="slot-images" tag="div">
        <tc-image
          v-for="img in currentSlotTitle"
          :key="img"
          :src="img"
          fallback="assets/wip.svg"
        />
      </transition-group>

      <tc-segments v-model="currentSelection">
        <tc-segment-item
          v-for="slot in component.slots"
          :key="slot.name"
          :title="slot.name"
        >
          <h2>{{ slot.name }}</h2>
          <p>{{ slot.description }}</p>
        </tc-segment-item>
      </tc-segments>
    </template>
    <template v-else-if="component.slots.length > 0">
      <h2>{{ component.slots[0].name }}</h2>
      <p>{{ component.slots[0].description }}</p>
    </template>
  </tc-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCComponent } from '@/models/TCComponent.model';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import TCSegments from '@/tccomponents/component/segments/TC-Segments.vue';
import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import TCImage from '@/tccomponents/component/image/TC-Image.vue';
import TCSegmentItem from '@/tccomponents/component/segments/TC-Segment-Item.vue';

@Component({
  components: {
    'tl-grid': TLGrid,
    'tc-segments': TCSegments,
    'tc-segment-item': TCSegmentItem,
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
  margin-top: 30px;
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
