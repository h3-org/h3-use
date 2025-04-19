'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';

export type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavigationLink({ href, children }: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'link' }),
        'text-muted-foreground',
        isActive && 'text-foreground',
      )}
    >
      {children}
    </Link>
  );
}
