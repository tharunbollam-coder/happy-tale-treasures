@@ .. @@
 interface Props {
-  params: { id: string }
+  params: { seriesId: string }
 }

 export async function generateMetadata({ params }: Props): Promise<Metadata> {
-  const currentSeries = series.find((s) => s.id === params.id)
+  const currentSeries = series.find((s) => s.id === params.seriesId)
   
   if (!currentSeries) {
@@ .. @@
 export async function generateStaticParams() {
   return series.map((s) => ({
-    id: s.id,
+    seriesId: s.id,
   }))
 }

 export default function SeriesDetail({ params }: Props) {
-  const currentSeries = series.find((s) => s.id === params.id)
+  const currentSeries = series.find((s) => s.id === params.seriesId)
   
   if (!currentSeries) {
@@ .. @@
   }

-  return <SeriesDetailPage seriesId={params.id} />
+  return <SeriesDetailPage seriesId={params.seriesId} />
 }