'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

type Story = {
  id: string
  title: string
  age_group: string
  story_text: string
  image_url?: string
}

export default function KidsPage() {
  const { t } = useTranslation()
  const [stories, setStories] = useState<Story[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchStories = async () => {
      const { data, error } = await supabase
        .from('kids_stories')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setStories(data)
      } else {
        console.error('Error loading stories:', error)
      }
    }

    fetchStories()
  }, [])

  const ageGroups = ['4-7', '8-12', '12-17']

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('kidsPageTitle') || 'CyberWise Kids'}</h1>
      <Tabs defaultValue="4-7" className="w-full">
        <TabsList>
          {ageGroups.map((group) => (
            <TabsTrigger key={group} value={group}>
              {group} yrs
            </TabsTrigger>
          ))}
        </TabsList>

        {ageGroups.map((group) => (
          <TabsContent key={group} value={group}>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {stories
                .filter((s) => s.age_group === group)
                .map((story) => (
                  <Card key={story.id}>
                    {story.image_url && (
                      <img
                        src={story.image_url}
                        alt={story.title}
                        className="w-full h-40 object-cover rounded-t-xl"
                      />
                    )}
                    <CardContent className="p-4">
                      <CardTitle>{story.title}</CardTitle>
                      <p className="text-sm mt-2 whitespace-pre-line">{story.story_text}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
