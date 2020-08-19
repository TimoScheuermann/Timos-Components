<template>
  <div class="tc-checkbox" :style="styles" :class="classes">
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
      >
        <tf-icon v-for="i in currentIcon" :key="i" :icon="i" />
      </transition-group>

      <svg v-if="!hasCustomIcons" viewBox="0 0 100 100">
        <rect id="background" x="0" y="0" rx="28" />
        <rect id="border" x="5" y="5" rx="20" fill="none" />
        <path
          v-if="variant !== 'line'"
          id="arrow"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
        />
        <rect v-else id="line" x="25" y="45" rx="5" />
      </svg>

      <span v-if="title">{{ title }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import TCComponent from '@/tccomponents/TC-Component.mixin';
import TFIcon from '@/tccomponents/fundamental/icon/TF-Icon.vue';

@Component({
  components: {
    'tf-icon': TFIcon
  }
})
export default class TCCheckbox extends Mixins(TCComponent) {
  @Prop({ default: false }) value!: boolean;
  @Prop({ default: 'checkmark' }) variant!: string;
  @Prop() title!: string;
  @Prop() position!: string;
  @Prop() iconChecked!: string;
  @Prop() iconUnchecked!: string;
  @Prop() iconAnimation!: string;

  @Watch('value')
  private changed(): void {
    this.checked = this.value;
  }

  public checked = this.value;
  public animations: string[] = ['scroll', 'spin', 'flip'];

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

  public updateVal(): void {
    this.$emit('input', !this.checked);
  }

  get styles(): string {
    return `--tc-checkbox__color: ${this.getChosenColor(
      this.hasCustomIcons ? 'primary' : 'colorDark'
    )}; --tc-checkbox__background: ${this.getChosenBackground('primary')};`;
  }

  get classes(): Record<string, unknown> {
    return {
      'tc-checkbox__dark': this.darkmode,
      'tc-checkbox__no-label': !this.title
    };
  }
}
</script>
<style lang="scss" scoped>
.tc-checkbox {
  @include tc-container__light();
  input + label svg #border {
    stroke: $color;
  }
  &.tc-checkbox__dark {
    @include tc-container__dark();
    input + label svg #border {
      stroke: $color_dark;
    }
  }
  &.tc-checkbox__no-label {
    padding: 0;
    svg #border {
      display: none;
    }
  }
  input {
    display: none;
  }

  width: fit-content;
  user-select: none;
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

    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;

      .tf-icon {
        color: rgba(var(--tc-checkbox__color), 1);
        position: absolute;
      }
    }
    span {
      padding: 0 5px;
      opacity: 0.75;
      font-weight: 500;
      line-height: 20px;
      transition: 0.2s ease-in-out;
    }
  }
  svg {
    height: 100%;
    width: 100%;
    transform: scale(1.1);

    #arrow {
      stroke: rgba(var(--tc-checkbox__color), 1);
      stroke: {
        dasharray: 172px;
        dashoffset: 172px;
        linecap: round;
        linejoin: round;
        width: 10;
      }
      transition: all 0.4s ease-in-out;
    }
    #line {
      width: 50px;
      height: 10px;
      fill: rgba(var(--tc-checkbox__color), 1);
      transform: scaleX(0.5);
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    #border {
      stroke: #000 {
        dasharray: 343px;
        dashoffset: 0px;
        linecap: round;
        width: 8px;
      }
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      transition: all 0.4s linear;
      transition-delay: 0.3s;
    }
    #background {
      fill: rgba(var(--tc-checkbox__background), 1);
      width: 100%;
      height: 100%;
      transition: all 0.25s ease-in-out;
      transition-delay: 0.4s;
      opacity: 0;
    }
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
        transition-delay: 0.2s;
      }
      #line {
        transform: scaleX(1);
        opacity: 1;
        transition-delay: 0.1s;
      }
      #border {
        stroke: {
          dasharray: 343px;
          dashoffset: 343px;
        }
        opacity: 0;
      }
      #background {
        transition-delay: 0s;
        opacity: 1;
      }
    }
  }
}

// ANIMATIONS

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
</style>
