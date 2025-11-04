import React from 'react';
import { Link, Heart, Users, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CSRPage = () => {
  const stats = [
    { number: '5000+', label: 'Lives Impacted' },
    { number: '50+', label: 'Communities Served' },
    { number: '100+', label: 'Projects Completed' },
    { number: '25+', label: 'Partner Organizations' },
  ];

  const focusAreas = [
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Supporting vulnerable communities through targeted interventions and sustainable development programs.',
      initiatives: [
        'Community health programs',
        'Education and skill development',
        'Economic empowerment initiatives',
      ],
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Investing in youth through mentorship, skills training, and career development opportunities.',
      initiatives: [
        'Leadership training programs',
        'Digital skills development',
        'Entrepreneurship support',
      ],
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting environmental conservation and sustainable practices across all our operations.',
      initiatives: [
        'Environmental conservation projects',
        'Sustainable resource management',
        'Climate action initiatives',
      ],
    },
  ];

  const projects = [
    {
      title: 'Rural Development Initiative',
      description: 'Comprehensive development program supporting rural communities with infrastructure and services.',
      status: 'Active',
      impact: '2000+ beneficiaries',
    },
    {
      title: 'Youth Skills Academy',
      description: 'Training program providing vocational skills to disadvantaged youth.',
      status: 'Active',
      impact: '500+ graduates',
    },
    {
      title: 'Environmental Conservation',
      description: 'Reforestation and environmental protection programs across multiple regions.',
      status: 'In Progress',
      impact: '10,000 trees planted',
    },
    {
      title: 'Education for All',
      description: 'Supporting access to quality education in underserved areas.',
      status: 'Active',
      impact: '1000+ students',
    },
  ];

  const partners = [
    'United Nations Development Programme',
    'International Labour Organization',
    'World Health Organization',
    'Global Fund for Education',
    'Environmental Action Alliance',
    'Community Development Network',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg)' }}
        >
          <div className="absolute inset-0 bg-blue-900/50"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Corporate Social Responsibility</h1>
              <p className="text-xl">Creating Lasting Impact Through Responsible Business Practices</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                    <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.initiatives.map((initiative, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                      project.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm font-medium text-blue-600">{project.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-blue-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We collaborate with leading organizations worldwide to maximize our social impact and create sustainable solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-gray-700 font-medium">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We welcome partnerships with organizations, businesses, and individuals committed to creating positive social impact.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="border-t pt-8">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center space-x-2"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CSRPage;
