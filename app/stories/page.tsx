import { Metadata } from 'next'
import { StoriesPage } from '@/components/pages/StoriesPage'
import { stories } from '@/data/stories'

export const metadata: Metadata = {
  title: 'All Educational Stories for Kids | Children\'s Books with Moral Lessons',
  description: `Browse ${stories.length} educational stories for children ages 3-12. Interactive tales teaching moral lessons with reading activities, spelling games, and comprehension questions.`,
  keywords: 'children\'s stories collection, educational books for kids, moral lesson stories, interactive reading activities, kids learning games, bedtime stories with lessons',
}

export default function Stories() {
  return <StoriesPage />
}