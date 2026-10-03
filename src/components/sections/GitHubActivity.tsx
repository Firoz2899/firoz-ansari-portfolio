import { GitCommit, GitPullRequest, Star, BookMarked } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { githubActivity } from '@/data/portfolio';

const stats = [
  { icon: GitCommit, label: 'Total Commits', value: githubActivity.totalCommits, color: 'text-accent-300' },
  { icon: BookMarked, label: 'Repositories', value: githubActivity.totalRepos, color: 'text-signal' },
  { icon: Star, label: 'Total Stars', value: githubActivity.totalStars, color: 'text-gold' },
  { icon: GitPullRequest, label: 'Pull Requests', value: githubActivity.totalPRs, color: 'text-rose-400' },
];

const contributionColors = [
  'bg-white/5',
  'bg-accent-900/60',
  'bg-accent-700/70',
  'bg-accent-500/80',
  'bg-accent-400',
];

function getContributionColor(level: number) {
  if (level === 0) return contributionColors[0];
  if (level <= 1) return contributionColors[1];
  if (level <= 2) return contributionColors[2];
  if (level <= 3) return contributionColors[3];
  return contributionColors[4];
}

export default function GitHubActivity() {
  const weeks = 13;
  const daysPerWeek = 7;
  const total = weeks * daysPerWeek;
  const data = githubActivity.contributionGraph.slice(0, total);

  return (
    <section id="github" className="relative section-pad py-24 md:py-32">
      <div className="glow-orb h-[300px] w-[300px] bg-accent-500/5 top-1/4 left-[-130px]" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Open source contributions"
          description="My coding activity over the past quarter"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div className="glass-card p-5 md:p-6 text-center transition-all hover:border-accent-400/20 hover:-translate-y-1">
                <stat.icon className={`h-6 w-6 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-xs text-ink-300">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contribution graph */}
        <ScrollReveal delay={200}>
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-white">
                Contribution Graph
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-ink-400">Less</span>
                {contributionColors.map((color, i) => (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-sm ${color}`}
                  />
                ))}
                <span className="text-xs text-ink-400">More</span>
              </div>
            </div>

            <div className="flex gap-[3px] overflow-x-auto pb-2">
              {Array.from({ length: weeks }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {Array.from({ length: daysPerWeek }).map((_, dayIndex) => {
                    const idx = weekIndex * daysPerWeek + dayIndex;
                    const level = data[idx] ?? 0;
                    return (
                      <div
                        key={dayIndex}
                        className={`h-3 w-3 rounded-sm ${getContributionColor(level)} transition-all hover:ring-1 hover:ring-accent-300/50`}
                        title={`${level} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recent repos */}
        <ScrollReveal delay={300}>
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white mb-5">Popular Repositories</h3>
            <div className="space-y-3">
              {githubActivity.recentRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3 transition-all hover:border-accent-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <BookMarked className="h-4 w-4 text-accent-400 flex-shrink-0" />
                    <span className="font-mono text-sm text-ink-100 truncate">
                      {githubActivity.username}/{repo.name}
                    </span>
                    <span className="hidden sm:inline-block rounded-full bg-accent-400/10 border border-accent-400/20 px-2.5 py-0.5 text-xs text-accent-300">
                      {repo.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 text-gold" />
                      <span className="text-sm text-ink-200">{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitPullRequest className="h-3.5 w-3.5 text-ink-400" />
                      <span className="text-sm text-ink-200">{repo.forks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
