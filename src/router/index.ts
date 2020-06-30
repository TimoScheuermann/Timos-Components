import TCComponentsDetails from '@/views/subpages/TCComponentsDetails.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const prefix = "Timo's Components | ";

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/subpages/TCComponentsHome.vue'),
      meta: {
        title: prefix + 'Home'
      }
    },
    {
      path: '/designer',
      name: 'designer',
      component: () => import('@/views/subpages/TCComponentsDesigner.vue'),
      meta: {
        title: prefix + 'Designer'
      }
    },
    {
      path: '/howto',
      name: 'howto',
      component: () => import('@/views/subpages/TCComponentsHowTo.vue'),
      meta: {
        title: prefix + 'Getting Started'
      }
    },

    {
      path: '/demo',
      name: 'demo',
      beforeEnter(): void {
        window.location.replace('https://timos.design');
      }
    },
    {
      path: '/fundamental',
      redirect: { name: 'home' },
      component: TCComponentsDetails,
      children: [
        {
          path: 'Default Tags',
          name: 'TF-default-tags',
          component: () => import('@/views/fundamental/TFD-DefaultTags.vue'),
          meta: { title: prefix + 'TC Default Tags' }
        },
        {
          path: 'Colors',
          name: 'TF-colors',
          component: () => import('@/views/fundamental/TFD-Colors.vue'),
          meta: { title: prefix + 'TC Colors' }
        },
        {
          path: 'Icons',
          name: 'TF-icons',
          beforeEnter(): void {
            window.location.replace('https://icons.timos.design');
          }
        },
        {
          path: 'Auto Background',
          name: 'TF-auto-background',
          component: () => import('@/views/fundamental/TFD-AutoBackground.vue'),
          meta: { title: prefix + 'TC Auto Background' }
        },
        {
          path: '',
          redirect: { name: 'home' }
        },
        {
          path: '*',
          redirect: { name: 'home' }
        }
        // {
        //   path: '*',
        //   component: () => import('@/views/subpages/TCComponentsNotFound.vue'),
        //   meta: {
        //     title: prefix + 'Not Found'
        //   }
        // }
      ]
    },
    {
      path: '/component',
      redirect: { name: 'home' },
      component: TCComponentsDetails,
      children: [
        {
          path: 'Badge',
          name: 'TC-badge',
          component: () => import('@/views/component/TCD-Badge.vue'),
          meta: { title: prefix + 'TC Badge' }
        },
        {
          path: 'Button',
          name: 'TC-button',
          component: () => import('@/views/component/TCD-Button.vue'),
          meta: { title: prefix + 'TC Button' }
        },
        {
          path: 'Card',
          name: 'TC-card',
          component: () => import('@/views/component/TCD-Card.vue'),
          meta: { title: prefix + 'TC Card' }
        },
        {
          path: 'Checkbox',
          name: 'TC-checkbox',
          component: () => import('@/views/component/TCD-Checkbox.vue'),
          meta: { title: prefix + 'TC Checkbox' }
        },
        {
          path: 'Divider',
          name: 'TC-divider',
          component: () => import('@/views/component/TCD-Divider.vue'),
          meta: { title: prefix + 'TC Divider' }
        },
        {
          path: 'Header',
          name: 'TC-header',
          component: () => import('@/views/component/TCD-Header.vue'),
          meta: { title: prefix + 'TC Header' }
        },
        {
          path: 'Headline',
          name: 'TC-headline',
          component: () => import('@/views/component/TCD-Headline.vue'),
          meta: { title: prefix + 'TC Headline' }
        },
        {
          path: 'Hero',
          name: 'TC-hero',
          component: () => import('@/views/component/TCD-Hero.vue'),
          meta: { title: prefix + 'TC Hero' }
        },
        {
          path: 'Image',
          name: 'TC-image',
          component: () => import('@/views/component/TCD-Image.vue'),
          meta: { title: prefix + 'TC Image' }
        },
        {
          path: 'Input',
          name: 'TC-input',
          component: () => import('@/views/component/TCD-Input.vue'),
          meta: { title: prefix + 'TC Input' }
        },
        {
          path: 'Link',
          name: 'TC-link',
          component: () => import('@/views/component/TCD-Link.vue'),
          meta: { title: prefix + 'TC Link' }
        },
        {
          path: 'List',
          name: 'TC-list',
          component: () => import('@/views/component/TCD-List.vue'),
          meta: { title: prefix + 'TC List' }
        },
        {
          path: 'Modal',
          name: 'TC-modal',
          component: () => import('@/views/component/TCD-Modal.vue'),
          meta: { title: prefix + 'TC Modal' }
        },
        {
          path: 'Navbar',
          name: 'TC-navbar',
          component: () => import('@/views/component/TCD-Navbar.vue'),
          meta: { title: prefix + 'TC Navbar' }
        },
        {
          path: 'Progress',
          name: 'TC-progress',
          component: () => import('@/views/component/TCD-Progress.vue'),
          meta: { title: prefix + 'TC Progress' }
        },
        {
          path: 'Quote',
          name: 'TC-quote',
          component: () => import('@/views/component/TCD-Quote.vue'),
          meta: { title: prefix + 'TC Quote' }
        },
        {
          path: 'Revealer',
          name: 'TC-revealer',
          component: () => import('@/views/component/TCD-Revealer.vue'),
          meta: { title: prefix + 'TC Revealer' }
        },
        {
          path: 'Scroll Up',
          name: 'TC-scroll-up',
          component: () => import('@/views/component/TCD-ScrollUp.vue'),
          meta: { title: prefix + 'TC Scroll Up' }
        },
        {
          path: 'Segments',
          name: 'TC-segments',
          component: () => import('@/views/component/TCD-Segments.vue'),
          meta: { title: prefix + 'TC Segments' }
        },
        {
          path: 'Select',
          name: 'TC-select',
          component: () => import('@/views/component/TCD-Select.vue'),
          meta: { title: prefix + 'TC Select' }
        },
        {
          path: 'Sidebar',
          name: 'TC-sidebar',
          component: () => import('@/views/component/TCD-Sidebar.vue'),
          meta: { title: prefix + 'TC Sidebar' }
        },
        {
          path: 'Slider',
          name: 'TC-slider',
          component: () => import('@/views/component/TCD-Slider.vue'),
          meta: { title: prefix + 'TC Slider' }
        },
        {
          path: 'Spinner',
          name: 'TC-spinner',
          component: () => import('@/views/component/TCD-Spinner.vue'),
          meta: { title: prefix + 'TC Spinner' }
        },
        {
          path: 'Steps',
          name: 'TC-steps',
          component: () => import('@/views/component/TCD-Steps.vue'),
          meta: { title: prefix + 'TC Steps' }
        },
        {
          path: 'Switch',
          name: 'TC-switch',
          component: () => import('@/views/component/TCD-Switch.vue'),
          meta: { title: prefix + 'TC Switch' }
        },
        {
          path: 'Tabbar',
          name: 'TC-tabbar',
          component: () => import('@/views/component/TCD-Tabbar.vue'),
          meta: { title: prefix + 'TC Tabbar' }
        },
        {
          path: 'Table',
          name: 'TC-table',
          component: () => import('@/views/component/TCD-Table.vue'),
          meta: { title: prefix + 'TC Table' }
        },
        {
          path: 'Tooltip',
          name: 'TC-tooltip',
          component: () => import('@/views/component/TCD-Tooltip.vue'),
          meta: { title: prefix + 'TC Tooltip' }
        },
        {
          path: '',
          redirect: { name: 'home' }
        },
        {
          path: '*',
          component: () => import('@/views/subpages/TCComponentsNotFound.vue'),
          meta: {
            title: prefix + 'Not Found'
          }
        }
      ]
    },
    {
      path: '/layout',
      redirect: { name: 'home' },
      component: TCComponentsDetails,
      children: [
        {
          path: 'Grid',
          name: 'TL-grid',
          component: () => import('@/views/layout/TLD-Grid.vue'),
          meta: { title: prefix + 'TL Grid' }
        },
        {
          path: 'Sidebar',
          name: 'TL-sidebar',
          component: () => import('@/views/layout/TLD-Sidebar.vue'),
          meta: { title: prefix + 'TL Sidebar' }
        },
        {
          path: '',
          redirect: { name: 'home' }
        },
        {
          path: '*',
          component: () => import('@/views/subpages/TCComponentsNotFound.vue'),
          meta: {
            title: prefix + 'Not Found'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
});

export default router;
