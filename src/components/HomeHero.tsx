
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Users } from 'lucide-react';

const HomeHero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., newsletter signup)
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[#f4f5f7]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bloom into a</span>{' '}
                <span className="block text-[#0052CC] xl:inline">skilled developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Unlock your coding potential with our immersive live classes, 
                hands-on projects, and industry-focused curriculum. Join Delhi's 
                premier coding institute today.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#0052CC] focus:border-[#0052CC]"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full py-3 px-4 rounded-md shadow bg-[#0052CC] text-white font-medium hover:bg-[#0747A6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0052CC]"
                    >
                      Get Course Info
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  We care about your data. Read our{' '}
                  <Link to="/legal/privacy" className="font-medium text-gray-700 hover:text-[#0052CC]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>

              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0052CC] hover:bg-[#0747A6]"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/success-stories"
                  className="inline-flex items-center justify-center px-5 py-3 border border-[#0052CC] text-base font-medium rounded-md text-[#0052CC] bg-white hover:bg-gray-100"
                >
                  Success Stories
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-white to-[#e6effc] flex items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/add7e0a1-0cf3-4da0-abed-55deb8d78c9f.png" 
                alt="Bitwise School of Technology Logo" 
                className="h-24"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-[#f4f5f7] rounded-md">
                <div className="bg-[#0052CC] rounded-full p-2">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Live Coding Classes</h3>
                  <p className="text-sm text-gray-600">Interactive sessions with industry experts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-[#f4f5f7] rounded-md">
                <div className="bg-[#0052CC] rounded-full p-2">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Multiple Tech Stacks</h3>
                  <p className="text-sm text-gray-600">From C++ to Full Stack Development</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-[#f4f5f7] rounded-md">
                <div className="bg-[#0052CC] rounded-full p-2">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">1:1 Mentorship</h3>
                  <p className="text-sm text-gray-600">Personalized guidance and mock interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
