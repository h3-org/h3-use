import { Icons } from '@/components/icons';

export type HookCategory = {
  slug: string;
  name: string;
  description: string;
  icon: keyof typeof Icons;
  hooks: { name: string }[];
  isNew?: boolean;
};

export function getCategory(slug: string): HookCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export const categories: HookCategory[] = [
  {
    slug: 'sensors',
    name: 'Sensors',
    description:
      'Listen to changes in the interface and update your states and components.',
    icon: 'Signal',
    hooks: [
      {
        name: 'use-window-size',
      },
      {
        name: 'use-media',
      },
      {
        name: 'use-mouse',
      },
      {
        name: 'use-keypress',
      },
      {
        name: 'use-orientation',
      },
    ],
  },
  {
    slug: 'state-management',
    name: 'State Management',
    description:
      'Easily manage the state of different types of data in your application.',
    icon: 'Swap',
    hooks: [],
  },
  {
    slug: 'side-effects',
    name: 'Side Effects',
    description:
      'Trigger side effects in your application in a declarative way.',
    icon: 'Pages',
    hooks: [],
  },
  {
    slug: 'lifecycles',
    name: 'Lifecycles',
    description: 'Handle the lifecycle of the components of your application.',
    icon: 'Refresh',
    hooks: [],
  },
];
