const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary">About Me</h2>
            <p className="text-secondary text-lg leading-relaxed">
              As a Technical Software Tester based in Örebro, Sweden, I bring a meticulous and systematic approach to ensuring software quality. With a keen eye for detail and a passion for delivering exceptional user experiences, I specialize in both manual and automated testing methodologies.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              My expertise includes developing comprehensive test strategies, implementing automated testing frameworks, and collaborating closely with development teams to maintain high quality standards throughout the software development lifecycle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-muted px-4 py-2 rounded-lg">
                <span className="text-primary font-medium">5+ Years Experience</span>
              </div>
              <div className="bg-muted px-4 py-2 rounded-lg">
                <span className="text-primary font-medium">Test Automation</span>
              </div>
              <div className="bg-muted px-4 py-2 rounded-lg">
                <span className="text-primary font-medium">Quality Assurance</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/professional-portfolio-haven/lovable-uploads/c9489222-e6bc-4d8d-862b-129f9eab3873.png"
                alt="Richard Stöök"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-accent/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;