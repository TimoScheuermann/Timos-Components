import { TCComponentApi } from '@/models/TCComponentApi.model';
import { TCComponentGroup } from '@/models/TCComponentGroup.model';
import availableColors from '@/tccomponents/TFColors';

const TfColors = Object.keys(availableColors);
const apiBoolean: TCComponentApi = {
  name: '',
  description: '',
  parameters: [true, false],
  type: 'boolean',
  default: false
};
const apiAutoBackground: TCComponentApi = {
  ...apiBoolean,
  name: 'autoBackground',
  description:
    "Toggles automatically between dark and light whenever the element intersects with an element which has 'tc-dark-container' or 'tc-light-container' attribute in it"
};
const apiDark: TCComponentApi = {
  ...apiBoolean,
  name: 'dark',
  description: 'Toggles darkmode on or off'
};
const apiFrosted: TCComponentApi = {
  ...apiBoolean,
  name: 'frosted',
  description: 'Determines if the element should have a frosted appearance'
};
const apiFullColor: TCComponentApi[] = [
  {
    name: 'tfcolor',
    type: 'string',
    parameters: TfColors,
    default: 'primary',
    description:
      'Determine the color using default TFColor like primary, error, succes, alarm'
  },
  {
    name: 'color',
    type: 'string',
    description: 'Determine the color using rgba, hex, hsl and more'
  }
];
const apiFullBackground: TCComponentApi[] = [
  {
    name: 'tfbackground',
    type: 'string',
    parameters: TfColors,
    default: 'paragraph',
    description:
      'Determine the background using default TFColor like paragraph, paragraphDark, background, backgroundDark'
  },
  {
    name: 'background',
    type: 'string',
    description:
      'Determine the background using rgba, hex, hsl and more. Note!: For transparency on frosted elemets use hex only with 6 chars.'
  }
];

const apiIcon: TCComponentApi = {
  name: 'icon',
  type: 'string',
  description: 'Icon to be displayed',
  parameters: ["Timo's Icons"]
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
            ...apiBoolean,
            name: 'buttons',
            description: "Adds +/- Buttons (only for type='number')"
          },
          {
            name: 'width',
            type: 'string',
            description: 'Determines the width of tc-input',
            default: 'full',
            parameters: ['full', 'fit-content']
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
            parameters: ['on', 'off'],
            description:
              'Specifies whether an <tc-input> element should have autocomplete enabled'
          },
          {
            ...apiBoolean,
            name: 'autofocus',
            description:
              'Specifies that an <tc-input> element should automatically get focus when the page loads'
          },
          {
            ...apiBoolean,
            name: 'disabled',
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
            ...apiBoolean,
            name: 'multiple',
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
            ...apiBoolean,
            name: 'readonly',
            description: 'Specifies that an input field is read-only'
          },
          {
            ...apiBoolean,
            name: 'required',
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
            ...apiBoolean,
            default: true,
            name: 'shadow',
            description: 'Determines if the card should have a base shadow'
          },
          {
            ...apiBoolean,
            name: 'rounded',
            description: "Determines if the card's borders are rounded"
          },
          {
            ...apiBoolean,
            type: 'boolean',
            description: 'Determines if a shadow should appear on hover'
          },
          apiDark,
          apiFrosted,
          ...apiFullColor,
          ...apiFullBackground
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
            parameters: ['left', 'center', 'right'],
            default: 'center'
          },
          apiIcon,
          ...apiFullColor,
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
          apiIcon,
          {
            name: 'iconPosition',
            type: 'string',
            parameters: ['left', 'right'],
            default: 'left',
            description: 'Determine the position of the icon'
          },
          {
            ...apiBoolean,
            name: 'disabled',
            description: 'Determines if the button is disabled'
          },
          {
            name: 'variant',
            type: 'string',
            description: 'Determines the style of the button',
            default: 'border',
            parameters: ['opaque', 'border', 'filled']
          },
          ...apiFullColor,
          ...apiFullBackground,
          ...apiURLs
        ],
        slots: []
      },
      // {
      //   name: 'Sidebar',
      //   icon: 'sidebar',
      //   children: [
      //     {
      //       name: 'sidebar-item',
      //       icon: 'heart',
      //       api: [
      //         { ...apiIcon },
      //         {
      //           name: 'title',
      //           type: 'string',
      //           description: 'Name to be displayed'
      //         },
      //         ...apiURLs
      //       ],
      //       slots: []
      //     }
      //   ],
      //   api: [], // TODO:
      //   slots: [
      //     {
      //       name: 'default',
      //       description: 'TODO:'
      //     },
      //     {
      //       name: 'footer',
      //       description: 'TODO:'
      //     },
      //     {
      //       name: 'header',
      //       description: 'TODO:'
      //     }
      //   ]
      // },
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
            parameters: ['left', 'right'],
            default: 'left'
          },
          apiDark,
          {
            name: 'iconChecked',
            type: 'string',
            description: '',
            parameters: ["Timo's Icons"]
          },
          {
            name: 'iconUnchecked',
            type: 'string',
            description: '',
            parameters: ["Timo's Icons"]
          },
          {
            name: 'iconAnimation',
            type: 'string',
            description: '',
            parameters: ['step', 'spin', 'flip'],
            default: 'step'
          },
          ...apiFullColor,
          ...apiFullBackground,
          {
            ...apiBoolean,
            name: 'value',
            description: 'Determines the state of the checkbox'
          },
          { ...apiBoolean, name: 'v-model', description: '' },
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
            ...apiBoolean,
            name: 'value',
            description: 'Determines the state of the modal'
          },
          {
            ...apiBoolean,
            name: 'closable',
            default: true,
            description: 'Determines if the user can close the modal'
          },
          { ...apiBoolean, name: 'v-model', description: '' },
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
        api: [
          apiDark,
          apiAutoBackground,
          ...apiFullBackground,
          ...apiFullColor
        ],
        children: [
          {
            name: 'tabbar-item',
            icon: 'heart',
            api: [
              { ...apiIcon },
              {
                name: 'title',
                type: 'string',
                description: 'Name to be displayed'
              },
              ...apiURLs,
              ...apiFullColor
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
        api: [
          {
            ...apiBoolean,
            name: 'selectable',
            description: ''
          },
          { ...apiBoolean, name: 'multiSelect', description: '' },
          { ...apiBoolean, name: 'striped', description: '' },
          { ...apiBoolean, name: 'border', description: '' },
          {
            name: 'v-model',
            type: 'object | object[]',
            description:
              'If selectable is set to true, the table will emit the current selection'
          },
          {
            name: '@sort',
            type: '{attribute: string, direction: number}',
            description:
              'If any tc-th element has the property attribut set, the current sort attribute and direction will be outputed with given format'
          },
          apiDark
        ], // TODO:
        slots: [
          {
            name: 'head',
            description: ''
          },
          {
            name: 'search',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ],
        children: [
          {
            name: 'tr',
            icon: 'line',
            api: [
              {
                name: 'data',
                type: 'object',
                description:
                  'Determines the data to be emitted by the table if selectable is set to true'
              },
              ...apiURLs,
              ...apiFullBackground
            ],
            slots: [{ name: 'expander', description: '' }]
          },
          {
            name: 'th',
            icon: 'code',
            api: [
              {
                name: 'attribute',
                type: 'string',
                description:
                  'You can specify with attribute is related to this column, to sort the table'
              }
            ],
            slots: []
          },
          {
            name: 'td',
            icon: 'pause',
            api: [...apiFullColor],
            slots: [
              {
                name: 'default',
                description: ''
              }
            ]
          },
          {
            name: 'Table Search',
            icon: 'lens',
            api: [
              {
                default: 'lens',
                name: 'icon',
                type: 'string',
                description: 'Icon to be displayed in front of the search field'
              },
              {
                default: 'Search',
                name: 'placeholder',
                type: 'string',
                description: 'Placeholder if no query is set'
              },
              {
                name: 'value',
                type: 'string',
                description: 'Value inside the search field'
              },
              { name: 'v-model', type: 'string', description: '' }
            ],
            slots: []
          }
        ]
      },
      {
        name: 'Scroll Up',
        icon: 'chevron-up',
        api: [
          {
            name: 'variant',
            type: 'string',
            parameters: ['filled', 'border'],
            default: 'border',
            description: 'Determines the style of the element'
          },
          {
            name: 'size',
            type: 'number',
            default: '45 (px)',
            description: 'Determines the size of the element'
          },
          ...apiFullColor,
          ...apiFullBackground,
          apiIcon
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
            ...apiBoolean,
            name: 'value',
            description: 'Determines the state of your switch'
          },
          { ...apiBoolean, name: 'v-model', description: '' },
          apiDark,
          ...apiFullColor
        ],
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
            parameters: [
              'bars',
              'bars-breath',
              'dots',
              'dots-breath',
              'dots-spin',
              'dots-wave'
            ],
            default: 'bars'
          },
          apiDark,
          ...apiFullColor
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
            ...apiBoolean,
            default: true,
            name: 'hasFixedHeader',
            description: 'Determines if top should have a padding of 50px'
          },
          ...apiFullColor,
          ...apiFullBackground,
          {
            name: 'gradient',
            type: 'string',
            description: 'Insert a css gradient to set as background'
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
        api: [
          {
            name: 'title',
            type: 'string',
            description: 'Set a prestyled title for the revealer'
          },
          {
            name: 'highlight',
            type: 'string',
            description:
              'Determines the background color of the icon on the right. You can use TF-Colors or default hex, rgb, hsl, ... values',
            default: 'primary'
          },
          apiIcon,
          apiDark,
          ...apiFullBackground,
          ...apiFullColor
        ], // TODO:
        slots: [
          {
            name: 'default',
            description: 'TODO: content to be revealed'
          },
          {
            name: 'head',
            description: 'TODO:'
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
            default: 0,
            description: 'Percentage to be displayed'
          },
          {
            name: 'type',
            type: 'string',
            default: 'bar',
            parameters: ['bar', 'ring'],
            description: 'Progress Type'
          },
          ...apiFullColor,
          ...apiFullBackground,
          {
            name: 'barHeight',
            type: 'number',
            default: 4,
            description: 'Determines the height of the progress bar'
          },
          {
            name: 'ringSize',
            type: 'number',
            default: 70,
            description: 'Determines the size of the progress ring'
          },
          {
            name: 'ringWidth',
            type: 'number',
            default: 8,
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
          apiDark,
          ...apiFullColor.map(x => {
            return {
              ...x,
              description: x.description.split('color').join('highlight-color')
            };
          })
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
            description:
              'Determines the variant used for TC-Header, if floating top = top + 40px',
            parameters: ['fixed', 'floating', 'sticky'],
            default: 'fixed'
          },
          {
            name: 'top',
            type: 'number',
            description: 'Determines the position of TC-Header',
            default: 0
          },
          ...apiFullBackground,
          ...apiFullColor
        ],
        slots: [
          {
            name: 'button',
            description: 'TODO:'
          },
          {
            name: 'title',
            description: 'TODO:'
          },
          {
            name: 'default',
            description: 'TODO:'
          }
        ],
        children: [
          {
            name: 'Header Button',
            icon: 'button',
            api: [
              {
                name: 'name',
                type: 'string',
                default: 'back',
                description: 'Sets the title for the back button'
              },
              { ...apiIcon, default: 'chevron-left' },
              ...apiURLs
            ],
            slots: []
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
        api: [
          {
            name: 'value',
            type: 'number',
            default: 0,
            description: 'Determines the active segment, starting from 0'
          },
          {
            name: 'v-model',
            type: 'number',
            description: 'Can be used to retrieve the current segment'
          },
          apiDark,
          ...apiFullBackground,
          ...apiFullColor,
          {
            name: 'highlight',
            type: 'string',
            description:
              'Determines the background color of an active segment title'
          }
        ],
        children: [
          {
            name: 'segment-item',
            icon: 'segments',
            api: [
              {
                name: 'title',
                type: 'string',
                description:
                  "Determines the text to be displayed in the segment's header"
              }
            ],
            slots: [{ name: 'default', description: '' }]
          }
        ],
        slots: [
          {
            name: 'default',
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
          ...apiFullBackground,
          ...apiFullColor,
          apiDark,
          {
            ...apiIcon,
            name: 'iconStart',
            description: 'Icon to be displayed at the start of the slider'
          },
          {
            ...apiIcon,
            name: 'iconEnd',
            description: 'Icon to be displayed at the end of the slider'
          }
        ], // TODO:
        slots: []
      },
      {
        name: 'Navbar',
        icon: 'dot',
        api: [
          apiDark,
          apiAutoBackground,
          ...apiFullColor,
          ...apiFullBackground
        ],
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
              ...apiURLs,
              ...apiFullColor
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
          { ...apiIcon, default: 'list' },
          apiFrosted,
          apiDark,
          {
            ...apiBoolean,
            name: 'multiple',
            description: 'Determines if multiple items can be selected'
          },
          {
            default: 'Select one',
            name: 'placeholder',
            type: 'string',
            description: 'Will be displayed if no item is selected'
          },
          {
            ...apiBoolean,
            name: 'disabled',
            description: 'Determines if the select is disabled'
          },
          {
            ...apiBoolean,
            name: 'showSelection',
            description:
              'Determines if the placeholder value should be overwritten by the current selection'
          },
          {
            ...apiBoolean,
            name: 'onlyIcon',
            description: 'Determines if the placeholder is visible'
          },
          {
            type: 'string',
            parameters: ['container', 'filled', 'border', 'opaque'],
            name: 'variant',
            description: 'Determines the style of TC-Select'
          },
          {
            type: 'string[]',
            name: '@selectedItems',
            description: "Returns the current selection of items (item's title)"
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
            parameters: ['top', 'bottom', 'left', 'right'],
            description: 'Position of tooltip'
          },
          {
            name: 'tooltip',
            default: '',
            type: 'string',
            description: 'Tooltip to be displayed on hover'
          },
          ...apiFullBackground
        ],
        slots: [{ name: 'default', description: 'TODO:' }]
      },
      {
        name: 'List',
        icon: 'list-bullet',
        api: [
          apiDark,
          apiFrosted,
          ...apiFullColor,
          {
            name: 'title',
            type: 'string',
            description: 'Adds a prestyled title on top of the list'
          },
          {
            name: 'transition',
            type: 'booleam',
            description:
              'Enables an animation if list-items change. Requires list-items to be keyed.'
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
                ...apiBoolean,
                name: 'v-model',
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
        api: [
          {
            name: 'current',
            type: 'number',
            default: 0,
            description: 'Determines the current active step, starting at 0'
          },
          {
            name: 'direction',
            type: 'string',
            parameters: ['row', 'column'],
            default: 'row',
            description: 'Determines the flow of your steps'
          },
          apiDark
        ],
        children: [
          {
            name: 'step item',
            icon: 'dot',
            api: [
              {
                name: 'title',
                type: 'string',
                description: "Determines the step's title"
              },
              apiIcon,
              {
                name: 'description',
                type: 'string',
                description:
                  'Displays a small description underneath the title if the step is active'
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
        name: 'Badge',
        icon: 'notification',
        api: [
          {
            name: 'value',
            type: 'string | number',
            description: 'Value to be displayed'
          },
          ...apiFullColor,
          {
            name: 'max',
            type: 'number',
            description:
              'Determines the max number to be displayed, if exceeded %max%+ will be displayed'
          },
          {
            ...apiBoolean,
            name: 'showEmpty',
            description:
              'Determines if the badge should be displayed if no value is set'
          },
          {
            name: 'position',
            type: 'string',
            parameters: ['corner', 'behind', 'inside'],
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
            parameters: ['large', 'medium', 'small', 'tiny'],
            default: 'small'
          },
          {
            name: 'border',
            type: 'string',
            description: 'Determines the border-style of your avatar',
            parameters: ['rounded', 'circle', 'square'],
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
          ...apiFullColor,
          { name: 'value', type: 'string', description: '' },
          { name: 'title', type: 'string', description: '' },
          { name: 'tooltip', type: 'string', description: '' },

          {
            ...apiBoolean,
            name: 'autofocus',
            description: ''
          },
          { name: 'cols', type: 'number', description: '' },
          { name: 'dirname', type: 'string', description: '' },
          {
            ...apiBoolean,
            name: 'disabled',
            description: ''
          },
          { name: 'form', type: 'string', description: '' },
          { name: 'maxlength', type: 'string', description: '' },
          { name: 'name', type: 'string', description: '' },
          {
            name: 'placeholder',
            type: 'string',
            description: '',
            default: 'Enter text'
          },
          {
            ...apiBoolean,
            name: 'readonly',
            description: ''
          },
          {
            ...apiBoolean,
            name: 'required',
            description: ''
          },
          { name: 'rows', type: 'string', description: '', default: 10 },
          { name: 'wrap', type: 'string', description: '' }
        ], // TODO:
        slots: []
      },
      {
        name: 'Action',
        icon: 'dots-vertical',
        api: [apiDark],
        children: [
          {
            name: 'action item',
            icon: 'dot',
            api: [
              {
                name: 'title',
                type: 'string',
                description: 'Determines the actions title'
              },
              apiIcon
            ],
            slots: []
          }
        ],
        slots: [
          {
            name: 'default',
            description: 'Place your tc-action-items here'
          }
        ]
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
            default: 300,
            name: 'minWidth',
            type: 'number',
            description:
              'Determines the minimal with a continue can have inside the grid'
          },
          {
            default: 30,
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
            parameters: ['auto-fit', 'auto-fill']
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
            parameters: ['center', 'start', 'end'],
            description: 'Determines the vertical alignment'
          },
          {
            name: 'horizontal',
            default: 'center',
            type: 'string',
            parameters: [
              'center',
              'space-between',
              'space-around',
              'start',
              'end'
            ],
            description: 'Determines the horizontal alignment'
          },
          {
            name: 'flow',
            default: 'row',
            type: 'string',
            parameters: ['row', 'column'],
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
