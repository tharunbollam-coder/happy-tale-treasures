import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6" role="img" aria-label="Confused face emoji">
          😕
        </div>
        <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent mb-4">
          Oops! Page Not Found
        </h1>
        <p className="font-comic text-lg text-muted-foreground mb-8">
          It looks like this page went on an adventure and got lost! Let's help you find your way back to the stories.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="font-comic font-bold w-full">
              🏠 Go Home
            </Button>
          </Link>
          <Link href="/stories">
            <Button variant="outline" size="lg" className="font-comic font-bold w-full">
              📚 Browse Stories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}