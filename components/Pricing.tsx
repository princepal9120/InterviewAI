import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, XIcon } from './Icons'

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Pricing</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Plans for Every Need</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that best fits your organization's needs.
          </p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <PricingCard
            title="Free"
            price="$0"
            features={["AI-Powered Form Generation", "Basic Editing Tools"]}
          />
          <PricingCard
            title="Pro"
            price="$19"
            features={[
              "AI-Powered Form Generation",
              "Advanced Editing Tools",
              "Candidate Response Collection",
              "Reporting and Analytics",
            ]}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "AI-Powered Form Generation",
              "Advanced Editing Tools",
              "Candidate Response Collection",
              "Reporting and Analytics",
              "Dedicated Support",
              "Customized Solutions",
            ]}
          />
        </div>
      </div>
    </div>
  </section>
  )
}
function PricingCard({ title, price, features }) {
    return (
      <Card className="space-y-4 rounded-lg border border-input bg-background p-6 shadow-sm">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-4xl font-bold">{price}</p>
          <p className="text-muted-foreground">per month</p>
        </div>
        <ul className="space-y-1 text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">Get Started</Button>
      </Card>
    );
  }