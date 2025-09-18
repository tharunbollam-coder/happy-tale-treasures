import { Metadata } from 'next'
import { PrivacyPage } from '@/components/pages/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy - KidsStories',
  description: 'Learn how KidsStories protects your privacy and your children\'s data. Our privacy policy explains how we collect, use, and protect your information.',
  keywords: 'privacy policy, children\'s privacy, data protection, COPPA compliance, kids safety online',
}

export default function Privacy() {
  return <PrivacyPage />
}