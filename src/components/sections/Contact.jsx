import React from 'react';
import Favicon from '../../assets/img/favicon-cognicise.png';

const ContactItem = ({ icon, title, text, link, iconSrc }) => (
  <div className="flex items-center p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
      {iconSrc ? (
        <img src={iconSrc} alt={`${title} icon`} className="w-6 h-6"/>
      ) : (
        <i className={`fas fa-${icon} text-primary`}></i>
      )}
    </div>
    <div>
      <h3 className="font-semibold text-secondary">{title}</h3>
      {link ? (
        <a href={link} 
           className="text-accent hover:text-primary transition-colors"
           target="_blank"
           rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span className="text-accent">{text}</span>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Conecta con Cognicise
              </h2>
              <p className="text-accent mb-8">
                ¿Tienes preguntas sobre Cognicise o quieres saber más sobre cómo apoyar el proyecto? 
                Estamos aquí para ayudarte.
              </p>
              
              <div className="space-y-6">
                {/* Email */}
                <ContactItem
                  iconSrc="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                  title="Email"
                  text="cogniciseapp@gmail.com"
                  link="mailto:cogniciseapp@gmail.com"
                />

                {/* Instagram */}
                <ContactItem
                  iconSrc="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  title="Instagram"
                  text="@cognicise.app"
                  link="https://instagram.com/cognicise.app"
                />

                {/* Web */}
                <ContactItem
                  iconSrc={Favicon}
                  title="Web"
                  text="cognicise.app"
                  link="https://cognicise.app"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;