const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Richard Stöök
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6">
              Technical Software Tester
            </h2>
            <p className="text-secondary max-w-lg mb-8">
              Passionate about ensuring software quality and reliability through comprehensive testing methodologies. Based in Örebro, Sweden.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end animate-fade-up">
            <img
              src="/lovable-uploads/c9489222-e6bc-4d8d-862b-129f9eab3873.png"
              alt="Richard Stöök"
              className="w-64 md:w-80 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;