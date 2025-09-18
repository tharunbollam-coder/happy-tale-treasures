import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact KidsStories - Get in Touch',
  description: 'Contact KidsStories for questions, suggestions, or feedback about our educational children\'s stories and learning activities. We\'d love to hear from you!',
  keywords: 'contact kids stories, feedback children\'s stories, educational content support, customer service',
}

export default function Contact() {
  return <ContactPage />
}