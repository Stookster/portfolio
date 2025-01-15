import { Mail, Linkedin, Github } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Longer delay to ensure scroll is complete
            setTimeout(() => {
              setIsHighlighted(true);
              // Keep the highlight visible for even longer
              setTimeout(() => setIsHighlighted(false), 6000);
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className={`py-20 transition-colors duration-1000 ${
        isHighlighted ? 'bg-accent/20' : 'bg-muted'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-secondary text-center max-w-2xl mb-8">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex space-x-6">
            <a
              href="mailto:ricsth91@gmail.com"
              className="p-3 rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/richard-stöök-703284105"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ricsto91"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-accent hover:bg-accent hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
