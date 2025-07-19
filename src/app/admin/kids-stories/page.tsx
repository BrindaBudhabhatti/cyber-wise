
'use client';

import { useEffect, useState } from 'react';
import { getKidsStories, addKidsStory, KidsStory } from '@/lib/data-service';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AdminCyberWiseKidsPage() {
  const [stories, setStories] = useState<KidsStory[]>([]);
  const [newStory, setNewStory] = useState({
    titleKey: '',
    storyKey: '',
    age_group: '4-7',
  });

  useEffect(() => {
    async function fetchStories() {
      const data = await getKidsStories();
      setStories(data);
    }
    fetchStories();
  }, []);

  const handleAdd = async () => {
    if (!newStory.titleKey || !newStory.storyKey) return;
    await addKidsStory(newStory);
    const updated = await getKidsStories();
    setStories(updated);
    setNewStory({ titleKey: '', storyKey: '', age_group: '4-7' });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Kids' Stories</h1>
      <div className="mb-6">
        <Input
          placeholder="Title Key"
          value={newStory.titleKey}
          onChange={(e) => setNewStory({ ...newStory, titleKey: e.target.value })}
          className="mb-2"
        />
        <Input
          placeholder="Story Key"
          value={newStory.storyKey}
          onChange={(e) => setNewStory({ ...newStory, storyKey: e.target.value })}
          className="mb-2"
        />
        <select
          value={newStory.age_group}
          onChange={(e) => setNewStory({ ...newStory, age_group: e.target.value })}
          className="mb-2 p-2 border rounded"
        >
          <option value="4-7">4–7</option>
          <option value="8-12">8–12</option>
          <option value="13-17">13–17</option>
        </select>
        <Button onClick={handleAdd}>Add Story</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle>{story.titleKey}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{story.storyKey}</p>
              <p className="text-sm text-muted-foreground">Age Group: {story.age_group}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
