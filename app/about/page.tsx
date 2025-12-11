import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AuthAPI</h1>
            <p className="text-lg text-muted-foreground">
              Empowering developers with secure, scalable authentication since 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Our Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                AuthAPI was founded by developers frustrated with complex authentication systems. We set out to create
                the simplest, most secure authentication API on the market.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Today, we power authentication for thousands of applications worldwide, handling millions of secure
                transactions every day.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is simple: make secure authentication so easy that every developer can get it right the
                first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔐",
                title: "Security First",
                desc: "We never compromise on security. Every line of code is built with trust as the foundation.",
              },
              {
                icon: "🚀",
                title: "Developer Empowerment",
                desc: "We empower developers with tools that are intuitive, powerful, and a joy to use.",
              },
              {
                icon: "♾️",
                title: "Scalability",
                desc: "From startup to enterprise, our infrastructure scales with your needs.",
              },
            ].map((value, i) => (
              <Card key={i} className="p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>

          <div className="space-y-8">
            {[
              { year: "2023", title: "Launch", desc: "AuthAPI Beta launched with support for 5 languages" },
              { year: "2024", title: "10K Users", desc: "Reached 10,000 active users, added support for 8 more SDKs" },
              { year: "2024", title: "Enterprise", desc: "Enterprise tier launched with dedicated support" },
              { year: "2025", title: "Global Scale", desc: "Now handling 100M+ API calls monthly" },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
