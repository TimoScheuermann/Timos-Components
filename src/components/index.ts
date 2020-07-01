import { TCComponentApi } from '@/models/TCComponentApi.model';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';

const tccolors = 'primary, error, alarm, success';

const tcComponentApi: TCComponentApi[] = [
  { name: 'dark', type: 'boolean', description: 'Toggles darkmode on or off' },
  { name: 'color', type: 'string', description: 'Default font color' },
  {
    name: 'background',
    type: 'string',
    description: 'Default background color'
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
          {
            name: 'icon',
            type: 'string',
            description: 'Adds an Icon in front of the input field',
            parameters: "Timo's Icons"
          },
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
            name: 'frosted',
            type: 'boolean',
            description:
              'Determines if the card should have a frosted appearance'
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
          ...tcComponentApi
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
            name: 'icon',
            type: 'String',
            description: 'Icon to be displayed',
            parameters: "Timo's Icons"
          },
          {
            name: 'position',
            type: 'String',
            description: 'Name/Icon Position',
            parameters: 'left, center, right',
            default: 'center'
          },
          {
            name: 'color',
            type: 'String',
            description: 'Determines the color of TC-Divider'
          },
          {
            name: 'dark',
            type: 'boolean',
            description: 'Toggles darkmode on or off'
          }
        ],
        slots: []
      },
      {
        name: 'Button',
        icon: 'button',
        api: [
          { name: 'to', type: 'object', description: 'Route to navigate to' },
          { name: 'href', type: 'string', description: 'Href to open' },
          {
            name: 'name',
            type: 'string',
            description: 'Title to be displayed'
          },
          {
            name: '@click',
            type: 'function',
            description: 'Is triggered, when ever a button is clicked'
          },
          {
            name: 'icon',
            type: 'string',
            description: 'Icon to be displayed',
            parameters: "Timo's Icons"
          },
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
          {
            name: 'dark',
            type: 'boolean',
            description: 'Toggles darkmode on or off'
          },
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
          {
            name: 'color',
            type: 'string',
            description: 'Determines the color of the checkmark',
            default: '#0088ff'
          },
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
        api: [
          {
            name: 'to',
            type: 'any',
            description: ''
          },
          { name: 'href', type: 'string', description: '' },
          { name: '@click', type: 'function', description: '' }
        ],
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
            name: '@input',
            type: 'function',
            description:
              'Is called whenever the user changes the state of the modal'
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
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ] // TODO:
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
        api: [
          {
            name: 'src',
            description: 'Source to image, video, gif to be displayed',
            type: 'string'
          }
        ], // TODO:
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
            description: 'Determines the size of the spinner',
            type: 'number',
            default: 30
          },
          {
            name: 'dark',
            description: 'Toggles darkmode on or off',
            type: 'boolean',
            default: false
          }
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
          {
            name: 'color',
            type: 'string',
            description: 'Determines the color of the bar/ring',
            default: '#0088ff'
          },
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
          }
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
            description: 'Get called whenever a user clicks the back button'
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
          {
            name: 'icon',
            type: 'string',
            description:
              'Inserts a Icon in front of Headline title (only visible with default title)',
            parameters: "Timo's Icons"
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
        name: 'Segments',
        icon: 'segment',
        api: [], // TODO:
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
        api: [], // TODO:
        slots: []
      },
      {
        name: 'Navbar',
        icon: 'dot',
        api: [
          {
            name: '[TC-Navbar-Item]: to',
            type: 'string | object',
            description: 'Location, a user is forwarded to'
          },
          {
            name: '[TC-Navbar-Item]: name',
            type: 'string',
            description: 'Name to be displayed'
          },
          {
            name: '[TC-Navbar-Item]: icon',
            type: 'string',
            parameters: "Timo's Icons",
            description: 'Custom Icon to be displayed'
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
        api: [], // TODO:
        slots: [{ name: 'default', description: 'TODO:' }]
      },
      {
        name: 'List',
        icon: 'list-bullet',
        api: [], // TODO:
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
        api: [], // TODO:
        slots: [] // TODO:
      }
    ].sort((a, b) => a.name.localeCompare(b.name))
  },
  {
    group: 'Layout',
    icon: 'chart-empty',
    prefix: 'TL',
    components: [
      {
        name: 'Grid',
        icon: 'plus',
        api: [], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO:'
          }
        ]
      },
      {
        name: 'Sidebar',
        icon: 'assets/sidebar-alt.png',
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
    ]
  }
];

export default tcComponents;
