import { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface ServiceCardProps {
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
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div className={reverse ? 'md:col-start-2' : ''}>
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50">
          <OptimizedImage
            src={imageUrl}
            alt={title}
            className="w-full h-80 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? 'md:col-start-1 md:row-start-1' : ''}>
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Business Impact:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Ideal for:</span> {idealFor}
          </p>
        </div>
      </div>
    </div>
  );
}
