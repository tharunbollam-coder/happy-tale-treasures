import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { series } from "../data/series";
import LazyImage from "../components/LazyImage";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const ChapterDetail = () => {
  const { seriesId, chapterId } = useParams();
  
  const currentSeries = series.find((s) => s.id === seriesId);
  const currentChapter = currentSeries?.chapters.find((c) => c.id === chapterId);
  
  if (!currentSeries || !currentChapter) {
    return <Navigate to="/not-found" replace />;
  }

  if (!currentChapter.isPublished) {
    return <Navigate to={`/series/${seriesId}`} replace />;
  }

  const currentChapterIndex = currentSeries.chapters.findIndex((c) => c.id === chapterId);
  const previousChapter = currentChapterIndex > 0 ? currentSeries.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < currentSeries.chapters.length - 1 ? currentSeries.chapters[currentChapterIndex + 1] : null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumbs = [
    { label: 'Series', href: '/series' },
    { label: currentSeries.title, href: `/series/${currentSeries.id}` },
    { label: `Chapter ${currentChapter.chapterNumber}`, href: `/series/${seriesId}/chapter/${chapterId}` }
  ];

  return (
    <>
      <SEO 
        title={`${currentChapter.title} - ${currentSeries.title} | KidsStories`}
        description={currentChapter.summary}
        keywords={`${currentSeries.title}, chapter ${currentChapter.chapterNumber}, ${currentSeries.tags.join(', ')}`}
        image={currentChapter.image}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          
          {/* Chapter Header */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-3">
                {currentSeries.title}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-kid bg-gradient-rainbow bg-clip-text text-transparent mb-4">
                Chapter {currentChapter.chapterNumber}: {currentChapter.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {currentChapter.summary}
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentChapter.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Age: {currentSeries.ageGroup}</span>
                </div>
                {currentChapter.publishDate && (
                  <span>Published {formatDate(currentChapter.publishDate)}</span>
                )}
              </div>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="space-y-8 mb-12">
            {currentChapter.content.map((section, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {section.image && (
                      <div className="order-1 lg:order-1">
                        <LazyImage
                          src={section.image}
                          alt={`${currentChapter.title} illustration ${index + 1}`}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`p-8 flex items-center order-2 ${section.image ? 'lg:order-2' : 'col-span-2'}`}>
                      <div className="prose prose-lg max-w-none">
                        {section.text.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-foreground leading-relaxed mb-4 font-comic">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Chapter Navigation */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Previous Chapter */}
              <div className="w-full sm:flex-1">
                {previousChapter && previousChapter.isPublished ? (
                  <Link to={`/series/${seriesId}/chapter/${previousChapter.id}`} className="block">
                    <Button variant="outline" className="group w-full sm:w-auto">
                      <ChevronLeft className="w-4 h-4 mr-2 flex-shrink-0" />
                      <div className="text-left min-w-0">
                        <div className="text-xs text-muted-foreground">Previous</div>
                        <div className="font-comic truncate">Ch. {previousChapter.chapterNumber}</div>
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <div className="hidden sm:block"></div>
                )}
              </div>
              
              {/* All Chapters Button */}
              <div className="flex-shrink-0 order-first sm:order-none">
                <Link to={`/series/${seriesId}`}>
                  <Button variant="secondary" className="font-comic">
                    All Chapters
                  </Button>
                </Link>
              </div>
              
              {/* Next Chapter */}
              <div className="w-full sm:flex-1 flex justify-end">
                {nextChapter ? (
                  nextChapter.isPublished ? (
                    <Link to={`/series/${seriesId}/chapter/${nextChapter.id}`} className="block">
                      <Button className="group w-full sm:w-auto">
                        <div className="text-right min-w-0">
                          <div className="text-xs opacity-80">Next</div>
                          <div className="font-comic truncate">Ch. {nextChapter.chapterNumber}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 ml-2 flex-shrink-0" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="group w-full sm:w-auto">
                      <div className="text-right min-w-0">
                        <div className="text-xs opacity-60">Coming Soon</div>
                        <div className="font-comic truncate">Ch. {nextChapter.chapterNumber}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-2 flex-shrink-0" />
                    </Button>
                  )
                ) : (
                  <div className="hidden sm:block"></div>
                )}
              </div>
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="mt-8 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 border border-border/50">
            <h3 className="text-xl font-comic font-bold mb-2">
              Enjoying the story?
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to get notified when new chapters are released!
            </p>
            <Button className="font-comic">
              Subscribe to {currentSeries.title}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterDetail;