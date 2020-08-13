<div style="text-align:center">

![](https://components.timos.design/assets/banner.svg)

<div style="font-size: 50px; font-weight: bold">Components</div>
</div>

> A Vue Component Library of high-quality ready to use components that will help you speed up your development workflow.

## Demos

- [Timos Icons (Icon Library)](https://icons.timos.design)
- [TC Components (Docs)](https://components.timos.design)
- [Timos Newsroom](https://newsroom.timos.design)
- [Gastro Assistant](https://gastro-assistant.com)
- [Sport Kamasutra](https://sk.timos.design/)
- [Investing Collectors](https://wip-investing-collectors.netlify.app/)

## Installation

TC Components is a framework of UI components based on Vuejs which means
that vuejs has to be in your project so that TC Components can do the
magic.

### NPM

You can install TC Components through npm with the command:

```
npm i tccomponents_vue
// or
yarn add tccomponents_vue
```

## Import in your project

To use TC Components in your vuejs project, add this code:

```js
// main.ts or main.js
import Vue from 'vue';

import * as TCComponents from 'tccomponents_vue';
import 'tccomponents_vue/lib/tccomponents_vue.css';

for (const component in TCComponents) {
  Vue.component(component, TCComponents[component]);
}
```

**If you only want specific components do this:**

```js
// main.ts or main.js
import Vue from 'vue';

import 'tccomponents_vue/lib/tccomponents_vue.css';
import { tcButton, tcTable, tcAvatar } from 'tccomponents_vue';

Vue.use(tcButton);
Vue.use(tcTable);
Vue.use(tcavatar);
```

## Component Designer

TC Component features a designer to easily create the mockup for any component. Specifying attributes is as simple as filling out a form.

[Component Designer](https://components.timos.design/designer)
