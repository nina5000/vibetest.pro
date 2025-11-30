import { FileText, Play, GitBranch, Share2, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Essential Test Case Management",
    description: "Create and organize test cases with a clean, minimal interface. Add steps, expected results, and attachments — nothing you don't need."
  },
  {
    icon: Play,
    title: "Execute Test Runs",
    description: "Run tests individually or in batches. Track results in real-time with unlimited concurrent test runs."
  },
  {
    icon: GitBranch,
    title: "Git Storage & AI-Ready",
    description: "Store test cases in Git for version control. Export in formats compatible with LLMs for AI-assisted test generation and analysis."
  },
  {
    icon: Share2,
    title: "Test Marathons",
    description: "Our standout feature: share test runs via simple links. Anyone can participate without accounts — perfect for cross-team collaboration and pre-release validation."
  },
  {
    icon: Users,
    title: "Unlimited Users & History",
    description: "No per-seat limits. Invite your entire organization. Complete test run history stored automatically for trend analysis."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core Features:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
