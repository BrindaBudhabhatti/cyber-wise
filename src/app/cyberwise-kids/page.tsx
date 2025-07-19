'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getKidsStories, KidsStory } from '@/lib/data-service';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function CyberWiseKidsPage() {
  const { t } = useTranslation();
  const [stories, setStories] = useState<KidsStory[]>([]);

  useEffect(() => {
    async function fetchStories() {
      const data = await getKidsStories();
      setStories(data);
    }
    fetchStories();
  }, []);

  const groupedStories = {
    '4-7': stories.filter((s) => s.age_group === '4-7'),
    '8-12': stories.filter((s) => s.age_group === '8-12'),
    '13-17': stories.filter((s) => s.age_group === '13-17'),
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('kidsStories.title')}</h1>
      {Object.entries(groupedStories).map(([ageGroup, group]) => (
        <div key={ageGroup} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{t(`ageGroups.${ageGroup}`)}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle>{t(story.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t(story.storyKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

