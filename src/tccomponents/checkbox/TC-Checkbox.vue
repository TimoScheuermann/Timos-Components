<template>
  <div class="tc-checkbox" :class="{ 'tc-checkbox__dark': dark }">
    <input
      @input="updateVal()"
      v-model="checked"
      type="checkbox"
      name="check"
      :id="'tc-checkbox_' + uuid_"
    />
    <label
      :for="'tc-checkbox_' + uuid_"
      :class="{
        'tc-checkbox--label__left': position !== 'right',
        'tc-checkbox--label__right': position === 'right'
      }"
    >
      <transition-group
        v-if="hasCustomIcons"
        tag="div"
        class="icon"
        :name="'icon-' + animationName"
        :style="{ color: color }"
      >
        <i v-for="i in currentIcon" :key="i" class="ti" :class="'ti-' + i"></i>
      </transition-group>
      <svg
        v-if="!hasCustomIcons"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g id="border" fill="none" stroke-width="10">
          <rect x="5" y="5" width="90" height="90" rx="10" fill="none" />
        </g>
        <path
          id="arrow"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
          fill="none"
          :stroke="color ? color : '#08f'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="10"
        />
      </svg>
      <span v-if="title">{{ title }}</span>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCCheckbox extends Mixins(TCComponent) {
  @Prop({ default: false }) value!: boolean;
  @Prop() title!: string;
  @Prop() position!: string;
  @Prop() iconChecked!: string;
  @Prop() iconUnchecked!: string;
  @Prop() iconAnimation!: string;

  @Watch("value")
  changed(): void {
    this.checked = this.value;
  }

  public checked = this.value;
  public animations: string[] = ["scroll", "spin", "flip"];
  get animationName(): string {
    if (!this.iconAnimation) return this.animations[0];
    if (this.animations.includes(this.iconAnimation.toLowerCase())) {
      return this.iconAnimation.toLowerCase();
    }
    return this.animations[0];
  }

  get hasCustomIcons(): boolean {
    return !!this.iconChecked && !!this.iconUnchecked;
  }

  get currentIcon(): string[] {
    return [this.checked ? this.iconChecked : this.iconUnchecked];
  }

  updateVal() {
    this.$emit("input", !this.checked);
  }
}
</script>
<style lang="scss" scoped>
.icon-flip-move {
  transition: all 0.4s ease-in-out;
}
.icon-flip-enter-active,
.icon-flip-leave-active {
  position: absolute;
  transition: all 0.4s;
}
.icon-flip-enter {
  opacity: 0;
  transform: rotateX(-90deg);
}
.icon-flip-leave-to {
  transform: rotateX(90deg);
  opacity: 0;
}

.icon-spin-move {
  transition: all 0.4s ease-in-out;
}
.icon-spin-enter-active,
.icon-spin-leave-active {
  position: absolute;
  transition: all 0.4s;
}
.icon-spin-enter {
  opacity: 0;
  transform: rotate(-360deg) scale(0.5);
}
.icon-spin-leave-to {
  transform: rotate(360deg) scale(0.5);
  opacity: 0;
}

.icon-scroll-move {
  transition: all 0.4s ease-in-out;
}
.icon-scroll-enter-active,
.icon-scroll-leave-active {
  position: absolute;
  transition: all 0.4s;
}
.icon-scroll-enter {
  opacity: 0;
  transform: translateY(30px);
}
.icon-scroll-leave-to {
  animation: icon-scroll-anim 0.4s ease-in-out;
}
@keyframes icon-scroll-anim {
  0%,
  40% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  20% {
    transform: scale(1.25);
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.tc-checkbox {
  @include tc-container__light();
  &__dark {
    @include tc-container__dark();
    input + label svg #border {
      stroke: #fff;
    }
  }
  input {
    display: none;
  }
  input:checked + label {
    span {
      opacity: 1;
    }
    svg {
      #arrow {
        stroke: {
          dasharray: 172px;
          dashoffset: 0px;
        }
      }
      #border {
        stroke: {
          dasharray: 343px;
          dashoffset: 343px;
        }
      }
    }
  }
  overflow: hidden;
  label {
    cursor: pointer;
    display: grid;
    grid-template-rows: 20px;
    &.tc-checkbox--label__left {
      grid-template-columns: 20px auto;
      span {
        padding-left: 10px;
      }
    }
    &.tc-checkbox--label__right {
      grid-template-columns: auto 20px;
      // direction: rtl;
      grid-auto-flow: dense;
      svg,
      div {
        grid-column: 2;
      }
      span {
        grid-column: 1;

        padding-right: 10px;
      }
    }
    svg {
      height: 100%;
      width: 100%;

      #arrow {
        stroke: {
          dasharray: 172px;
          dashoffset: 172px;
        }
        transition: all 0.5s ease-in-out;
      }
      #border {
        stroke: #000 {
          dasharray: 343px;
          dashoffset: 0px;
        }
        transition: all 0.5s ease-in-out;
      }
    }
    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;
      color: $primary;
      i {
        position: absolute;
      }
    }
    span {
      padding: 0 5px;
      opacity: 0.8;
      font-weight: 500;
      line-height: 20px;
    }
  }
}
</style>
