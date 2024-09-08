import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 sm:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary/90">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
        <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Revolutionize Your Interview Process with InterviewAI
            </h1>
            <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
              Streamline your interviews with AI-powered form generation, smart editing, and efficient sharing and collection of candidate responses.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#" className="btn-primary">
              Get Started
            </Link>
            <Link href="#" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}