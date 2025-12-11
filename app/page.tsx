import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const benefits = [
    {
      icon: Zap,
      title: "Simple Integration",
      description: "Add user registration and login with just a few API calls.",
    },
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "Industry-standard encryption, JWT auth, secure keys.",
    },
    {
      icon: Users,
      title: "API Keys for Every Client",
      description: "Unique keys for safe access and complete control.",
    },
    {
      icon: Zap,
      title: "Scalable for Any Business",
      description: "Handles thousands of requests/second seamlessly.",
    },
    {
      icon: Shield,
      title: "Developer-Friendly",
      description: "Clear docs, code samples, and live sandbox.",
    },
  ]

  const steps = [
    {
      step: 1,
      title: "Register Your App",
      description: "Sign up and get your unique API Key in seconds",
    },
    {
      step: 2,
      title: "Integrate Endpoints",
      description: "Use our REST APIs with your preferred SDK",
    },
    {
      step: 3,
      title: "Authenticate Users",
      description: "Implement secure token-based authentication",
    },
    {
      step: 4,
      title: "Go Live",
      description: "Monitor usage and scale your application",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image with opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4E12AQGwb93QWyloRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691386502549?e=2147483647&v=beta&t=CAn6ylvz9UdSYLaIrfHu8xBlJoUkkmw_krtoKBbT_Q4')`
          }}
        ></div>
        
        {/* Gradient background for better aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/50 to-sky-100/30 dark:from-blue-950/20 dark:via-blue-900/10 dark:to-sky-900/5 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100/80 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
                🚀 Launch Your App Faster
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pretty max-w-5xl text-gray-900 dark:text-white leading-tight">
              Secure User Authentication<br />
              API Platform
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-balance">
              Simple, scalable, and secure authentication solution for modern applications. Integrate powerful registration and login functionality in minutes with our developer-friendly API. Enjoy enterprise-grade security, advanced features, and seamless scalability that grows with your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              {/* <Button size="lg" className="gap-2 w-full sm:w-auto">
                Request API Key
              </Button> */}
              {/* <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Documentation
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SureID?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need for secure user management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Get started in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Start integrating SureID today and build secure authentication in minutes..
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" variant="secondary">
              Request API Key
            </Button> */}
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Developers Worldwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers and companies building secure authentication with SureID
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#003286] mb-2">10K+</div>
              <p className="text-gray-600">Active Developers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#003286] mb-2">50M+</div>
              <p className="text-gray-600">API Requests/Month</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#003286] mb-2">99.9%</div>
              <p className="text-gray-600">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#003286] mb-2">150+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
            <div className="text-2xl font-bold text-gray-800">Company A</div>
            <div className="text-2xl font-bold text-gray-800">Company B</div>
            <div className="text-2xl font-bold text-gray-800">Company C</div>
            <div className="text-2xl font-bold text-gray-800">Company D</div>
          </div> */}
        </div>
      </section>
    </>
  )
}
