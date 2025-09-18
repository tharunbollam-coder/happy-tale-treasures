import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChapterDetailPage } from '@/components/pages/ChapterDetailPage'
import { series } from '@/data/series'

interface Props {
  params: { seriesId: string; chapterId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentSeries = series.find((s) => s.id === params.seriesId)
  const currentChapter = currentSeries?.chapters.find((c) => c.id === params.chapterId)
  
  if (!currentSeries || !currentChapter) {
    return {
      title: 'Chapter Not Found | KidsStories',
      description: 'The requested chapter could not be found.',
    }
  }

  return {
    title: `${currentChapter.title} - ${currentSeries.title} | KidsStories`,
    description: currentChapter.summary,
    keywords: `${currentSeries.title}, chapter ${currentChapter.chapterNumber}, ${currentSeries.tags.join(', ')}`,
    openGraph: {
      title: `${currentChapter.title} - ${currentSeries.title}`,
      description: currentChapter.summary,
      images: [{ url: currentChapter.image, width: 800, height: 600, alt: currentChapter.title }],
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  const params: { seriesId: string; chapterId: string }[] = []
  
  series.forEach((s) => {
    s.chapters.forEach((chapter) => {
      if (chapter.isPublished) {
        params.push({
          seriesId: s.id,
          chapterId: chapter.id,
        })
      }
    })
  })
  
  return params
}

export default function ChapterDetail({ params }: Props) {
  const currentSeries = series.find((s) => s.id === params.seriesId)
  const currentChapter = currentSeries?.chapters.find((c) => c.id === params.chapterId)
  
  if (!currentSeries || !currentChapter || !currentChapter.isPublished) {
    notFound()
  }

  return <ChapterDetailPage seriesId={params.seriesId} chapterId={params.chapterId} />
}