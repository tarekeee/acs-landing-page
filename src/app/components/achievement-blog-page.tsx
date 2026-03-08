import { ArrowLeft } from 'lucide-react';
import type { AchievementPost } from '../content/achievement-posts';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';

type AchievementBlogPageProps = {
  post: AchievementPost;
  onBackHome: () => void;
};

export function AchievementBlogPage({ post, onBackHome }: AchievementBlogPageProps) {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F5F3F0] py-14 md:py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 text-sm tracking-wide text-gray-600 hover:text-[#FF5722] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.achievementBlog.backToHome}
            </button>
            <LanguageSwitcher />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">
                {post.section === 'success-stories' ? t.achievementBlog.successStory : t.achievementBlog.memberAchievement}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter mb-4">{post.title}</h1>
              <p className="text-sm md:text-base tracking-wide text-gray-600">{post.subtitle}</p>
            </div>

            <div className="lg:col-span-5 lg:text-right">
              <div className="text-sm tracking-wide text-gray-500 font-medium mb-2">{t.achievementBlog.published}</div>
              <p className="text-lg text-gray-700 mb-1">{post.publishDate}</p>
              <p className="text-sm text-gray-600">{t.achievementBlog.by} {post.author}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              {post.coverImage ? (
                <div className="aspect-[4/3] overflow-hidden bg-[#F5F3F0]">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-[#F5F3F0] flex items-center justify-center">
                  <div className="text-8xl">{post.emoji ?? '⭐'}</div>
                </div>
              )}
            </div>

            <article className="lg:col-span-7">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{post.excerpt}</p>

              <div className="space-y-6 border-t border-black/10 pt-8">
                {post.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-[17px] leading-8 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
