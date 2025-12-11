import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "User Registration API",
      description: "Create accounts with email, phone, or custom fields securely.",
      icon: "📝",
    },
    {
      title: "User Login API",
      description: "Token-based authentication for seamless sessions.",
      icon: "🔑",
    },
    {
      title: "User Management",
      description: "Fetch details, update profiles, reset passwords.",
      icon: "👤",
    },
    {
      title: "Fully Customizable",
      description: "Your UI, our backend – complete control.",
      icon: "🎨",
    },
    {
      title: "24/7 Monitoring",
      description: "Real-time logs, analytics, and performance tracking.",
      icon: "📊",
    },
    {
      title: "Multi-SDK Support",
      description: "SDKs in PHP, Node.js, Python, .NET, Java, Flutter, and more.",
      icon: "📚",
    },
  ]

  const sdks = ["PHP", "Node.js", "Python", ".NET", "Java", "Flutter", "React", "Go", "Ruby", "Rust"]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h1>
            <p className="text-lg text-muted-foreground">From registration to monitoring, we've got you covered.</p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="p-8 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Production-ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Enterprise SLA</span>
                  </li>
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Scale</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Handle thousands of authentication requests per second without breaking a sweat. Our infrastructure
                automatically scales with your needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">
                    ✓
                  </span>
                  <span>Up to 1M+ requests per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">
                    ✓
                  </span>
                  <span>99.99% uptime SLA</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">
                    ✓
                  </span>
                  <span>Global edge network</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Scalability"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SDKs for Every Language</h2>
            <p className="text-muted-foreground">Choose your preferred language</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sdks.map((sdk) => (
              <Card key={sdk} className="p-6 text-center hover:bg-primary/5 transition-colors cursor-pointer">
                <p className="font-semibold">{sdk}</p>
                <p className="text-xs text-muted-foreground mt-1">Get Started</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security First</h2>
            <p className="text-lg opacity-90">Your data is protected with industry-leading encryption</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl">🔐</div>
              <h3 className="font-semibold text-lg">End-to-End Encryption</h3>
              <p className="opacity-75">Military-grade AES-256 encryption for all data at rest and in transit.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="font-semibold text-lg">JWT Authentication</h3>
              <p className="opacity-75">Industry-standard JSON Web Tokens for secure session management.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl">✅</div>
              <h3 className="font-semibold text-lg">Compliance Ready</h3>
              <p className="opacity-75">GDPR, CCPA, and SOC 2 Type II compliant infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
          <p className="text-lg opacity-90 mb-8">Explore our interactive sandbox and test the API</p>
          <Button size="lg" variant="secondary">
            Explore Sandbox
          </Button>
        </div>
      </section>
    </>
  )
}
