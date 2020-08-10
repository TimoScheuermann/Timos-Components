<template>
  <div>
    <h1>Examples</h1>
    <p>
      TC-Card has different-predesigned options, like title, subtitles and media
      slots. You can but you dont have to use them, they simply speed up your
      develeopment workflow. Below are some examples.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid>
        <div>
          <h2>Title</h2>
          <tc-card :dark="$store.getters.dark" title="Title" />
        </div>
        <div>
          <h2>Title + Subtitle</h2>
          <tc-card
            :dark="$store.getters.dark"
            title="Title"
            subtitle="Subtitle"
          />
        </div>
        <div>
          <h2>Title + Media</h2>
          <tc-card :dark="$store.getters.dark" title="Title">
            <img src="assets/hero.png" slot="media" />
          </tc-card>
        </div>
        <div>
          <h2>Title + Media + Content</h2>
          <tc-card :dark="$store.getters.dark" title="Title">
            <img src="assets/hero.png" slot="media" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </tc-card>
        </div>

        <div>
          <h2>Title + Subtitle + Content</h2>
          <tc-card
            :dark="$store.getters.dark"
            title="Title"
            subtitle="Subtitle"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic
              sed temporibus accusamus debitis necessitatibus qui possimus
              excepturi delectus fugiat vitae, mollitia minus aut labore in
              adipisci aperiam quis ut?
            </p>
          </tc-card>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-card title="Title" />
&lt;tc-card title="Title" subtitle="Subtitle" />
&lt;tc-card title="Title">
  &lt;img src="assets/hero.png" slot="media" />
&lt;/tc-card>
&lt;tc-card title="Title">
  &lt;img src="assets/hero.png" slot="media" />
  &lt;p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  &lt;/p>
&lt;/tc-card>
&lt;tc-card title="Title" subtitle="Subtitle">
  &lt;p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
    molestiae sequi ducimus deleniti, quaerat et vero sed distinctio
    libero cum, minima quos ullam cupiditate illo laudantium cumque
    asperiores rem iste.
  &lt;/p>
&lt;/tc-card></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Options</h1>
    <p>
      You can customize the appearance of your card by enableing different
      properties. You can combine as many of them as you like. Below are the
      basic options you can choose from.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="150">
        <div>
          <h2>Rounded</h2>
          <tc-card
            :dark="$store.getters.dark"
            title="Rounded"
            :rounded="true"
          />
        </div>
        <div>
          <h2>Hover</h2>
          <tc-card :dark="$store.getters.dark" title="Hover me" :hover="true" />
        </div>
        <div>
          <h2>Frosted</h2>
          <div
            style="background: url('https://images.unsplash.com/photo-1525183995014-bd94c0750cd5')"
          >
            <tc-card
              :dark="$store.getters.dark"
              title="Frosted"
              color="#fff"
              :frosted="true"
            />
          </div>
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-card title="Rounded" :rounded="true" />
&lt;tc-card title="Hover me" :hover="true" />
&lt;tc-card title="Frosted" :frosted="true" color="#fff" /></pre
        >
      </tc-code-example>
    </tc-card>

    <h1>Colors & Backgrounds</h1>
    <p>
      You can further customize your cards by setting different colors and
      backgrounds. You can either use tfbackground and tfcolor for pre-defined
      colors or set your own using the color and background attribute.
    </p>

    <tc-card :rounded="true" :shadow="false" :dark="$store.getters.dark">
      <tl-grid minWidth="150">
        <div>
          <h2>Dark + Gold</h2>
          <tc-card title="Golden" :dark="true" color="gold" />
        </div>
        <div>
          <h2>Primary + White</h2>
          <tc-card title="BlueWhite" tfbackground="primary" color="#fff" />
        </div>
        <div>
          <h2>Error + Purple</h2>
          <tc-card title="Purple" tfbackground="error" color="purple" />
        </div>
      </tl-grid>

      <tc-code-example title="Code">
        <pre>
&lt;tc-card title="Golden" :dark="true" color="gold" />
&lt;tc-card title="BlueWhite" tfbackground="primary" color="#fff" />
&lt;tc-card title="Purple" tfbackground="error" color="purple" /></pre
        >
      </tc-code-example>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TCCard from '@/tccomponents/component/card/TC-Card.vue';
import PortfolioCodeExample from '@/components/CodeExample.vue';
import TLGrid from '@/tccomponents/layout/grid/TL-Grid.vue';
import { TCComponent } from '@/models/TCComponent.model';
import TCImage from '@/tccomponents/component/image/TC-Image.vue';
import TCCodeExample from '@/components/TC-CodeExample.vue';

@Component({
  components: {
    'portfolio-code-example': PortfolioCodeExample,
    'tc-code-example': TCCodeExample,
    'tc-card': TCCard,
    'tl-grid': TLGrid,
    'tc-image': TCImage
  }
})
export default class TCDCard extends Vue {
  @Prop() component!: TCComponent;

  public src =
    'https://davidjrodger.files.wordpress.com/2013/06/travel-photo-arctic-circle-norway-misty-mountains-like-smoke-rising-from-forest-image-copyright-david-j-rodger.jpg';
  // public src: string = "https://gradientjoy.com/400x300?id=44";
}
</script>
<style lang="scss" scoped>
.tc-card__example {
  max-width: 350px;
}
</style>
