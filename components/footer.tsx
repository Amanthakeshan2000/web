import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#003286] text-white py-12 md:py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003286 0%, #004BA8 50%, #002862 100%)' }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs shadow-lg backdrop-blur-sm">
                🔐
              </div>
              <span className="text-white">AuthAPI</span>
            </div>
            <p className="text-sm text-white/80">Enterprise-grade user authentication for developers.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-white/90">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/features" className="hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-white/90">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-white/90">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-center text-white/70">© 2025 AuthAPI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
