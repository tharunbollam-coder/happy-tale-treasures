interface Props {
  params: { seriesId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentSeries = series.find((s) => s.id === params.seriesId)
  
  if (!currentSeries) {
    return {
      title: 'Series Not Found'
    }
  }
}

export async function generateStaticParams() {
  return series.map((s) => ({
    seriesId: s.id,
  }))
}

export default function SeriesDetail({ params }: Props) {
  const currentSeries = series.find((s) => s.id === params.seriesId)
  
  if (!currentSeries) {
    return <div>Series not found</div>
  }

  return <SeriesDetailPage seriesId={params.seriesId} />
}