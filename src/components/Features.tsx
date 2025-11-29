import { FileText, Upload, Play, Users, History } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Create & Store Test Cases",
    description: "Organize your test cases with an intuitive interface. Add descriptions, steps, and expected results with ease."
  },
  {
    icon: Upload,
    title: "Import & Export",
    description: "Store your test cases in Git for version control. Leverage any LLM to work with your test cases, with seamless import/export capabilities."
  },
  {
    icon: Play,
    title: "Execute Test Runs",
    description: "Execute tests individually or in batches with unlimited concurrent test runs."
  },
  {
    icon: Users,
    title: "Unlimited Users",
    description: "Invite your entire team without restrictions."
  },
  {
    icon: History,
    title: "Complete History",
    description: "Access unlimited test run history. Analyze trends and track quality improvements over time."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block text-accent">
              Streamline Testing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete test management solution designed for modern development teams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
