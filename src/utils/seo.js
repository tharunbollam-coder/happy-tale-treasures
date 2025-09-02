export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "KidsStories",
  "url": window.location.origin,
  "description": "Educational stories for children with moral lessons, interactive activities, and engaging content.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${window.location.origin}/stories?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const generateStorySchema = (story) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": story.title,
  "description": story.summary,
  "image": story.image,
  "author": {
    "@type": "Organization",
    "name": "KidsStories"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KidsStories"
  },
  "articleSection": story.category,
  "keywords": [story.category, "kids stories", "moral lessons", "educational content"],
  "audience": {
    "@type": "Audience",
    "audienceType": story.ageGroup
  }
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age group are these stories for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our stories are designed for children ages 3-12, with specific age recommendations for each story."
      }
    },
    {
      "@type": "Question", 
      "name": "Are the stories educational?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every story includes valuable moral lessons and life skills, plus interactive activities like spelling games and comprehension questions."
      }
    }
  ]
});

export const generateStoryMetaDescription = (story) =>
  `Read "${story.title}" - An educational ${story.category.toLowerCase()} story for children ages ${story.ageGroup}. ${story.summary} Includes interactive activities and teaches: ${story.moralLesson}`;

export const generateStoryKeywords = (story) =>
  `${story.title}, ${story.category}, kids story, children's book, ages ${story.ageGroup}, moral lesson, educational story, ${story.moralLesson.split('.')[0]}, interactive learning, reading activities`;