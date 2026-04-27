import { blogPosts } from "@/lib/blog-posts";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Blog — Entretiens Ménager KC | Conseils nettoyage Montréal",
  description: "Articles et conseils sur l'entretien ménager, le nettoyage résidentiel et commercial à Montréal et en Montérégie.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <div className="max-w-5xl mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Blog
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-navy leading-tight mb-4">
              Conseils & astuces
            </h1>
            <p className="text-secondary text-lg max-w-xl mx-auto">
              Tout ce que vous devez savoir sur l&apos;entretien ménager, les produits et les bonnes pratiques à Montréal et en Montérégie.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-card-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-accent text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag size={10} />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-secondary mb-3">
                    <span>{new Date(post.date).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-navy text-base leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
