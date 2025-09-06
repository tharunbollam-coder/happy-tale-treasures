# Story Generation Prompt for Children's Educational Stories

## Instructions
Generate a complete children's educational story that matches the following exact structure and requirements:

## Story Requirements

### Metadata
- **Age Group**: Choose from "3-5 years", "5-7 years", "7-9 years", or "9-12 years"
- **Category**: Choose from "Fables", "Adventures", "Fairy Tales", "Educational", "Fantasy", or "Moral Stories"
- **Reading Time**: Estimate in minutes (typically 3-8 minutes for children's stories)
- **Moral Lesson**: A clear, age-appropriate moral or educational takeaway

### Story Structure
1. **Title**: Engaging, child-friendly title
2. **Summary**: 2-3 sentence summary that captures the essence and appeal
3. **Content**: Divide into 3-5 sections, each with:
   - Descriptive text (2-4 paragraphs per section)
   - Image description for illustration (describe what image would accompany this section)

## Content Guidelines

### Writing Style
- Use simple, age-appropriate language
- Include dialogue to make characters come alive
- Create vivid, imaginative descriptions
- Maintain an engaging, storytelling tone
- Include sensory details (what characters see, hear, feel)

### Educational Elements
- Weave in the moral lesson naturally throughout the story
- Include problem-solving situations
- Show character growth and learning
- Demonstrate positive values and behaviors

### Story Elements to Include
- Memorable, relatable characters
- Clear beginning, middle, and end
- Age-appropriate conflict or challenge
- Satisfying resolution that reinforces the moral
- Elements that encourage imagination

## Output Format

```json
{
  "id": "generate-unique-slug-from-title",
  "title": "Story Title Here",
  "summary": "Brief, engaging summary that makes children want to read the story...",
  "content": [
    {
      "text": "First section of the story with rich descriptions and dialogue...",
      "image": "Description of illustration for this section (e.g., 'A cheerful rabbit wearing a red vest standing at the edge of a colorful garden')"
    },
    {
      "text": "Second section continuing the story...",
      "image": "Description of illustration for this section"
    },
    {
      "text": "Final section with resolution and moral lesson...",
      "image": "Description of final illustration"
    }
  ],
  "moralLesson": "Clear statement of the moral or lesson learned",
  "ageGroup": "X-Y years",
  "readingTime": X,
  "image": "Description of main cover illustration for the story",
  "category": "Story Category"
}
```

## Example Topics to Inspire
- Friendship and kindness
- Honesty and truthfulness  
- Perseverance and hard work
- Sharing and generosity
- Courage and bravery
- Responsibility and consequences
- Environmental awareness
- Self-confidence and believing in yourself

## Additional Notes
- Ensure all content is completely child-safe and appropriate
- Avoid scary or inappropriate themes
- Focus on positive messages and outcomes
- Make characters diverse and inclusive
- Include elements that spark curiosity and learning
- Keep sentences shorter for younger age groups, longer for older children

Generate a complete story following this structure exactly.