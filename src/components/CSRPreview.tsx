import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe } from 'lucide-react';

const CSRPreview = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Supporting underserved communities through legal aid and advocacy.',
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Empowering young leaders through mentorship and digital literacy.',
    },
    {
      icon: Globe,
      title: 'Sustainable Development',
      description: 'Advancing environmental protection and sustainable practices.',
    },
  ];

  return (
    <section id="csr-preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Corporate Social Responsibility</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating positive social impact through commitment to community development, sustainability, and human rights.
          </p>
        </div>

        {/* CSR Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/csr"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-300"
          >
            Explore Our CSR Initiatives →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CSRPreview;
