import { blogPosts } from "../data/content";
import { ArrowUpRightIcon } from "../components/ui/icons";

export function BlogTeaser() {
  return (
    <section className="section-y">
      <div className="container-content">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">Insights</h2>
          <span className="text-xs text-text-muted">Coming soon</span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="glass-card flex flex-col justify-between rounded-lg p-6 opacity-80"
              aria-disabled="true"
            >
              <div>
                <h3 className="font-display text-base font-semibold text-text-primary">{post.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-text-muted">
                Draft in progress <ArrowUpRightIcon width={14} height={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
