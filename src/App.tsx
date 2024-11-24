import React from 'react';
import { Brain, Users, ClipboardCheck, BookOpen, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import ServiceCard from './components/ServiceCard';

function App() {
  const services = [
    {
      title: 'About Us',
      description: 'Learn about our mission and values in mental healthcare.',
      icon: Brain,
      href: '/about'
    },
    {
      title: 'Our Psychologists',
      description: 'Meet our team of experienced mental health professionals.',
      icon: Users,
      href: '/psychologists'
    },
    {
      title: 'Personality Quiz',
      description: 'Discover more about yourself with our personality assessment.',
      icon: ClipboardCheck,
      href: '/quiz'
    },
    {
      title: 'Articles',
      description: 'Expert insights on mental health and well-being.',
      icon: BookOpen,
      href: '/articles'
    },
    {
      title: 'Success Stories',
      description: 'Real stories from people who transformed their lives.',
      icon: MessageCircle,
      href: '/stories'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto pt-16 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Journey to Mental Well-being Starts Here
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Professional psychological support tailored to your unique needs.
            Take the first step towards a healthier mind today.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/quiz"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Take Our Quiz
            </a>
            <a
              href="/psychologists"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Schedule a consultation
            with one of our experienced psychologists today.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}

export default App;