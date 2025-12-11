import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      highlighted: false,
      features: [
        { name: "1,000 API calls/month", included: true },
        { name: "Basic support", included: true },
        { name: "Community access", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
        { name: "Custom integration help", included: false },
      ],
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      price: "Custom",
      description: "For growing applications",
      highlighted: true,
      features: [
        { name: "Up to 1M API calls", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom integration help", included: true },
        { name: "Dedicated account manager", included: false },
        { name: "SLA guarantees", included: false },
      ],
      cta: "Contact Sales",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments",
      highlighted: false,
      features: [
        { name: "Unlimited API calls", included: true },
        { name: "Dedicated support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom integration help", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "SLA guarantees", included: true },
      ],
      cta: "Request Demo",
    },
  ]

  const faqs = [
    {
      question: "What if I exceed my monthly API call limit?",
      answer:
        "We'll notify you when you're approaching your limit. You can upgrade anytime, and we'll prorate the cost based on your usage.",
    },
    {
      question: "Is there a long-term contract required?",
      answer:
        "No contracts required. All plans are monthly and can be canceled anytime. Enterprise plans may include custom terms.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, wire transfers, and ACH for enterprise customers.",
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Annual plans include a 20% discount. Contact our sales team for enterprise volume pricing.",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Flexible Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Start free, scale as you grow.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Card
                key={i}
                className={`p-8 flex flex-col relative ${
                  plan.highlighted ? "ring-2 ring-primary scale-105 md:scale-100" : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>

                <Link href="/contact" className="w-full">
                  <Button size="lg" className="w-full mb-8" variant={plan.highlighted ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Plan?</h2>
          <p className="text-lg opacity-90 mb-8">Start with Free Tier. No credit card required.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
