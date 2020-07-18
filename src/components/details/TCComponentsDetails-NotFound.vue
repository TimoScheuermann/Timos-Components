<template>
  <div class="tccomponents-details-not-found">
    <img src="assets/banner.svg" />
    <h1>Component not found</h1>
    <p>
      This component does not exist at the moment. If you're coming from an
      external website or entered the URL manually, it's possible, that this
      component does no longer exist, had its name changed or is temporaly
      unavailable.
    </p>
    <p>
      <tc-button
        variant="filled"
        icon="chevron-left"
        name="Components"
        :to="{ name: 'home' }"
      />
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TCButton from '@/tccomponents/component/button/TC-Button.vue';

@Component({
  components: {
    'tc-button': TCButton
  }
})
export default class TCComponentsDetailsNotFound extends Vue {}
</script>

<style lang="scss" scoped>
.tccomponents-details-not-found {
  height: 100vh;
  @media #{$isDesktop} {
    margin-top: -51px;
    .tc-button {
      display: none;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  p {
    text-align: center;
    margin: 0 {
      top: 20px;
    }
  }
  img {
    max-width: 80vw;
  }
  p {
    width: 400px;
    max-width: 80vw;
  }

  background-image: radial-gradient(
      circle at 28% 90%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 24%,
      transparent 24%,
      transparent 100%
    ),
    radial-gradient(
      circle at 84% 65%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 45%,
      transparent 45%,
      transparent 100%
    ),
    radial-gradient(
      circle at 46% 12%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 22%,
      transparent 22%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 14%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 35%,
      transparent 35%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 90%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 40%,
      transparent 40%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 100%,
      rgba($error, 0.03) 0%,
      rgba($error, 0.03) 56%,
      transparent 56%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}
</style>
