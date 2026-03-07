import { ArrowUpRight } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'DR. SARAH CHEN',
      role: 'FACULTY ADVISOR',
      image: 'https://images.unsplash.com/photo-1655814563963-0fe0a7d6c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNjaWVudGlzdCUyMHJlc2VhcmNoZXJ8ZW58MXx8fHwxNzcyNTI4NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'JAMES RODRIGUEZ',
      role: 'PRESIDENT',
      image: 'https://images.unsplash.com/photo-1691935152210-35ae500d91d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc2NpZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjU3MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'EMILY NAKAMURA',
      role: 'VICE PRESIDENT',
      image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwc2NpZW50aXN0fGVufDF8fHx8MTc3MjU3MTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="team" className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">OUR TEAM</div>
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight">
              LEADERSHIP
              <br />
              TEAM
            </h2>
          </div>
          <div className="hidden md:block hover:rotate-45 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="w-8 h-8 text-[#FF5722]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div>
                <h3 className="text-xl mb-1 tracking-tight group-hover:text-[#FF5722] transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-500 tracking-wide font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#F5F3F0] p-12 rounded-3xl hover:shadow-xl transition-shadow duration-500">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              "Our team is dedicated to fostering a collaborative environment where students can explore their passion for chemistry and make meaningful contributions to the scientific community."
            </p>
            <div className="text-sm tracking-wide text-gray-500 font-medium">— ACS Leadership Committee</div>
          </div>
        </div>
      </div>
    </section>
  );
}