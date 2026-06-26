import Link from 'next/link';

export const metadata = {
  title: 'Digital Marketing Blog | DigiUniversal — Tips, Guides & Insights',
  description: 'Read the latest digital marketing tips, SEO guides, Google Ads strategies and social media insights from DigiUniversal. Free resources for businesses worldwide.',
};

const blogPosts = [
  {
    category: 'SEO',
    categoryColor: 'bg-green-500/10 text-green-400',
    title: 'How to Rank on Google Page 1 in 2024 — Complete SEO Guide',
    excerpt: 'Learn the exact SEO strategies we use to get our clients on Page 1 of Google. From keyword research to link building — step by step.',
    readTime: '8 min read',
    date: 'June 10, 2024',
    slug: 'how-to-rank-on-google-page-1',
    icon: '🔍',
  },
  {
    category: 'Google Ads',
    categoryColor: 'bg-blue-500/10 text-blue-400',
    title: 'Google Ads vs Meta Ads — Which is Better for Your Business?',
    excerpt: 'Not sure whether to invest in Google Ads or Meta Ads? We break down the pros, cons and best use cases for each platform.',
    readTime: '6 min read',
    date: 'June 5, 2024',
    slug: 'google-ads-vs-meta-ads',
    icon: '🎯',
  },
  {
    category: 'Social Media',
    categoryColor: 'bg-pink-500/10 text-pink-400',
    title: 'Instagram Reels Strategy That Actually Grows Your Business in 2024',
    excerpt: 'Stop posting random content. Here is the exact Reels formula we use to get 5x engagement growth for our clients in 90 days.',
    readTime: '5 min read',
    date: 'May 28, 2024',
    slug: 'instagram-reels-strategy-2024',
    icon: '📱',
  },
  {
    category: 'Performance Marketing',
    categoryColor: 'bg-purple-500/10 text-purple-400',
    title: 'What is Performance Marketing and Why Every Business Needs It',
    excerpt: 'Performance marketing is the future of digital advertising. Learn what it is, how it works and how to get started with any budget.',
    readTime: '7 min read',
    date: 'May 20, 2024',
    slug: 'what-is-performance-marketing',
    icon: '📈',
  },
  {
    category: 'E-Commerce',
    categoryColor: 'bg-yellow-500/10 text-yellow-400',
    title: 'How to Grow Your Shopify Store from ₹0 to ₹5L/Month',
    excerpt: 'A real case study of how we helped an e-commerce client grow their Shopify store revenue using SEO, Google Ads and Meta Ads together.',
    readTime: '10 min read',
    date: 'May 15, 2024',
    slug: 'grow-shopify-store-revenue',
    icon: '🛒',
  },
  {
    category: 'SEO',
    categoryColor: 'bg-green-500/10 text-green-400',
    title: 'Local SEO Guide for Small Businesses in India — Rank in Your City',
    excerpt: 'Want more local customers? This guide shows you exactly how to rank for local searches and get more calls and walk-ins from Google.',
    readTime: '6 min read',
    date: 'May 8, 2024',
    slug: 'local-seo-guide-india',
    icon: '📍',
  },
  {
    category: 'Google Ads',
    categoryColor: 'bg-blue-500/10 text-blue-400',
    title: '10 Google Ads Mistakes That Are Wasting Your Budget Right Now',
    excerpt: 'Most businesses lose 40-60% of their ad spend on avoidable mistakes. Here are the top 10 we see most often — and how to fix them.',
    readTime: '7 min read',
    date: 'April 30, 2024',
    slug: 'google-ads-mistakes',
    icon: '⚠️',
  },
  {
    category: 'Real Estate',
    categoryColor: 'bg-orange-500/10 text-orange-400',
    title: 'Digital Marketing for Real Estate — How to Get Quality Property Leads',
    excerpt: 'Real estate marketing is different from other industries. Here is our complete guide to generating consistent, high-quality property leads online.',
    readTime: '9 min read',
    date: 'April 22, 2024',
    slug: 'digital-marketing-real-estate',
    icon: '🏠',
  },
  {
    category: 'Social Media',
    categoryColor: 'bg-pink-500/10 text-pink-400',
    title: 'LinkedIn Marketing Strategy for B2B Businesses in 2024',
    excerpt: 'LinkedIn is the most powerful platform for B2B lead generation. Learn how to use it to generate consistent high-value leads for your business.',
    readTime: '6 min read',
    date: 'April 15, 2024',
    slug: 'linkedin-marketing-strategy-b2b',
    icon: '💼',
  },
];

const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Performance Marketing', 'E-Commerce', 'Real Estate'];

export default function BlogPage() {
  return (
    <main className="dark:bg-[#171F2E] min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
            Free Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Digital Marketing <span className="text-primary-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Actionable tips, real case studies and proven strategies from our team. Learn what actually works — and apply it to your business today.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                cat === 'All'
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-400 mb-4">
                  Featured Post
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
                  How to Choose a Digital Marketing Agency in 2024 — Complete Guide
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                  With thousands of agencies claiming to be the best, how do you choose the right one? This guide gives you a clear checklist to evaluate any agency before signing a contract.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>📅 June 12, 2024</span>
                  <span>⏱️ 12 min read</span>
                </div>
                <Link href="/blog/how-to-choose-digital-marketing-agency" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition">
                  Read Article →
                </Link>
              </div>
              <div className="text-center text-8xl">📖</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary-300 dark:hover:border-primary-500/30 transition group">
                {/* Card Top */}
                <div className="p-6 text-center text-5xl bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
                  {post.icon}
                </div>
                <div className="p-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.categoryColor} mb-3`}>
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 leading-snug group-hover:text-primary-500 transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-primary-300 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-6">📬</div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get Weekly Marketing Tips</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Join 5,000+ business owners who get our weekly digital marketing tips delivered straight to their inbox. Free forever.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-white text-sm focus:outline-none focus:border-primary-400 transition"
            />
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition whitespace-nowrap">
              Subscribe →
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Us to Do This for Your Business?</h2>
          <p className="text-gray-400 mb-8">Reading about it is great. Having experts execute it for you is better. Book a free strategy call today.</p>
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition inline-block">
            Book Free Strategy Call →
          </Link>
        </div>
      </section>

    </main>
  );
}
