import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, Users, Star, Calendar, Play, Lock, ChevronRight } from "lucide-react";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { series } from "../data/series";
import LazyImage from "../components/LazyImage";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const SeriesDetail = () => {
  const { id } = useParams();
  const currentSeries = series.find((s) => s.id === id);

  if (!currentSeries) {
    return <Navigate to="/not-found" replace />;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'hiatus': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const breadcrumbs = [
    { label: 'Series', href: '/series' },
    { label: currentSeries.title, href: `/series/${currentSeries.id}` }
  ];

  return (
    <>
      <SEO 
        title={`${currentSeries.title} - Story Series | KidsStories`}
        description={currentSeries.description}
        keywords={`${currentSeries.title}, story series, chapters, ${currentSeries.tags.join(', ')}`}
        image={currentSeries.coverImage}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbs} />
          
          {/* Hero Section */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
              <div className="lg:col-span-1">
                <div className="relative">
                  <LazyImage
                    src={currentSeries.coverImage}
                    alt={currentSeries.title}
                    className="w-full aspect-[3/4] rounded-xl shadow-2xl object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(currentSeries.status)}>
                      {currentSeries.status.charAt(0).toUpperCase() + currentSeries.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {currentSeries.category}
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-kid bg-gradient-rainbow bg-clip-text text-transparent mb-4 break-words">
                    {currentSeries.title}
                  </h1>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {currentSeries.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentSeries.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  <div className="text-center p-3 lg:p-4 bg-secondary/20 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                      <span className="text-lg lg:text-2xl font-bold">{currentSeries.rating}</span>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground">Rating</p>
                  </div>
                  
                  <div className="text-center p-3 lg:p-4 bg-secondary/20 rounded-lg">
                    <div className="flex flex-col items-center gap-1 mb-2">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      <span className="text-sm lg:text-xl font-bold">{currentSeries.subscribers.toLocaleString()}</span>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground">Subscribers</p>
                  </div>
                  
                  <div className="text-center p-3 lg:p-4 bg-secondary/20 rounded-lg">
                    <div className="text-lg lg:text-2xl font-bold mb-2">
                      {currentSeries.publishedChapters}/{currentSeries.totalChapters}
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground">Chapters</p>
                  </div>
                  
                  <div className="text-center p-3 lg:p-4 bg-secondary/20 rounded-lg">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground text-center break-words">
                      {currentSeries.publishSchedule}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Story Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round((currentSeries.publishedChapters / currentSeries.totalChapters) * 100)}% Complete
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-secondary/30 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-full transition-all duration-500 relative"
                        style={{ width: `${(currentSeries.publishedChapters / currentSeries.totalChapters) * 100}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Chapter 1</span>
                      <span>Chapter {currentSeries.totalChapters}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapters List */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-comic font-bold">Chapters</h2>
              <Badge variant="outline" className="self-start sm:self-center">
                Age: {currentSeries.ageGroup}
              </Badge>
            </div>
            
            <div className="grid gap-4">
              {currentSeries.chapters.map((chapter) => (
                <Card 
                  key={chapter.id} 
                  className={`group transition-all duration-300 ${
                    chapter.isPublished 
                      ? 'hover:shadow-lg hover:scale-102 cursor-pointer bg-card/80' 
                      : 'bg-muted/30 cursor-not-allowed'
                  } backdrop-blur-sm border-border/50`}
                >
                  <div className="p-0">
                    {chapter.isPublished ? (
                      <Link to={`/series/${currentSeries.id}/chapter/${chapter.id}`} className="block">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6">
                          <div className="relative flex-shrink-0 w-full sm:w-auto">
                            <LazyImage
                              src={chapter.image}
                              alt={chapter.title}
                              className="w-full sm:w-20 lg:w-24 h-32 sm:h-20 lg:h-24 rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs w-fit">
                                Chapter {chapter.chapterNumber}
                              </Badge>
                              {chapter.publishDate && (
                                <span className="text-sm text-muted-foreground">
                                  {formatDate(chapter.publishDate)}
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg sm:text-xl font-comic font-bold mb-2 group-hover:text-primary transition-colors break-words">
                              {chapter.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
                              {chapter.summary}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{chapter.readingTime}</span>
                              </div>
                            </div>
                          </div>
                          
                          <ChevronRight className="hidden sm:block w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                      </Link>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6">
                        <div className="relative flex-shrink-0 w-full sm:w-auto">
                          <LazyImage
                            src={chapter.image}
                            alt={chapter.title}
                            className="w-full sm:w-20 lg:w-24 h-32 sm:h-20 lg:h-24 rounded-lg object-cover grayscale"
                          />
                          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs w-fit">
                              Chapter {chapter.chapterNumber}
                            </Badge>
                            {chapter.publishDate && (
                              <span className="text-sm text-muted-foreground">
                                Coming {formatDate(chapter.publishDate)}
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-comic font-bold mb-2 text-muted-foreground break-words">
                            {chapter.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {chapter.summary}
                          </p>
                        </div>
                        
                        <Lock className="hidden sm:block w-6 h-6 text-muted-foreground flex-shrink-0" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Subscribe CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-comic font-bold mb-4">
              Never Miss a Chapter!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join {currentSeries.subscribers.toLocaleString()} other readers and get notified when new chapters are released.
            </p>
            <Button size="lg" className="font-comic">
              Subscribe to Series
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesDetail;