'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import { Icons } from './icons';
import { MagicCard } from './magicui/magic-card';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type CategoryCard = {
  slug: string;
  name: string;
  description: string;
  icon: keyof typeof Icons;
  hooksCount?: number;
  isNew?: boolean;
};

export function CategoryCard({
  slug,
  name,
  description,
  icon,
  hooksCount,
  isNew = false,
}: CategoryCard) {
  const { theme } = useTheme();

  const href = `/hooks/${slug}`;
  const isComingSoon: boolean = hooksCount === 0;

  const renderIcon = () => {
    const IconComponent = Icons[icon];
    return <IconComponent className="size-8" />;
  };

  return (
    <Link href={href}>
      <Card className="gap-0 h-full border-0">
        <MagicCard
          gradientColor={theme === 'dark' ? '#27272a' : '#e4e4e7'}
          className="p-0 h-full"
        >
          <CardHeader className="pb-2">
            {renderIcon()}
            <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <p className="text-muted-foreground text-sm">{description}</p>
          </CardContent>
          <CardFooter className="pt-4 h-full items-end flex justify-between">
            <Badge variant="secondary" className="font-mono text-xs">
              {isComingSoon ? 'No hooks yet' : `${hooksCount} hook(s)`}
            </Badge>
          </CardFooter>
        </MagicCard>
      </Card>
    </Link>
  );
}
