import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SpellingGamePage } from '@/components/pages/SpellingGamePage'
import { stories } from '@/data/stories'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    return {
      title: 'Spelling Game Not Found | KidsStories',
      description: 'The requested spelling game could not be found.',
    }
  }

  return {
    title: `Spelling Game - ${story.title} | KidsStories`,
    description: `Practice spelling with characters from "${story.title}". Fun educational spelling game for kids ages ${story.ageGroup}.`,
    keywords: `spelling game, ${story.title}, educational games for kids, spelling practice, children learning activities`,
  }
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    id: story.id,
  }))
}

export default function SpellingGame({ params }: Props) {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    notFound()
  }

  return <SpellingGamePage storyId={params.id} />
}