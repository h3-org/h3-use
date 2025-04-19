import { notFound } from 'next/navigation';

import { HookCard } from '@/components/hook-card';
import { HookCta } from '@/components/hook-cta';
import { HookDetails } from '@/components/hook-details';
import { PageBanner } from '@/components/page-banner';
import { PageGrid } from '@/components/page-grid';

import { getHooksByNames, getHooksExamplesByNames } from '@/lib/hooks';

import { getCategory } from '@/config/hooks';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategory((await params).category);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: `A collection of reusable and customizable ${category.name.toLowerCase()} hooks built with and for React.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory((await params).category);

  if (!category) {
    notFound();
  }

  const hooks = getHooksByNames(category.hooks.map((item) => item.name));
  const examples = getHooksExamplesByNames(
    category.hooks.map((item) => item.name),
  );

  return (
    <>
      <PageBanner title={category.name} subtitle={category.description} />
      <PageGrid className="grow">
        {hooks.map((hook, index) => (
          <HookCard
            key={hook.name}
            name={hook.name}
            description={hook.description ?? ''}
          >
            <HookDetails hook={hook} example={examples[index]} />
          </HookCard>
        ))}
      </PageGrid>
      <HookCta />
    </>
  );
}
