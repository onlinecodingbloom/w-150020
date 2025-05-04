
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import { Play } from 'lucide-react';

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Microsoft',
      avatar: '/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png',
      testimonial: 'Coding Bloom transformed my career completely. Their hands-on approach to teaching DSA helped me crack my dream job interview at Microsoft.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // replace with actual testimonial video
    },
    {
      name: 'Rahul Verma',
      role: 'Full Stack Developer',
      company: 'Infosys',
      avatar: '/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png',
      testimonial: 'The mentors at Coding Bloom are incredible. They are always available to help and the mock interviews they conducted gave me the confidence to excel.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // replace with actual testimonial video
    },
    {
      name: 'Anjali Gupta',
      role: 'Frontend Developer',
      company: 'TCS',
      avatar: '/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png',
      testimonial: 'I joined with zero coding experience, and now I\'m working as a developer at TCS. The live coding sessions and practice platforms were game changers for me.',
    },
    {
      name: 'Vikram Malhotra',
      role: 'Backend Developer',
      company: 'Amazon',
      avatar: '/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png',
      testimonial: 'The practical approach and industry-focused curriculum at Coding Bloom made all the difference. I received three job offers within a month of completing the course!',
    },
    {
      name: 'Neha Patel',
      role: 'Data Analyst',
      company: 'IBM',
      avatar: '/lovable-uploads/761e2d9d-3a1c-458b-9848-dd1d7b42d1b9.png',
      testimonial: 'The DSA course at Coding Bloom gave me a strong foundation that helps me daily in my work as a data analyst. The instructors were knowledgeable and supportive.',
    },
    {
      name: 'Arjun Reddy',
      role: 'Mobile App Developer',
      company: 'Wipro',
      avatar: '/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png',
      testimonial: 'Switching careers was challenging, but Coding Bloom made it seamless. Their placement assistance team worked tirelessly to help me land my first tech role.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // replace with actual testimonial video
    }
  ];
  
  const placements = [
    {
      name: 'Aditya Kumar',
      role: 'Software Development Engineer',
      company: 'Amazon',
      package: '32 LPA',
      batch: 'DSA Advanced 2022',
      image: '/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png'
    },
    {
      name: 'Meera Singh',
      role: 'Full Stack Developer',
      company: 'Microsoft',
      package: '28 LPA',
      batch: 'Full Stack Web Dev 2022',
      image: '/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png'
    },
    {
      name: 'Rohan Gupta',
      role: 'Software Engineer',
      company: 'Google',
      package: '35 LPA',
      batch: 'DSA Advanced 2021',
      image: '/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png'
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Developer',
      company: 'Flipkart',
      package: '24 LPA',
      batch: 'Java Full Course 2022',
      image: '/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png'
    },
    {
      name: 'Arjun Singh',
      role: 'Frontend Developer',
      company: 'Myntra',
      package: '18 LPA',
      batch: 'Full Stack Web Dev 2021',
      image: '/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png'
    },
    {
      name: 'Sneha Verma',
      role: 'Mobile Developer',
      company: 'Swiggy',
      package: '22 LPA',
      batch: 'Full Stack Web Dev 2022',
      image: '/lovable-uploads/761e2d9d-3a1c-458b-9848-dd1d7b42d1b9.png'
    },
    {
      name: 'Kiran Reddy',
      role: 'Data Engineer',
      company: 'IBM',
      package: '16 LPA',
      batch: 'DSA Fundamentals 2022',
      image: '/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png'
    },
    {
      name: 'Vishal Malik',
      role: 'DevOps Engineer',
      company: 'Infosys',
      package: '14 LPA',
      batch: 'Full Stack Web Dev 2022',
      image: '/lovable-uploads/a1ef45a0-dde4-4b30-856f-8032dd58247e.png'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Success Stories
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">
              See how Coding Bloom has transformed careers and opened doors for our students
            </p>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-4">
              <button 
                onClick={() => setActiveTab('testimonials')} 
                className={`px-4 py-2 font-medium ${activeTab === 'testimonials' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Video Testimonials
              </button>
              <button 
                onClick={() => setActiveTab('placement')} 
                className={`px-4 py-2 font-medium ${activeTab === 'placement' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Placement Wall
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        {activeTab === 'testimonials' && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                  Hear directly from our alumni about their experience at Coding Bloom and how our 
                  programs helped them achieve their career goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Student Journey</h3>
                <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
                      alt="Featured student journey" 
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white">
                        <Play className="h-10 w-10 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-2">From Zero to Google: Rohan's Coding Journey</h4>
                    <p className="text-gray-600">
                      Rohan joined Coding Bloom with no prior programming experience and landed a job at Google within 8 months.
                      Watch his inspiring journey and learn how he overcame challenges along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Placement Wall Section */}
        {activeTab === 'placement' && (
          <section id="placement" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                  Our students have been placed in some of the top companies across India and globally. 
                  Here's a glimpse of our recent placements.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Students Work At</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                  <img src="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png" alt="Company Logo" className="h-12 object-contain" />
                  <img src="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png" alt="Company Logo" className="h-12 object-contain" />
                  <img src="/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png" alt="Company Logo" className="h-12 object-contain" />
                  <img src="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png" alt="Company Logo" className="h-12 object-contain" />
                  <img src="/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png" alt="Company Logo" className="h-12 object-contain" />
                  <img src="/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png" alt="Company Logo" className="h-12 object-contain" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Placements</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {placements.map((placement, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img 
                            src={placement.image} 
                            alt={placement.name} 
                            className="h-16 w-16 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-lg">{placement.name}</h4>
                            <p className="text-purple-600">{placement.role}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Company:</span>
                            <span className="font-medium">{placement.company}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Package:</span>
                            <span className="font-medium text-green-600">{placement.package}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Batch:</span>
                            <span className="font-medium">{placement.batch}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">Placement Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-4xl font-bold text-purple-600">96%</p>
                      <p className="text-gray-600">Placement Rate</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-purple-600">12 LPA</p>
                      <p className="text-gray-600">Avg. Package</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-purple-600">35 LPA</p>
                      <p className="text-gray-600">Highest Package</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-purple-600">120+</p>
                      <p className="text-gray-600">Hiring Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="bg-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Begin Your Success Story
            </h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto">
              Join Coding Bloom today and write the next success story we feature
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50"
              >
                Explore Courses
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-800"
              >
                Book a Free Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessStories;
