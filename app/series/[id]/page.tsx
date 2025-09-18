import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SeriesDetailPage } from '@/components/pages/SeriesDetailPage'
import { series } from '@/data/series'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentSeries = series.find((s) => s.id === params.id)
  
  if (!currentSeries) {
    return {
      title: 'Series Not Found | KidsStories',
      description: 'The requested series could not be found.',
    }
  }

  return {
    title: `${currentSeries.title} - Story Series | KidsStories`,
    description: currentSeries.description,
    keywords: `${currentSeries.title}, story series, chapters, ${currentSeries.tags.join(', ')}`,
    openGraph: {
      title: `${currentSeries.title} - Story Series`,
      description: currentSeries.description,
      images: [{ url: currentSeries.coverImage, width: 800, height: 600, alt: currentSeries.title }],
    },
  }
}

export async function generateStaticParams() {
  return series.map((s) => ({
    id: s.id,
  }))
}

export default function SeriesDetail({ params }: Props) {
  const currentSeries = series.find((s) => s.id === params.id)
  
  if (!currentSeries) {
    notFound()
  }

  return <SeriesDetailPage seriesId={params.id} />
}