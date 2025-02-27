import React, { useState, useEffect } from 'react';
import { AlertTriangle, Users, TrendingUp, Award, ArrowRight, Utensils, HandHeart, Share2 } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Food Blessed',
        text: 'Join us in reducing food waste and feeding communities!',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Check us out on social media @FoodBlessed!');
    }
  };

  const handleJoinMovement = () => {
    // Scroll to Get Involved section
    scrollToSection('get-involved');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'impact', label: 'Impact' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'get-involved', label: 'Get Involved' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-xl font-bold text-green-700 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              FoodBlessed
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-600 hover:text-green-700 transition-colors ${activeSection === item.id ? 'text-green-700 font-semibold' : ''
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className={`px-4 pt-32 pb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          Food Blessed
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          End Food Waste, Feed Communities
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="bg-red-100 p-4 rounded-lg flex items-center gap-2 w-full max-w-2xl">
            <AlertTriangle className="text-red-500 flex-shrink-0" />
            <p className="text-red-700">Over 50% of edible food in Canada is wasted each year</p>
          </div>
          <button
            onClick={handleJoinMovement}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Join The Movement
          </button>
        </div>
      </header>

      {/* Impact Stats */}
      <section id="impact" className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <StatsCard
            icon={<Users className="w-12 h-12 text-green-600" />}
            title="200+ Partners"
            description="Toronto businesses already participating"
          />
          <StatsCard
            icon={<TrendingUp className="w-12 h-12 text-green-600" />}
            title="80% Growth"
            description="In business reputation after joining"
          />
          <StatsCard
            icon={<Award className="w-12 h-12 text-green-600" />}
            title="Triple Impact"
            description="Reduce waste, feed communities, fight climate change"
          />
        </div>
      </section>

      {/* Psychology Principles */}
      <section id="psychology" className="px-4 py-16 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">The Psychology Behind Food Blessed</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PsychologyCard
              title="Social Norms"
              description="People are more likely to take action when they see others doing the same. Join 200+ Toronto businesses already making a difference."
              bgColor="bg-orange-50"
            />
            <PsychologyCard
              title="Loss Aversion"
              description="Every wasted meal could have fed someone in need. Don't lose the opportunity to make a difference."
              bgColor="bg-blue-50"
            />
            <PsychologyCard
              title="Commitment & Consistency"
              description="Take the pledge to reduce food waste. Small initial actions lead to long-term sustainable habits."
              bgColor="bg-purple-50"
            />
            <PsychologyCard
              title="Incentives & Rewards"
              description="Receive tax benefits, public recognition, and sustainability certifications for your contribution."
              bgColor="bg-green-50"
            />
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">How You Can Help</h2>
          <div className="space-y-6">
            <ActionCard
              icon={<Utensils className="w-8 h-8 text-green-600" />}
              title="Donate Food"
              description="Restaurants, grocers, and individuals can sign up to donate surplus food"
              onClick={() => window.open('mailto:info@foodblessed.org?subject=Food Donation Inquiry')}
            />
            <ActionCard
              icon={<HandHeart className="w-8 h-8 text-green-600" />}
              title="Volunteer"
              description="Help with food pickups, deliveries, or community outreach"
              onClick={() => window.open('mailto:info@foodblessed.org?subject=Volunteer Inquiry')}
            />
            <ActionCard
              icon={<Share2 className="w-8 h-8 text-green-600" />}
              title="Spread the Word"
              description="Share this initiative using #FoodBlessed"
              onClick={handleShare}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-green-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-green-100">Join us in creating a more sustainable Toronto</p>
          <button
            onClick={() => window.open('mailto:info@foodblessed.org')}
            className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            Follow us @FoodBlessed • Contact:
            <a
              href="mailto:info@foodblessed.org"
              className="text-green-700 hover:text-green-800 ml-1"
            >
              info@foodblessed.org
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component for stats cards
const StatsCard = ({ icon, title, description }) => (
  <div className="bg-green-50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for psychology principle cards
const PsychologyCard = ({ title, description, bgColor }) => (
  <div className={`${bgColor} p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl`}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for action cards
const ActionCard = ({ icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
  >
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <ArrowRight className="w-6 h-6 text-green-600 ml-auto" />
  </div>
);

export default App;