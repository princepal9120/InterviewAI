export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            How InterviewAI Works
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            InterviewAI simplifies the interview process with a 3-step workflow.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Step
            number={1}
            title="Generate Interview Forms"
            description="Automatically create customized interview forms based on the job description and candidate profile."
          />
          <Step
            number={2}
            title="Smart Editing"
            description="Utilize AI-powered editing tools to refine and optimize your interview questions."
          />
          <Step
            number={3}
            title="Efficient Sharing and Collection"
            description="Seamlessly share interview forms with candidates and collect their responses."
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
