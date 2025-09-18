import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { StoryQuestionsPage } from '@/components/pages/StoryQuestionsPage'
import { stories } from '@/data/stories'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    return {
      title: 'Story Questions Not Found | KidsStories',
      description: 'The requested story questions could not be found.',
    }
  }

  return {
    title: `Story Questions - ${story.title} | KidsStories`,
    description: `Test your understanding of "${story.title}" with fun comprehension questions. Educational reading activity for kids ages ${story.ageGroup}.`,
    keywords: `story questions, ${story.title}, reading comprehension, educational activities for kids, story understanding`,
  }
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    id: story.id,
  }))
}

export default function StoryQuestions({ params }: Props) {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    notFound()
  }

  return <StoryQuestionsPage storyId={params.id} />
}