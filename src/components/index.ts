import { TCComponentApi } from '@/models/TCComponentApi.model';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';

const tccolors = 'primary, error, alarm, success';
const apiAutoBackground: TCComponentApi = {
  name: 'autoBackground',
  type: 'boolean',
  default: ' false',
  description:
    "Toggles automatically between dark and light whenever the element intersects with an element which has 'tc-dark-container' or 'tc-light-container' attribute in it"
};
const apiDark: TCComponentApi = {
  name: 'dark',
  type: 'boolean',
  description: 'Toggles darkmode on or off'
};
const apiFrosted: TCComponentApi = {
  name: 'frosted',
  type: 'boolean',
  description: 'Determines if the element should have a frosted appearance'
};
const apiColor: TCComponentApi = {
  name: 'color',
  type: 'string',
  description: 'Default font color'
};

const apiBackground: TCComponentApi = {
  name: 'background',
  type: 'string',
  description: 'Default background color'
};
const apiIcon: TCComponentApi = {
  name: 'icon',
  type: 'string',
  description: 'Icon to be displayed',
  parameters: "Timo's Icons"
};
const apiURLs: TCComponentApi[] = [
  {
    name: 'href',
    type: 'string',
    description: 'Hyperlink to open'
  },
  {
    name: 'to',
    type: 'Route ({name: string})',
    description: 'Route to navigate to'
  },
  {
    name: 'routeName',
    type: 'string',
    description: 'Routename to navigate to'
  },
  {
    name: '@click',
    type: 'function(event: MouseEvent)',
    description: 'Gets called whenever the user clicks on the element'
  }
];

const tcComponents: TCComponentGroup[] = [
  {
    group: 'Fundamentals',
    icon: 'heart',
    prefix: 'TF',
    components: [
      {
        name: 'Default Tags',
        icon: 'component',
        api: [], // TODO:
        slots: []
      },
      {
        name: 'Colors',
        icon: 'color-fan',
        api: [], // TODO:
        slots: []
      },
      {
        name: 'Icons',
        icon: 'heart',
        api: [], // TODO:
        slots: []
      },
      {
        name: 'Auto Background',
        icon: 'swap',
        api: [], // TODO:
        slots: []
      }
    ]
  },
  {
    group: 'Components',
    icon: 'component',
    prefix: 'TC',
    components: [
      {
        name: 'Input',
        icon: 'input',
        api: [
          apiIcon,
          apiFrosted,
          apiDark,
          {
            name: 'title',
            type: 'string',
            description: 'Sets a prestyled title on top of the input field'
          },
          {
            name: 'buttons',
            type: 'boolean',
            description: "Adds +/- Buttons (only for type='number')"
          },
          {
            name: 'width',
            type: 'string',
            description: 'Determines the width of tc-input',
            default: 'full',
            parameters: 'full, fit-content'
          },
          {
            name: 'placeholder',
            type: 'string',
            description:
              'Specifies a short hint that describes the expected value of an <tc-input> element'
          },
          {
            name: 'filePlaceholder',
            type: 'string',
            description:
              'Specifie a placeholder for your file upload input field',
            default: 'Choose File'
          },
          {
            name: 'type',
            type: 'string',
            description: 'Input type',
            default: 'text'
          },
          {
            name: 'value',
            type: 'any',
            description: 'Determines the value of your input field',
            default: 'false'
          },
          { name: 'v-model', type: 'any', description: '' },
          {
            name: '@input',
            type: 'function',
            description:
              'Is called whenever the user changes the content inside the input field'
          },
          {
            name: '@change',
            type: 'function',
            description:
              'Is called whenever the user has selected a file to upload'
          },
          {
            name: '@fileLoaded',
            type: 'function(value: string)',
            description: 'Is called whenever the selected file has been read'
          },
          {
            name: 'accept',
            type: 'string',
            description:
              "Specifies a filter for what file types the user can pick from the file input dialog box (only for type='file')"
          },
          {
            name: 'autocomplete',
            type: 'string',
            parameters: 'on, off',
            description:
              'Specifies whether an <tc-input> element should have autocomplete enabled'
          },
          {
            name: 'autofocus',
            type: 'boolean',
            description:
              'Specifies that an <tc-input> element should automatically get focus when the page loads'
          },
          {
            name: 'disabled',
            type: 'boolean',
            description:
              'Specifies that an <tc-input> element should be disabled'
          },
          {
            name: 'form',
            type: 'string',
            description: 'Specifies the form the <tc-input> element belongs to'
          },
          {
            name: 'max',
            type: 'number | date',
            description: 'Specifies the maximum value for an <tc-input> element'
          },
          {
            name: 'maxlength',
            type: 'number',
            description:
              'Specifies the maximum number of characters allowed in an <tc-input> element'
          },
          {
            name: 'min',
            type: 'number | date',
            description: 'Specifies a minimum value for an <tc-input> element'
          },
          {
            name: 'minlength',
            type: 'number',
            description:
              'Specifies the minimum number of characters required in an <tc-input> element'
          },
          {
            name: 'multiple',
            type: 'boolean',
            description:
              'Specifies that a user can enter more than one value in an <tc-input> element'
          },
          {
            name: 'pattern',
            type: 'string',
            description:
              "Specifies a regular expression that an <tc-input> element's value is checked against"
          },
          {
            name: 'readonly',
            type: 'boolean',
            description: 'Specifies that an input field is read-only'
          },
          {
            name: 'required',
            type: 'boolean',
            description:
              'Specifies that an input field must be filled out before submitting the form'
          },
          {
            name: 'step',
            type: 'number',
            default: '1',
            description:
              'Specifies the interval between legal numbers in an input field'
          }
        ],
        slots: []
      },
      {
        name: 'Card',
        icon: 'card',
        api: [
          {
            name: 'title',
            type: 'string',
            description: 'Set a pre-styled title to the card'
          },
          {
            description: 'Set a pre-styled subtitle to the card',
            name: 'subtitle',
            type: 'string'
          },
          {
            name: 'shadow',
            type: 'boolean',
            default: 'true',
            description: 'Determines if the card should have a base shadow'
          },
          {
            description: "Determines if the card's borders are rounded",
            name: 'rounded',
            type: 'boolean'
          },
          {
            description: 'Determines if a shadow should appear on hover',
            name: 'hover',
            type: 'boolean'
          },
          apiDark,
          apiFrosted,
          apiColor,
          apiBackground
        ],
        slots: [
          {
            name: 'header',
            description: 'TODO:'
          },
          {
            name: 'media',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Divider',
        icon: 'divider',
        api: [
          {
            name: 'name',
            type: 'String',
            description: 'Text to be displayed'
          },
          {
            name: 'position',
            type: 'String',
            description: 'Name/Icon Position',
            parameters: 'left, center, right',
            default: 'center'
          },
          apiIcon,
          apiColor,
          apiDark
        ],
        slots: []
      },
      {
        name: 'Button',
        icon: 'button',
        api: [
          {
            name: 'name',
            type: 'string',
            description: 'Title to be displayed'
          },
          ...apiURLs,
          apiIcon,
          {
            name: 'disabled',
            type: 'boolean',
            description: 'Determines if the button is disabled',
            default: 'false'
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Determines the style of the button',
            default: 'border',
            parameters: 'opaque, border, filled'
          },
          {
            name: 'tccolor',
            type: 'string',
            description: 'Determines the color of the button',
            default: 'primary',
            parameters: tccolors
          }
        ],
        slots: []
      },
      {
        name: 'Sidebar',
        icon: 'sidebar',
        children: [
          {
            name: 'sidebar-item',
            icon: 'heart',
            api: [
              { ...apiIcon },
              {
                name: 'title',
                type: 'string',
                description: 'Name to be displayed'
              },
              ...apiURLs
            ],
            slots: []
          }
        ],
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          },
          {
            name: 'footer',
            description: 'TODO:'
          },
          {
            name: 'header',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Checkbox',
        icon: 'checkbox',
        api: [
          {
            name: 'title',
            type: 'string',
            description: 'Sets a title next to the checkbox'
          },
          {
            name: 'position',
            type: 'string',
            description: '',
            parameters: 'left, right',
            default: 'left'
          },
          apiDark,
          {
            name: 'iconChecked',
            type: 'string',
            description: '',
            parameters: "Timo's Icons"
          },
          {
            name: 'iconUnchecked',
            type: 'string',
            description: '',
            parameters: "Timo's Icons"
          },
          {
            name: 'iconAnimation',
            type: 'string',
            description: '',
            parameters: 'step, spin, flip',
            default: 'step'
          },
          { ...apiColor, default: '#08f' },
          {
            name: 'value',
            type: 'boolean',
            description: 'Determines the state of the checkbox',
            default: 'false'
          },
          { name: 'v-model', type: 'boolean', description: '' },
          {
            name: '@input',
            type: 'function',
            description:
              'Is called whenever the user changes the state of the checkbox'
          }
        ],
        slots: []
      },
      {
        name: 'Link',
        icon: 'arrow-down-right',
        api: [...apiURLs],
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Modal',
        icon: 'modal',
        api: [
          apiDark,
          apiFrosted,
          {
            name: 'title',
            type: 'string',
            description: 'Set a pre-styled title to the modal'
          },
          {
            description: 'Set a pre-styled subtitle to the modal',
            name: 'subtitle',
            type: 'string'
          },
          {
            name: 'value',
            type: 'boolean',
            description: 'Determines the state of the modal',
            default: 'false'
          },
          { name: 'v-model', type: 'boolean', description: '' },
          {
            name: '@close',
            type: 'function',
            description: 'Is called whenever the user closes the modal'
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          },
          {
            name: 'header',
            description: 'TODO:'
          },
          { name: 'buttons', description: 'TODO:' }
        ]
      },
      {
        name: 'Tabbar',
        icon: 'tabbar',
        api: [apiDark, apiAutoBackground],
        children: [
          {
            name: 'tabbar-item',
            icon: 'heart',
            api: [
              { ...apiIcon, default: 'house' },
              {
                name: 'title',
                default: 'Home',
                type: 'string',
                description: 'Name to be displayed'
              },
              ...apiURLs
            ],
            slots: []
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Table',
        icon: 'table',
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Scroll Up',
        icon: 'chevron-up',
        api: [apiColor, apiBackground, apiIcon], // TODO:
        slots: []
      },
      {
        name: 'Image',
        icon: 'windows',
        api: [
          {
            name: 'src',
            description: 'Source to image, video, gif to be displayed',
            type: 'string'
          },
          {
            name: 'fallback',
            description:
              "Fallback source to different image, video, gif if src couldn't be resolved",
            type: 'string'
          }
        ],
        slots: []
      },
      {
        name: 'Switch',
        icon: 'toggle',
        api: [
          {
            name: 'value',
            type: 'any',
            description: 'Determines the state of your switch',
            default: 'false'
          },
          { name: 'v-model', type: 'boolean', description: '' },
          {
            name: 'tccolor',
            type: 'string',
            description: 'Determines the color of the button',
            default: 'primary',
            parameters: tccolors
          }
        ], // TODO:
        slots: []
      },
      {
        name: 'Spinner',
        icon: 'spinner',
        api: [
          {
            name: 'size',
            description: 'Determines the size of the spinner (in px)',
            type: 'number',
            default: 50
          },
          {
            name: 'variant',
            description: 'Determines the variant used',
            type: 'string',
            parameters:
              'bars, bars-breath, dots, dots-breath, dots-spin, dots-wave',
            default: 'bars'
          },
          apiDark
        ],
        slots: []
      },
      {
        name: 'Hero',
        icon: 'image',
        api: [
          {
            default: '200',
            name: 'height',
            type: 'number',
            description: 'Height of Hero Container'
          },
          {
            default: 'px',
            name: 'unit',
            type: 'string',
            description: 'Unit of height'
          },
          {
            default: 'true',
            name: 'hasFixedHeader',
            type: 'boolean',
            description: 'Determines if top should have a padding of 50px'
          },
          {
            name: 'background',
            type: 'string',
            description: 'Background color of Hero',
            default: 'transparent'
          }
        ],
        slots: [
          {
            name: 'background',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ] // TODO:
      },
      {
        name: 'Revealer',
        icon: 'cross',
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO: content to be revealed'
          }
        ]
      },
      {
        name: 'Progress',
        icon: 'bar-progress',
        api: [
          {
            name: 'percent',
            type: 'number',
            default: '0',
            description: 'Percentage to be displayed'
          },
          {
            name: 'type',
            type: 'string',
            default: 'bar',
            parameters: 'bar, ring',
            description: 'Progress Type'
          },
          { ...apiColor, default: '#08f' },
          {
            name: 'barHeight',
            type: 'number',
            default: '4',
            description: 'Determines the height of the progress bar'
          },
          {
            name: 'ringSize',
            type: 'number',
            default: '70',
            description: 'Determines the size of the progress ring'
          },
          {
            name: 'ringWidth',
            type: 'number',
            default: '8',
            description: 'Determines the width of the ring of the progress ring'
          }
        ],
        slots: []
      },
      {
        name: 'Quote',
        icon: 'quote-right',
        api: [
          {
            name: 'title',
            type: 'String',
            description: 'Sets a prestyled title'
          },
          apiDark
        ],
        slots: [
          {
            name: 'default',
            description:
              'This slot is used, to place the quote you want to display, it can be any html element or tc-component'
          },
          {
            name: 'header',
            description:
              'You can use this slot, to style your own header. Property title will then be overwritten'
          }
        ]
      },
      {
        name: 'Header',
        icon: 'assets/header-alt.png',
        api: [
          {
            name: 'title',
            type: 'string',
            description: 'Sets a prestyled title'
          },
          apiDark,
          {
            name: 'variant',
            type: 'string',
            description: 'Determines the variant used for TC-Header',
            parameters: 'fixed, floating, sticky',
            default: 'fixed'
          },
          {
            name: 'top',
            type: 'number',
            description: 'Determines the position of TC-Header',
            default: '0 (if variant=floating +40)'
          },
          {
            name: 'backTo',
            type: 'any',
            description: 'Sets the destination for a prestyled back button'
          },
          {
            name: 'backHref',
            type: 'string',
            description: 'Sets the destination for a prestyled back button'
          },
          {
            name: 'backName',
            type: 'string',
            default: 'back',
            description:
              'Sets the title for a prestyled back button (only visible if backTo or backHref is set)'
          },
          {
            name: '@click',
            type: 'function',
            description: 'Gets called whenever a user clicks the back button'
          }
        ],
        slots: [
          {
            name: 'title',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Headline',
        icon: 'bar',
        api: [
          {
            name: 'title',
            type: 'string',
            description: 'Sets a prestyled title'
          },
          apiIcon,
          apiDark
        ],
        slots: [
          {
            name: 'title',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Segments',
        icon: 'segment',
        api: [apiDark], // TODO:
        slots: [
          {
            name: 'TODO:',
            description: 'TODO:'
          }
        ] // TODO:
      },
      {
        name: 'Slider',
        icon: 'slider',
        api: [
          { default: 0, name: 'min', type: 'number', description: 'Min value' },
          {
            default: 100,
            name: 'max',
            type: 'number',
            description: 'Max value'
          },
          {
            default: 50,
            name: 'value',
            type: 'number',
            description: 'Value of slider (between min and max)'
          },
          { name: 'v-model', type: 'number', description: '' },
          {
            ...apiIcon,
            name: 'icon_start',
            description: 'Icon to be displayed at the start of the slider'
          },
          {
            ...apiIcon,
            name: 'icon_end',
            description: 'Icon to be displayed at the end of the slider'
          }
        ], // TODO:
        slots: []
      },
      {
        name: 'Navbar',
        icon: 'dot',
        api: [apiDark, apiAutoBackground],
        children: [
          {
            name: 'tc-navbar-item',
            icon: 'Navbar',
            api: [
              {
                name: 'name',
                type: 'string',
                description: 'Name to be displayed'
              },
              apiIcon,
              ...apiURLs
            ],
            slots: []
          }
        ],
        slots: [
          {
            name: 'logo',
            description: 'TODO:'
          },
          {
            name: 'actions',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Select',
        icon: 'list',
        api: [
          { name: 'title', type: 'string', description: '' },
          {
            default: 'list',
            name: 'icon',
            type: 'string',
            parameters: "Timo's Icons",
            description: ''
          },
          { default: false, name: 'dark', type: 'boolean', description: '' },
          apiFrosted,
          apiDark,
          {
            default: false,
            name: 'multiple',
            type: 'boolean',
            description: ''
          },
          {
            default: 'Select one',
            name: 'placeholder',
            type: 'string',
            description: ''
          },
          {
            name: 'value',
            type: '(string | number | boolean) | (string | number | boolean)[]',
            description: ''
          },
          {
            name: 'values',
            type: '(string | number | boolean)[]',
            description: ''
          }
        ],
        slots: []
      },
      {
        name: 'Tooltip',
        icon: 'tooltip',
        api: [
          {
            name: 'position',
            default: 'top',
            type: 'string',
            parameters: 'top, bottom, left, right',
            description: 'Position of tooltip'
          },
          {
            name: 'tooltip',
            default: '',
            type: 'string',
            description: 'Tooltip to be displayed on hover'
          }
        ],
        slots: [{ name: 'default', description: 'TODO:' }]
      },
      {
        name: 'List',
        icon: 'list-bullet',
        api: [
          apiDark,
          apiFrosted,
          apiColor,
          {
            name: 'title',
            type: 'string',
            description: 'Adds a prestyled title on top of the list'
          }
        ],
        children: [
          {
            name: 'list-item',
            icon: 'list',
            api: [
              {
                name: 'title',
                type: 'string',
                description: 'Add a title to the list'
              },
              ...apiURLs,
              apiIcon,
              {
                name: 'v-model',
                type: 'boolean',
                description: 'variable to be used for the switch'
              },
              {
                name: 'description',
                type: 'string',
                description: 'Small text at the end of the item'
              }
            ],
            slots: []
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Steps',
        icon: 'dots',
        api: [], // TODO:
        slots: [] // TODO:
      },
      {
        name: 'Badge',
        icon: 'notification',
        api: [
          {
            name: 'value',
            type: 'string | number',
            description: 'Value to be displayed'
          },
          {
            name: 'color',
            type: 'HEX, rgb, tccolor',
            description: 'Determines the background color of the badge'
          },
          {
            name: 'max',
            type: 'number',
            description:
              'Determines the max number to be displayed, if exceeded %max%+ will be displayed'
          },
          {
            name: 'showEmpty',
            type: 'boolean',
            default: false,
            description:
              'Determines if the badge should be displayed if no value is set'
          },
          {
            name: 'position',
            type: 'string',
            parameters: 'corner, behind, inside',
            default: 'corner',
            description: 'Determines the position of the badge on the element'
          }
        ], // TODO:
        slots: [
          {
            name: 'default',
            description: 'Inner element, the badge is applied to'
          }
        ] // TODO:
      },
      {
        name: 'Avatar',
        icon: 'user-circle',
        api: [
          {
            name: 'background',
            type: 'string',
            description:
              "Determines the background of your avatar, if it's a transparent png",
            default: 'none'
          },
          {
            name: 'src',
            type: 'string',
            description: 'Source to image, video, gif to be displayed'
          },
          {
            name: 'size',
            type: 'string',
            description: 'Determines the size of your avatar',
            parameters: 'large, medium, small, tiny',
            default: 'small'
          },
          {
            name: 'border',
            type: 'string',
            description: 'Determines the border-style of your avatar',
            parameters: 'rounded, circle, square',
            default: 'circle'
          }
        ], // TODO:
        slots: [] // TODO:
      },
      {
        name: 'Textarea',
        icon: 'pencil',
        api: [
          apiDark,
          apiFrosted,
          apiColor,
          { name: 'value', type: 'string', description: '' },
          { name: 'title', type: 'string', description: '' },
          { name: 'tooltip', type: 'string', description: '' },

          { name: 'autofocus', type: 'boolean', description: '' },
          { name: 'cols', type: 'number', description: '' },
          { name: 'dirname', type: 'string', description: '' },
          { name: 'disabled', type: 'boolean', description: '' },
          { name: 'form', type: 'string', description: '' },
          { name: 'maxlength', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          {
            name: 'placeholder',
            type: 'string',
            description: '',
            default: 'Enter text'
          },
          { name: 'readonly', type: 'boolean', description: '' },
          { name: 'required', type: 'boolean', description: '' },
          { name: 'rows', type: 'string', description: '', default: 10 },
          { name: 'wrap', type: 'string', description: '' }
        ], // TODO:
        slots: []
      }
    ].sort((a, b) => a.name.localeCompare(b.name))
  },
  {
    group: 'Layout',
    icon: 'chart-empty',
    prefix: 'TL',
    components: [
      {
        name: 'Modal',
        icon: 'modal',
        api: [], // TODO:
        slots: [] // TODO: also assets
      },
      {
        name: 'Grid',
        icon: 'plus',
        api: [
          {
            default: '300',
            name: 'minWidth',
            type: 'number',
            description:
              'Determines the minimal with a continue can have inside the grid'
          },
          {
            default: '30',
            name: 'gap',
            type: 'number',
            description:
              'Determines the distance between each element inside the grid'
          },
          {
            default: 'auto-fit',
            name: 'arrangement',
            type: 'string',
            description:
              'The difference between auto-fit and auto-fill can be seen in the example above',
            parameters: 'auto-fit, auto-fill'
          }
        ], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Flow',
        icon: 'map',
        api: [
          {
            name: 'vertical',
            default: 'center',
            type: 'string',
            parameters: 'center, start, end',
            description: 'Determines the vertical alignment'
          },
          {
            name: 'horizontal',
            default: 'center',
            type: 'string',
            parameters: 'center, space-between, space-around, start, end',
            description: 'Determines the horizontal alignment'
          },
          {
            name: 'flow',
            default: 'row',
            type: 'string',
            parameters: 'row, column',
            description: 'Determines the flow of your container'
          }
        ], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Sidebar',
        icon: 'sidebar-alt',
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          },
          {
            name: 'sidebar-header',
            description: 'TODO:'
          },
          {
            name: 'sidebar-content',
            description: 'TODO:'
          },
          {
            name: 'sidebar-footer',
            description: 'TODO:'
          }
        ] // TODO:
      }
    ].sort((a, b) => a.name.localeCompare(b.name))
  }
];

export default tcComponents;
