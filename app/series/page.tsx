import { Metadata } from 'next'
import { SeriesPage } from '@/components/pages/SeriesPage'

export const metadata: Metadata = {
  title: 'Story Series - Chapter-Based Adventures | KidsStories',
  description: 'Discover ongoing story series with weekly chapters. Follow your favorite characters through exciting adventures, like reading weekly manga but for kids!',
  keywords: 'story series, chapter stories, weekly stories, kids manga, serialized stories, ongoing adventures',
}

export default function Series() {
  return <SeriesPage />
}