# ![](https://components.timos.design/assets/banner.svg) Components

> A Vue Component Library of high-quality ready to use components that will help you speed up your development workflow.

## Demos

- [FitnessHub](https://fitnesshub.app)
- [Timos Icons (Icon Library)](https://icons.timos.design)
- [TC Components (Docs)](https://components.timos.design)
- [Timos Newsroom](https://newsroom.timos.design)
- [Gastro Assistant](https://gastro-assistant.com)
- [Sport Kamasutra](https://sk.timos.design/)
- [Investing Collectors](https://wip-investing-collectors.netlify.app/)

## Available Components

[Avatar](https://components.timos.design/component/Avatar),
[Badge](https://components.timos.design/component/Badge),
[Button](https://components.timos.design/component/Button),
[Card](https://components.timos.design/component/Card),
[Checkbox](https://components.timos.design/component/Checkbox),
[Divider](https://components.timos.design/component/Divider),
[Header](https://components.timos.design/component/Header),
[Headline](https://components.timos.design/component/Headline),
[Hero](https://components.timos.design/component/Hero),
[Image](https://components.timos.design/component/Image),
[Input](https://components.timos.design/component/Input),
[Link](https://components.timos.design/component/Link),
[List](https://components.timos.design/component/List),
[Modal](https://components.timos.design/component/Modal),
[Navbar](https://components.timos.design/component/Navbar),
[Progress](https://components.timos.design/component/Progress),
[Quote](https://components.timos.design/component/Quote),
[Revealer](https://components.timos.design/component/Revealer),
[Scroll Up](https://components.timos.design/component/Scroll%20Up),
[Segments](https://components.timos.design/component/Segments),
[Select](https://components.timos.design/component/Select),
[Slider](https://components.timos.design/component/Slider),
[Spinner](https://components.timos.design/component/Spinner),
[Steps](https://components.timos.design/component/Steps),
[Switch](https://components.timos.design/component/Switch),
[Tabbar](https://components.timos.design/component/Tabbar),
[Table](https://components.timos.design/component/Table),
[Textarea](https://components.timos.design/component/Textarea),
[Tooltip](https://components.timos.design/component/Tooltip)

## Layouts

[Flow](https://components.timos.design/layout/Flow),
[Grid](https://components.timos.design/layout/Grid),
[Sidebar](https://components.timos.design/layout/Sidebar),
[Modal](https://components.timos.design/layout/Modal)

## Fundamentals

[Default Tags](https://components.timos.design/fundamental/Default%20Tags),
[Colors](https://components.timos.design/fundamental/Colors),
[Icons](https://components.timos.design/fundamental/Icons),
[Auto Background](https://components.timos.design/fundamental/Auto%20Background),

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

Vue.component('tc-button', tcButton);
Vue.component('tc-table', tcTable);
Vue.component('tc-avatar', tcAvatar);
```

## Component Designer

TC Component features a designer to easily create the mockup for any component. Specifying attributes is as simple as filling out a form.

[Component Designer](https://components.timos.design/designer)
