import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, Users, Star, Calendar, Filter, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { series } from "@/data/series";
import LazyImage from "@/components/LazyImage";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Series = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ageGroupFilter, setAgeGroupFilter] = useState("all");

  const filteredSeries = useMemo(() => {
    return series.filter((s) => {
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           s.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = categoryFilter === "all" || s.category === categoryFilter;
      const matchesStatus = statusFilter === "all" || s.status === statusFilter;
      const matchesAgeGroup = ageGroupFilter === "all" || s.ageGroup === ageGroupFilter;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesAgeGroup;
    });
  }, [searchTerm, categoryFilter, statusFilter, ageGroupFilter]);

  const categories = [...new Set(series.map(s => s.category))];
  const ageGroups = [...new Set(series.map(s => s.ageGroup))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'hiatus': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <>
      <SEO 
        title="Story Series - Chapter-Based Adventures | KidsStories"
        description="Discover ongoing story series with weekly chapters. Follow your favorite characters through exciting adventures, like reading weekly manga but for kids!"
        keywords="story series, chapter stories, weekly stories, kids manga, serialized stories, ongoing adventures"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-kid bg-gradient-rainbow bg-clip-text text-transparent mb-4">
              Story Series
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow amazing adventures chapter by chapter! New episodes released weekly, just like your favorite shows.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-comic font-bold">Find Your Next Adventure</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search series..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="hiatus">On Hiatus</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ageGroupFilter} onValueChange={setAgeGroupFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  {ageGroups.map((ageGroup) => (
                    <SelectItem key={ageGroup} value={ageGroup}>
                      {ageGroup}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setStatusFilter("all");
                  setAgeGroupFilter("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Series Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSeries.map((s) => (
              <Link key={s.id} to={`/series/${s.id}`}>
              <Card className="group hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden">
                <div className="relative">
                  <LazyImage
                    src={s.coverImage}
                    alt={s.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(s.status)} shadow-md`}>
                      {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 dark:bg-card/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {s.publishedChapters} of {s.totalChapters} chapters
                        </span>
                        <span className="text-xs font-bold text-primary">
                          {Math.round((s.publishedChapters / s.totalChapters) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300"
                          style={{ width: `${(s.publishedChapters / s.totalChapters) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {s.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{s.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-kid group-hover:text-primary transition-colors">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {s.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {s.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {s.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{s.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{s.subscribers.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">{s.publishSchedule}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredSeries.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-comic font-bold text-muted-foreground mb-2">
                No series found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Series;