import { Metadata } from 'next'
import { TermsPage } from '@/components/pages/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service - KidsStories',
  description: 'Read the terms of service for KidsStories. Learn about our usage guidelines, user responsibilities, and legal terms for using our educational children\'s stories platform.',
  keywords: 'terms of service, usage guidelines, legal terms, children\'s content rules, educational platform terms',
}

export default function Terms() {
  return <TermsPage />
}