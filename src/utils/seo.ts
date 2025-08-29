export interface Story {
  id: string;
  title: string;
  summary: string;
  content: any[];
  moralLesson: string;
  ageGroup: string;
  readingTime: string;
  image: string;
  category: string;
}

// Generate structured data for the website
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "KidsStories",
  "alternateName": "Kids Stories - Educational Tales",
  "url": window.location.origin,
  "description": "Interactive educational stories for children with valuable life lessons, reading activities, and educational games.",
  "publisher": {
    "@type": "Organization",
    "name": "KidsStories",
    "url": window.location.origin,
    "logo": {
      "@type": "ImageObject",
      "url": `${window.location.origin}/logo.png`,
      "width": 60,
      "height": 60
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${window.location.origin}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Children",
    "suggestedMinAge": 3,
    "suggestedMaxAge": 12
  }
});

// Generate structured data for individual stories
export const generateStorySchema = (story: Story) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": story.title,
  "description": story.summary,
  "url": `${window.location.origin}/story/${story.id}`,
  "image": {
    "@type": "ImageObject",
    "url": story.image,
    "width": 800,
    "height": 600
  },
  "author": {
    "@type": "Organization",
    "name": "KidsStories"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KidsStories",
    "url": window.location.origin
  },
  "genre": ["Children's Literature", "Educational Content", story.category],
  "audience": {
    "@type": "Audience",
    "audienceType": "Children",
    "suggestedMinAge": parseInt(story.ageGroup.split('-')[0]) || 3,
    "suggestedMaxAge": parseInt(story.ageGroup.split('-')[1]) || 12
  },
  "educationalUse": "Reading comprehension, moral education, interactive learning",
  "learningResourceType": "Story",
  "typicalAgeRange": story.ageGroup,
  "timeRequired": story.readingTime,
  "about": {
    "@type": "Thing",
    "name": story.moralLesson
  },
  "teaches": story.moralLesson,
  "isAccessibleForFree": true,
  "inLanguage": "en-US"
});

// Generate FAQ structured data
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age group are these stories for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our stories are designed for children ages 3-12, with age-appropriate content and educational activities tailored for different developmental stages."
      }
    },
    {
      "@type": "Question", 
      "name": "Are the stories educational?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Each story includes valuable moral lessons, reading comprehension activities, spelling games, and interactive questions to enhance learning."
      }
    },
    {
      "@type": "Question",
      "name": "Can children read these stories independently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our stories are designed for both independent reading and parent-child shared reading experiences, with features like read-aloud options and interactive activities."
      }
    },
    {
      "@type": "Question",
      "name": "Are the stories safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! All our content is carefully curated to be age-appropriate, educational, and completely safe for children with positive messages and valuable life lessons."
      }
    }
  ]
});

// Generate breadcrumb structured data
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// SEO-friendly URL generation
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim();
};

// Meta description generator for stories
export const generateStoryMetaDescription = (story: Story): string => {
  return `Read "${story.title}" - An educational ${story.category.toLowerCase()} story for ages ${story.ageGroup}. Learn about ${story.moralLesson.toLowerCase()} through interactive storytelling and fun reading activities. Reading time: ${story.readingTime}.`;
};

// Keywords generator for stories
export const generateStoryKeywords = (story: Story): string => {
  const baseKeywords = [
    "kids stories",
    "children's books", 
    "educational stories",
    "moral lessons",
    "reading activities",
    "interactive stories"
  ];
  
  const storySpecificKeywords = [
    story.category.toLowerCase(),
    story.title.toLowerCase(),
    `ages ${story.ageGroup}`,
    story.moralLesson.toLowerCase(),
    "bedtime stories",
    "learning games"
  ];
  
  return [...baseKeywords, ...storySpecificKeywords].join(", ");
};