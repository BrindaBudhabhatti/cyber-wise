// lib/kidsStories.ts
import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

// Fetch all stories for specific age group & language
export async function getStories(ageGroup: string, lang: string = 'en') {
  const { data, error } = await supabase
    .from('kids_stories')
    .select('*')
    .eq('age_group', ageGroup)
    .eq('language', lang)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching stories:', error.message)
    return []
  }

  return data
}
