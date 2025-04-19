import Link from 'next/link';

import { Icons } from '@/components/icons';
import { NavigationLink } from '@/components/layout/navigation-link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function NavigationDesktop() {
  return (
    <section
      className={cn('grow hidden lg:flex justify-end items-center gap-2')}
    >
      <ul className={cn('flex items-center gap-2')}>
        <li>
          <NavigationLink href="/hooks">Hooks</NavigationLink>
        </li>
      </ul>
      <div className={cn('flex items-center gap-2 border-l pl-4')}>
        <Link
          href={siteConfig.links.github}
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          target="_blank"
          aria-label="GitHub"
        >
          <Icons.Github className="size-4" />
        </Link>
        <ThemeToggle variant="ghost" />
      </div>
    </section>
  );
}
