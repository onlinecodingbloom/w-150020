
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, FileText, Book, Video } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogResources = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [searchTerm, setSearchTerm] = useState('');
  
  const articles = [
    {
      id: 1,
      title: 'Mastering Data Structures: A Complete Guide',
      excerpt: 'Learn about the most important data structures every programmer should know and how to implement them efficiently.',
      author: 'Amit Sharma',
      date: 'June 15, 2023',
      category: 'Tutorial',
      image: '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'
    },
    {
      id: 2,
      title: 'MERN Stack vs MEAN Stack: Which is Right for You?',
      excerpt: 'Compare the two popular full-stack development frameworks and understand which one suits your project needs better.',
      author: 'Priya Verma',
      date: 'May 28, 2023',
      category: 'Technology',
      image: '/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png'
    },
    {
      id: 3,
      title: 'Cracking the Coding Interview: Top Tips',
      excerpt: 'Prepare for your next technical interview with these proven strategies from our placement experts.',
      author: 'Rahul Singh',
      date: 'April 12, 2023',
      category: 'Career',
      image: '/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png'
    },
    {
      id: 4,
      title: 'The Future of Web Development in 2023',
      excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape this year.',
      author: 'Neha Gupta',
      date: 'March 5, 2023',
      category: 'Technology',
      image: '/lovable-uploads/6fdd3d0d-5dca-470a-a845-bd7b07bff599.png'
    },
    {
      id: 5,
      title: 'Debugging Like a Pro: Advanced Techniques',
      excerpt: 'Level up your debugging skills with these advanced techniques that will save you hours of frustration.',
      author: 'Amit Sharma',
      date: 'February 20, 2023',
      category: 'Tutorial',
      image: '/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png'
    },
    {
      id: 6,
      title: 'From Bootcamp to Job Offer: A Success Story',
      excerpt: 'Read about how one of our students went from a complete beginner to receiving multiple job offers.',
      author: 'Neha Gupta',
      date: 'January 10, 2023',
      category: 'Success Story',
      image: '/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png'
    }
  ];
  
  const ebooks = [
    {
      id: 1,
      title: 'The Ultimate DSA Handbook',
      description: 'A comprehensive guide to data structures and algorithms with practice problems and solutions.',
      pages: 245,
      format: 'PDF',
      image: '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'
    },
    {
      id: 2,
      title: 'Web Development Roadmap 2023',
      description: 'A step-by-step guide to becoming a full-stack web developer in 2023.',
      pages: 180,
      format: 'PDF, EPUB',
      image: '/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png'
    },
    {
      id: 3,
      title: 'Mastering C++ Programming',
      description: 'Learn C++ from basics to advanced concepts with practical examples and projects.',
      pages: 320,
      format: 'PDF',
      image: '/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png'
    },
    {
      id: 4,
      title: 'Java: The Complete Reference',
      description: 'Everything you need to know about Java programming language and its applications.',
      pages: 400,
      format: 'PDF, MOBI',
      image: '/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png'
    }
  ];
  
  const webinars = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the basics of machine learning and how to get started with your first ML project.',
      date: 'July 15, 2023',
      time: '6:00 PM - 8:00 PM',
      speaker: 'Dr. Rajesh Kumar',
      image: '/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png',
      type: 'Upcoming'
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications',
      description: 'Discover best practices for building web applications that can handle millions of users.',
      date: 'July 22, 2023',
      time: '5:00 PM - 7:00 PM',
      speaker: 'Priya Verma',
      image: '/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png',
      type: 'Upcoming'
    },
    {
      id: 3,
      title: 'Cracking FAANG Interviews',
      description: 'Tips and strategies to ace technical interviews at top tech companies.',
      date: 'June 10, 2023',
      time: '6:00 PM - 8:00 PM',
      speaker: 'Rahul Singh',
      image: '/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png',
      type: 'Recorded',
      recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Introduction to Blockchain Development',
      description: 'Learn the fundamentals of blockchain technology and how to develop applications on it.',
      date: 'May 25, 2023',
      time: '5:00 PM - 7:00 PM',
      speaker: 'Amit Sharma',
      image: '/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png',
      type: 'Recorded',
      recordingUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredEbooks = ebooks.filter(ebook => 
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ebook.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredWebinars = webinars.filter(webinar => 
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    webinar.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Blog & Resources
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto">
              Expand your knowledge with our articles, free e-books, webinars, and more
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="flex rounded-md shadow-sm">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow focus:ring-purple-500 focus:border-purple-500 block w-full px-4 py-3 rounded-l-md border-gray-300 text-gray-900"
                  placeholder="Search resources..."
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-purple-800 hover:bg-purple-900">
                  <Search className="h-5 w-5" />
                  <span className="ml-2">Search</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-4 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('articles')} 
                className={`px-4 py-2 mx-2 font-medium whitespace-nowrap ${activeTab === 'articles' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Articles
              </button>
              <button 
                onClick={() => setActiveTab('ebooks')} 
                className={`px-4 py-2 mx-2 font-medium whitespace-nowrap ${activeTab === 'ebooks' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Free E-books
              </button>
              <button 
                onClick={() => setActiveTab('webinars')} 
                className={`px-4 py-2 mx-2 font-medium whitespace-nowrap ${activeTab === 'webinars' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Webinars & Events
              </button>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Articles */}
            {activeTab === 'articles' && (
              <div>
                <div className="mb-8 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Latest Articles
                  </h2>
                  <div>
                    <select className="border-gray-300 rounded-md text-gray-700 focus:ring-purple-500 focus:border-purple-500">
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="tutorial">Tutorials</option>
                      <option value="technology">Technology</option>
                      <option value="career">Career</option>
                    </select>
                  </div>
                </div>
                
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map(article => (
                      <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden bloom-hover">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{article.date}</span>
                            <span className="mx-2">•</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            <Link to={`/blog/article/${article.id}`} className="hover:text-purple-600">
                              {article.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <Link 
                              to={`/blog/article/${article.id}`} 
                              className="text-purple-600 font-medium hover:text-purple-700"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900">No articles found</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            )}
            
            {/* E-books */}
            {activeTab === 'ebooks' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Free E-books
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Download our free e-books to learn at your own pace
                  </p>
                </div>
                
                {filteredEbooks.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {filteredEbooks.map(ebook => (
                      <div key={ebook.id} className="bg-white rounded-lg shadow-md overflow-hidden bloom-hover flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img 
                            src={ebook.image} 
                            alt={ebook.title} 
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {ebook.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {ebook.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Book className="h-4 w-4 mr-1" />
                            <span>{ebook.pages} pages</span>
                            <span className="mx-2">•</span>
                            <FileText className="h-4 w-4 mr-1" />
                            <span>{ebook.format}</span>
                          </div>
                          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium">
                            Download Free
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900">No e-books found</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Webinars */}
            {activeTab === 'webinars' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Webinars & Events
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Join our live webinars or watch recorded sessions
                  </p>
                </div>
                
                {filteredWebinars.length > 0 ? (
                  <>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Webinars</h3>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {filteredWebinars.filter(webinar => webinar.type === 'Upcoming').map(webinar => (
                          <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden bloom-hover">
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                                  Upcoming
                                </span>
                              </div>
                              <p className="text-gray-600 mb-4">{webinar.description}</p>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{webinar.date}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-4">
                                <User className="h-4 w-4 mr-1" />
                                <span>Speaker: {webinar.speaker}</span>
                              </div>
                              <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium">
                                Register Now
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Recorded Webinars</h3>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {filteredWebinars.filter(webinar => webinar.type === 'Recorded').map(webinar => (
                          <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden bloom-hover">
                            <div className="aspect-w-16 aspect-h-9 relative">
                              <img 
                                src={webinar.image} 
                                alt={webinar.title} 
                                className="w-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center cursor-pointer hover:bg-white">
                                  <Video className="h-8 w-8 text-purple-600" />
                                </div>
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  Recorded
                                </span>
                              </div>
                              <p className="text-gray-600 mb-4">{webinar.description}</p>
                              <div className="flex items-center text-sm text-gray-500 mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Recorded on {webinar.date}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-4">
                                <User className="h-4 w-4 mr-1" />
                                <span>Speaker: {webinar.speaker}</span>
                              </div>
                              <a 
                                href={webinar.recordingUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium block text-center"
                              >
                                Watch Recording
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900">No webinars found</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-lg opacity-80 mb-6">
                  Get the latest articles, resources, and webinars delivered straight to your inbox.
                </p>
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-white bg-purple-600 rounded-md text-white"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-100"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm opacity-80">
                  We care about your data. Read our{' '}
                  <a href="/legal/privacy" className="underline">Privacy Policy</a>.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 hidden lg:block">
                <img 
                  src="/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png" 
                  alt="Newsletter" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogResources;
