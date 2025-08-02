
import { createClient } from './supabase-client';
import type { SolvedCase as FirestoreSolvedCase, VictimTestimonial as FirestoreVictimTestimonial, KidStory as FirestoreKidStory } from './firestore-service';

// Re-exporting types with Supabase compatibility (optional ID)
export type SolvedCase = FirestoreSolvedCase;
export type VictimTestimonial = FirestoreVictimTestimonial;
export type KidStory = FirestoreKidStory;


// Solved Cases Functions
export async function getSolvedCases(): Promise<SolvedCase[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('solved_cases').select('*');
  if (error) {
    console.error('Error fetching solved cases:', error);
    return [];
  }
  return data as SolvedCase[];
}

export async function getSolvedCase(id: string): Promise<SolvedCase | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from('solved_cases').select('*').eq('id', id).single();
    if (error) {
        console.error('Error fetching single solved case:', error);
        return null;
    }
    return data as SolvedCase | null;
}

export async function addSolvedCase(caseData: Omit<SolvedCase, 'id'>) {
  const supabase = createClient();
  const { error } = await supabase.from('solved_cases').insert([caseData]);
  if (error) throw new Error(error.message);
}

export async function updateSolvedCase(id: string, caseData: Partial<Omit<SolvedCase, 'id'>>) {
  const supabase = createClient();
  const { error } = await supabase.from('solved_cases').update(caseData).eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteSolvedCase(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from('solved_cases').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// Victim Testimonials Functions
export async function getVictimTestimonials(): Promise<VictimTestimonial[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('victim_testimonials').select('*');
  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
  return data as VictimTestimonial[];
}

export async function getVictimTestimonial(id: string): Promise<VictimTestimonial | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from('victim_testimonials').select('*').eq('id', id).single();
    if (error) {
        console.error('Error fetching single testimonial:', error);
        return null;
    }
    return data as VictimTestimonial | null;
}

export async function addVictimTestimonial(testimonialData: Omit<VictimTestimonial, 'id'>) {
  const supabase = createClient();
  const { error } = await supabase.from('victim_testimonials').insert([testimonialData]);
  if (error) throw new Error(error.message);
}

export async function updateVictimTestimonial(id: string, testimonialData: Partial<Omit<VictimTestimonial, 'id'>>) {
  const supabase = createClient();
  const { error } = await supabase.from('victim_testimonials').update(testimonialData).eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteVictimTestimonial(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from('victim_testimonials').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// Kid Stories Functions
export async function getKidStories(): Promise<KidStory[]> {
    const supabase = createClient();
    const { data, error } = await supabase.from('kid_stories').select('*');
    if (error) {
        console.error('Error fetching kid stories:', error);
        return [];
    }
    return data as KidStory[];
}

export async function getKidStory(id: string): Promise<KidStory | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from('kid_stories').select('*').eq('id', id).single();
    if (error) {
        console.error('Error fetching single kid story:', error);
        return null;
    }
    return data as KidStory | null;
}

export async function addKidStory(storyData: Omit<KidStory, 'id'>) {
    const supabase = createClient();
    const { error } = await supabase.from('kid_stories').insert([storyData]);
    if (error) throw new Error(error.message);
}

export async function updateKidStory(id: string, storyData: Partial<Omit<KidStory, 'id'>>) {
    const supabase = createClient();
    const { error } = await supabase.from('kid_stories').update(storyData).eq('id', id);
    if (error) throw new Error(error.message);
}

export async function deleteKidStory(id: string) {
    const supabase = createClient();
    const { error } = await supabase.from('kid_stories').delete().eq('id', id);
    if (error) throw new Error(error.message);
}
