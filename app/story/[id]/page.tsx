import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { StoryDetailPage } from '@/components/pages/StoryDetailPage'
import { stories } from '@/data/stories'
import { generateStoryMetaDescription, generateStoryKeywords } from '@/utils/seo'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    return {
      title: 'Story Not Found | KidsStories',
      description: 'The requested story could not be found. Explore our collection of educational stories for children.',
    }
  }

  return {
    title: `${story.title} - Educational Story for Kids Ages ${story.ageGroup} | KidsStories`,
    description: generateStoryMetaDescription(story),
    keywords: generateStoryKeywords(story),
    openGraph: {
      title: `${story.title} - Educational Story for Kids`,
      description: story.summary,
      images: [{ url: story.image, width: 800, height: 600, alt: story.title }],
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    id: story.id,
  }))
}

export default function StoryDetail({ params }: Props) {
  const story = stories.find((s) => s.id === params.id)
  
  if (!story) {
    notFound()
  }

  return <StoryDetailPage storyId={params.id} />
}