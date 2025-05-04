
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
  videoUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatar,
  testimonial,
  videoUrl
}) => {
  return (
    <div className="bloom-hover bg-white rounded-lg shadow-md overflow-hidden">
      {videoUrl ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src={videoUrl} 
            title={`${name}'s testimonial`} 
            className="w-full h-48 object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
      
      <div className="p-6">
        <p className="text-gray-600 italic mb-4">"{testimonial}"</p>
        
        <div className="flex items-center">
          <img 
            src={avatar} 
            alt={name} 
            className="h-10 w-10 rounded-full object-cover mr-4"
          />
          
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
