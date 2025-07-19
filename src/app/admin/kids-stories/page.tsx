// app/admin/kids-stories/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

export default function AdminKidsStoriesPage() {
  const supabase = createClient();
  const [title, setTitle] = useState('');
  const [ageGroup, setAgeGroup] = useState('4-7');
  const [storyText, setStoryText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('kids_stories').insert([
      {
        title,
        age_group: ageGroup,
        story_text: storyText,
        image_url: imageUrl,
        language
      }
    ]);

    if (error) {
      alert('Error: ' + error.message);
    } else {
      alert('Story submitted successfully!');
      setTitle('');
      setAgeGroup('4-7');
      setStoryText('');
      setImageUrl('');
      setLanguage('en');
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Add New CyberWise Kids Story</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <Label>Age Group</Label>
          <Select value={ageGroup} onValueChange={setAgeGroup}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="4-7">4–7</SelectItem>
              <SelectItem value="8-12">8–12</SelectItem>
              <SelectItem value="12-17">12–17</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Story Text</Label>
          <Textarea value={storyText} onChange={(e) => setStoryText(e.target.value)} required rows={6} />
        </div>
        <div>
          <Label>Image URL (optional)</Label>
          <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <Label>Language</Label>
          <Input value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>
        <Button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Story'}</Button>
      </form>
    </div>
  );
}
