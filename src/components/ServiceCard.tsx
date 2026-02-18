import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  idealFor: string;
  imageUrl: string;
  reverse?: boolean;
}

export function ServiceCard({ 
  id,
  icon: Icon, 
  title, 
  description, 
  features, 
  benefits, 
  idealFor, 
  imageUrl, 
  reverse = false 
}: ServiceCardProps) {
  return (
    <div id={id} className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Image */}
      <div className={`relative ${reverse ? 'md:order-2' : ''}`}>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? 'md:order-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Ideal for:</span> {idealFor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
