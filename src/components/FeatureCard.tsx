
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`bloom-hover p-6 rounded-lg bg-white shadow-md ${className}`}>
      <div className="h-12 w-12 mx-auto flex items-center justify-center rounded-md bg-gray-100 text-gray-800 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
