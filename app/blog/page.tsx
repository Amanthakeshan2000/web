import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "JWT vs Sessions: Which Should You Choose?",
      excerpt: "Understanding the differences between JWT and session-based authentication and when to use each.",
      date: "Dec 10, 2024",
      readTime: "8 min",
      category: "Authentication",
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Securing Your API: Best Practices in 2025",
      excerpt: "Learn the latest security practices for protecting your APIs and user data.",
      date: "Dec 5, 2024",
      readTime: "10 min",
      category: "Security",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Scaling Authentication for Millions of Users",
      excerpt: "How to architect authentication systems that scale to handle millions of concurrent users.",
      date: "Nov 28, 2024",
      readTime: "12 min",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "OAuth 2.0: A Comprehensive Guide",
      excerpt: "Deep dive into OAuth 2.0 and how to implement it in your applications.",
      date: "Nov 20, 2024",
      readTime: "15 min",
      category: "Authentication",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Multi-Factor Authentication: Implementation Guide",
      excerpt: "Step-by-step guide to implementing MFA in your application for enhanced security.",
      date: "Nov 12, 2024",
      readTime: "9 min",
      category: "Security",
      image: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8290f?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Rate Limiting: Protecting Your API from Abuse",
      excerpt: "Learn how to implement effective rate limiting to protect your API endpoints.",
      date: "Nov 5, 2024",
      readTime: "7 min",
      category: "Security",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Articles</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about authentication best practices, security tips, and industry insights.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Get the latest articles and insights delivered to your inbox.</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  )
}
