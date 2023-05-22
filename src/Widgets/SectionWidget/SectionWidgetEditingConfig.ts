import * as Scrivito from 'scrivito'
import { SectionWidget } from './SectionWidgetClass'

Scrivito.provideEditingConfig(SectionWidget, {
  title: 'Section',
  attributes: {
    backgroundAnimateOnHover: {
      title: 'Animate background on hover',
    },
    backgroundColor: {
      title: 'Background color',
      description:
        'Does not apply if a background image is set. Default: White',
      values: [
        { value: 'white', title: 'White' },
        { value: 'primary', title: 'Primary color' },
        { value: 'secondary', title: 'Secondary color' },
        { value: 'light-grey', title: 'Light grey' },
        { value: 'middle-grey', title: 'Grey' },
        { value: 'dark-grey', title: 'Dark grey' },
        { value: 'transparent', title: 'Transparent' },
        { value: 'success', title: 'Success' },
        { value: 'info', title: 'Info' },
        { value: 'warning', title: 'Warning' },
        { value: 'danger', title: 'Danger' },
      ],
    },
    backgroundImage: {
      title: 'Background image',
    },
    showPadding: {
      title: 'Padding',
      description: 'Padding adds space around this section. Default: Yes',
    },
  },
  properties: (widget) => [
    'backgroundColor',
    'backgroundImage',
    ['backgroundAnimateOnHover', { enabled: !!widget.get('backgroundImage') }],
    'showPadding',
  ],
  initialContent: {
    backgroundColor: 'white',
    showPadding: true,
  },
})