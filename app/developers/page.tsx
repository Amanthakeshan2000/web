import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, BookOpen, GitBranch } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DevelopersPage() {
  const sdks = ["PHP", "Node.js", "Python", ".NET", "Java", "Flutter", "React"]

  const resources = [
    {
      icon: Code,
      title: "API Reference",
      description: "Complete REST API documentation with examples",
    },
    {
      icon: BookOpen,
      title: "Guides & Tutorials",
      description: "Step-by-step integration guides for common scenarios",
    },
    {
      icon: GitBranch,
      title: "Code Examples",
      description: "Ready-to-use code samples in your language",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Developer Resources</h1>
            <p className="text-lg text-muted-foreground">
              Get started in minutes with clear guides and comprehensive documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Quick Start Guide</h2>

          <div className="space-y-6">
            {[
              { step: "1", title: "Get API Key", desc: "Sign up and generate your API key" },
              { step: "2", title: "Install SDK", desc: "Choose your language and install the SDK" },
              { step: "3", title: "Test Authentication", desc: "Use our sandbox to test endpoints" },
              { step: "4", title: "Deploy", desc: "Go live with your application" },
            ].map((item, i) => (
              <Card key={i} className="p-6 md:p-8 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Choose Your SDK</h2>

          <Tabs defaultValue={sdks[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {sdks.map((sdk) => (
                <TabsTrigger key={sdk} value={sdk} className="text-xs md:text-sm">
                  {sdk}
                </TabsTrigger>
              ))}
            </TabsList>

            {sdks.map((sdk) => (
              <TabsContent key={sdk} value={sdk} className="space-y-4">
                <Card className="p-8">
                  <p className="text-muted-foreground mb-6">Installation command:</p>
                  <pre className="bg-secondary text-secondary-foreground p-4 rounded-lg overflow-x-auto text-sm mb-6">
                    {`npm install @SureID/${sdk.toLowerCase()}`}
                  </pre>

                  <p className="text-muted-foreground mb-4">Quick example:</p>
                  <pre className="bg-secondary text-secondary-foreground p-4 rounded-lg text-sm mb-6 overflow-x-auto">
                    {`const SureID = require('@SureID/${sdk.toLowerCase()}');

const client = new SureID({
  apiKey: 'your_api_key'
});

// Register user
await client.auth.register({
  email: 'user@example.com',
  password: 'secure_password'
});`}
                  </pre>

                  {/* <Button>View Full Documentation</Button> */}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, i) => {
              const Icon = resource.icon
              return (
                <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sandbox */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Our Sandbox</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Test API endpoints without creating a real account. Perfect for learning and prototyping.
              </p>
              <Link href="/contact">
                <Button size="lg">Access Sandbox</Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                alt="Developer Sandbox"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
