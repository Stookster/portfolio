import { Check } from "lucide-react";

const Skills = () => {
  const skills = [
    "Test Automation",
    "Manual Testing",
    "API Testing",
    "Performance Testing",
    "Test Planning",
    "Bug Tracking",
    "Test Documentation",
    "Agile Methodologies",
    "Test Strategy Development",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-accent/20 transition-colors w-full max-w-md"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
              <span className="text-secondary">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;