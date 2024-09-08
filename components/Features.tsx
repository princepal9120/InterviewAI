export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Streamline Your Interview Process
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              InterviewAI offers a suite of powerful features to revolutionize
              the way you conduct interviews.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold">AI-Powered Form Generation</h3>
              <p className="text-muted-foreground">
                Automatically generate customized interview forms based on the
                job description and candidate profile.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Smart Editing</h3>
              <p className="text-muted-foreground">
                Utilize AI-powered editing tools to refine and optimize your
                interview questions for better candidate assessment.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                Efficient Sharing and Collection
              </h3>
              <p className="text-muted-foreground">
                Seamlessly share interview forms with candidates and collect
                their responses, all within a centralized platform.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
