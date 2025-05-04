
import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, ChartBar, FileText, Users, Video, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dashboard sub-pages would be created as separate components in a real app
const MyCourses = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">My Courses</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="aspect-w-16 aspect-h-9">
          <img src="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png" alt="Course" className="w-full h-40 object-cover" />
          <div className="absolute top-0 right-0 m-2 bg-green-500 text-white text-xs px-2 py-1 rounded">In Progress</div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">Data Structures & Algorithms</h3>
          <p className="text-gray-500 text-sm mb-4">Instructor: Amit Sharma</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span>Progress: 65%</span>
            <span>22/36 lessons</span>
          </div>
          <button className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium">
            Continue Learning
          </button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <div className="aspect-w-16 aspect-h-9">
          <img src="/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png" alt="Course" className="w-full h-40 object-cover" />
          <div className="absolute top-0 right-0 m-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">Just Started</div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">C++ Programming Masterclass</h3>
          <p className="text-gray-500 text-sm mb-4">Instructor: Priya Verma</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span>Progress: 15%</span>
            <span>6/42 lessons</span>
          </div>
          <button className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
    
    <div className="mt-8 text-center p-8 border border-dashed rounded-lg">
      <p className="text-gray-500">Ready to expand your skills?</p>
      <Link to="/courses" className="mt-2 inline-block text-purple-600 font-medium hover:text-purple-700">
        Browse More Courses
      </Link>
    </div>
  </div>
);

const ProgressTracker = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Progress Tracker</h2>
    {/* Progress tracker content would go here */}
    <p className="text-gray-500">Detailed analytics about your learning progress would be shown here.</p>
  </div>
);

const Assignments = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Assignments & Quizzes</h2>
    {/* Assignments content would go here */}
    <p className="text-gray-500">Your upcoming and completed assignments would be listed here.</p>
  </div>
);

const MentorSessions = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Mentor Sessions</h2>
    {/* Mentor sessions content would go here */}
    <p className="text-gray-500">Schedule and history of your 1:1 mentoring sessions would appear here.</p>
  </div>
);

const CommunityForum = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Community Forum</h2>
    {/* Community forum content would go here */}
    <p className="text-gray-500">Discussion threads from our learning community would be displayed here.</p>
  </div>
);

const DashboardHome = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">My Courses</p>
            <p className="text-xl font-semibold">2</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <ChartBar className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Average Progress</p>
            <p className="text-xl font-semibold">42%</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <FileText className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Pending Assignments</p>
            <p className="text-xl font-semibold">3</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
            <Video className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Upcoming Sessions</p>
            <p className="text-xl font-semibold">1</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <img 
            src="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png" 
            alt="Course" 
            className="w-24 h-24 object-cover rounded mr-4 mb-4 sm:mb-0" 
          />
          <div className="flex-grow">
            <h4 className="font-semibold">Data Structures & Algorithms</h4>
            <p className="text-sm text-gray-500 mb-2">Next lesson: Hash Tables and Collision Resolution</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
              <span>65% complete</span>
              <span>Last accessed: 2 days ago</span>
            </div>
          </div>
          <button className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm font-medium">
            Resume
          </button>
        </div>
      </div>
    </div>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">1:1 Mentoring: Code Review</h4>
              <p className="text-sm text-gray-500 mt-1">With Amit Sharma</p>
              <p className="text-sm text-gray-500 mt-1">Tomorrow, 4:00 PM - 5:00 PM</p>
            </div>
            <button className="px-3 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded text-sm font-medium">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
        <div className="bg-white rounded-lg shadow-sm border divide-y">
          <div className="p-4">
            <p className="font-medium">New assignment posted</p>
            <p className="text-sm text-gray-500 mt-1">Build a Hash Table implementation in C++</p>
            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
          </div>
          <div className="p-4">
            <p className="font-medium">Your submission was graded</p>
            <p className="text-sm text-gray-500 mt-1">Binary Search Trees: 95/100</p>
            <p className="text-xs text-gray-400 mt-1">Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex bg-gray-50">
        {/* Sidebar */}
        <aside className={`bg-white border-r w-64 flex-shrink-0 ${showSidebar ? 'block' : 'hidden'} md:block`}>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Student Dashboard</h2>
          </div>
          
          <nav className="px-4 pb-4">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Home className="h-5 w-5 mr-3" />
                  <span>Dashboard Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/courses" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard/courses' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  <span>My Courses</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/progress" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard/progress' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <ChartBar className="h-5 w-5 mr-3" />
                  <span>Progress Tracker</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/assignments" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard/assignments' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <span>Assignments</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/mentors" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard/mentors' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Video className="h-5 w-5 mr-3" />
                  <span>Mentor Sessions</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/community" 
                  className={`flex items-center px-4 py-2 rounded-lg ${location.pathname === '/dashboard/community' ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <Users className="h-5 w-5 mr-3" />
                  <span>Community Forum</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        <div className="flex-grow p-6">
          <button 
            className="md:hidden mb-4 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>
          
          <div className="bg-white rounded-lg shadow">
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="courses" element={<MyCourses />} />
              <Route path="progress" element={<ProgressTracker />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="mentors" element={<MentorSessions />} />
              <Route path="community" element={<CommunityForum />} />
            </Routes>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
