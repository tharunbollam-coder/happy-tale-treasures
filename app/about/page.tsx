import { Metadata } from 'next'
import { AboutPage } from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About KidsStories - Educational Stories for Children',
  description: 'Learn about KidsStories, our mission to provide educational and entertaining stories for children with valuable life lessons, reading activities, and learning games.',
  keywords: 'about kids stories, educational children\'s content, moral lessons for kids, children\'s learning platform, interactive storytelling',
}

export default function About() {
  return <AboutPage />
}