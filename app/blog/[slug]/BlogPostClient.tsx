"use client";

import { BlogPost, blogPosts } from "@/lib/blog-posts";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FinalCTA from "@/components/sections/final-cta";
import Script from "next/script";
import { Clock, Tag, ArrowLeft } from "lucide-react";

function InlineCTAForm() {
  return (
    <div className="my-10">
      <iframe
        src="https://link.nooviraai.com/widget/form/HzsyMl4PBCZ2b1myfjf4"
        style={{ width: "100%", border: "none", minHeight: "800px" }}
        
        title="Formulaire de soumission gratuite"
      />
      <Script src="https://link.nooviraai.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}

// ── Inline bold helper ────────────────────────────────────────────────────────
function renderInlineBold(text: string, key: string | number) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span key={key}>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-navy">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
}

// ── Content renderer ─────────────────────────────────────────────────────────
function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let idx = 0;

  function flushList() {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={`ul-${idx}`} className="list-none space-y-2 my-5">
        {listBuffer.map((item, k) => (
          <li key={k} className="flex items-start gap-2 text-secondary text-base leading-relaxed">
            <svg className="w-4 h-4 text-success flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{renderInlineBold(item, k)}</span>
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
  }

  for (let i = 0; i < lines.length; i++) {
    idx = i;
    const line = lines[i];

    if (line.trim() === "[CTA_FORM]") {
      flushList();
      elements.push(<InlineCTAForm key={`cta-${i}`} />);
      continue;
    }

    const imgMatch = line.trim().match(/^\[IMAGE:([^|]+)\|([^|]+)\|([^\]]+)\]$/);
    if (imgMatch) {
      flushList();
      const [, url, alt, caption] = imgMatch;
      elements.push(
        <figure key={`img-${i}`} className="my-8 rounded-2xl overflow-hidden border border-card-border">
          <img src={url} alt={alt} className="w-full h-64 sm:h-80 object-cover" />
          <figcaption className="px-5 py-3 bg-muted text-xs text-secondary italic text-center">
            {caption}
          </figcaption>
        </figure>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="font-heading font-bold text-2xl sm:text-3xl text-navy mt-12 mb-4 leading-tight">
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="font-heading font-bold text-xl text-navy mt-8 mb-3 leading-snug">
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    if (line.startsWith("---")) {
      flushList();
      elements.push(<hr key={i} className="my-8 border-card-border" />);
      continue;
    }

    if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
      continue;
    }

    if (line.trim() === "") {
      flushList();
      elements.push(<div key={i} className="mb-2" />);
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      flushList();
      elements.push(
        <p key={i} className="font-semibold text-navy mb-3 mt-2">
          {line.slice(2, -2)}
        </p>
      );
      continue;
    }

    flushList();
    elements.push(
      <p key={i} className="text-secondary text-base leading-relaxed mb-4">
        {renderInlineBold(line, i)}
      </p>
    );
  }

  flushList();
  return <>{elements}</>;
}

// ── Page client shell ─────────────────────────────────────────────────────────
export default function BlogPostClient({ post }: { post: BlogPost }) {
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-5">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-navy text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </a>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={10} />
              {post.category}
            </span>
            <span className="text-secondary text-xs">
              {new Date(post.date).toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-secondary text-xs flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-navy leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-secondary text-lg leading-relaxed mb-8 border-l-4 border-accent pl-5 italic">
            {post.excerpt}
          </p>

          <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/8]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article>
            <BlogContent content={post.content} />
          </article>

        </div>

        {otherPosts.length > 0 && (
          <div className="max-w-5xl mx-auto px-5 mt-16">
            <h2 className="font-heading font-bold text-2xl text-navy mb-6">Autres articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-card-border rounded-xl overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <img src={p.coverImage} alt={p.title} className="w-full h-36 object-cover" />
                  <div className="p-4">
                    <p className="text-xs text-secondary mb-1">{p.category}</p>
                    <h3 className="font-semibold text-navy text-sm leading-snug">{p.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>
      <FinalCTA />
      <Footer />
    </>
  );
}
