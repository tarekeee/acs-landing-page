import { ArrowUpRight } from 'lucide-react';
import { achievementPosts } from '../content/achievement-posts';

type AchievementSectionProps = {
  onOpenPost: (path: string) => void;
};

export function AchievementSection({ onOpenPost }: AchievementSectionProps) {
  const successStories = achievementPosts.filter((post) => post.section === 'success-stories');
  const memberProjects = achievementPosts.filter((post) => post.section === 'achievements');

  return (
    <section id="achievements" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">CELEBRATING SUCCESS</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter">
              ACHIEVEMENT
              <br />
              GALLERY
            </h2>
          </div>
          <div className="hidden md:block hover:rotate-45 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="w-8 h-8 text-[#FF5722]" />
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Explore memorable achievements and real projects built by our members — showing that anyone can succeed!
        </p>

        {/* Success Stories */}
        <div className="mb-12">
          <div className="text-sm tracking-wide text-gray-500 mb-6 font-medium">SUCCESS STORIES</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <button
                key={story.slug}
                type="button"
                onClick={() => onOpenPost(story.path)}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-500 flex items-center justify-center relative">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl mb-1 tracking-tight group-hover:text-[#FF5722] transition-colors">{story.title}</h3>
                  <p className="text-sm text-gray-500 tracking-wide font-medium">{story.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Member Projects */}
        <div>
          <div className="text-sm tracking-wide text-gray-500 mb-8 font-medium">MEMBER PROJECTS · DIGITAL WALL</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberProjects.map((project) => (
              <button
                type="button"
                onClick={() => onOpenPost(project.path)}
                key={project.slug}
                className="bg-[#F5F3F0] p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              >
                {/* Project thumbnail placeholder */}
                <div className="aspect-video bg-white rounded-xl mb-4 flex items-center justify-center group-hover:bg-[#FF5722]/10 transition-colors duration-300">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{project.emoji ?? '💻'}</div>
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#FF5722] transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-gray-500">by {project.author}</span>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.excerpt}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 bg-[#F5F3F0] p-10 rounded-3xl hover:shadow-xl transition-shadow duration-500">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              "These achievements prove that anyone can succeed. From competition wins to personal projects, every member contributes to our collective success story."
            </p>
            <div className="text-sm tracking-wide text-gray-500 font-medium">— ACS Community</div>
          </div>
        </div>
      </div>
    </section>
  );
}
