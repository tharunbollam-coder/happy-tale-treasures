import { Metadata } from 'next'
import { HomePage } from '@/components/pages/HomePage'

export const metadata: Metadata = {
  title: 'KidsStories - Educational Tales That Teach Life Lessons | Interactive Reading for Kids',
  description: 'Discover magical educational stories for children ages 3-12. Interactive tales with moral lessons, reading activities, spelling games, and comprehension questions. Safe, fun learning!',
  keywords: 'kids stories, educational stories for children, moral lessons kids, interactive reading activities, children\'s books online, bedtime stories with lessons, reading comprehension games, spelling activities for kids',
}

export default function Home() {
  return <HomePage />
}