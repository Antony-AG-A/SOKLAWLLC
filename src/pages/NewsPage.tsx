import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Download, Clock, User, Play, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsPage = () => {
  const { newsType } = useParams();

  const newsData: { [key: string]: any } = {
    resources: {
      title: 'Resources',
      subtitle: 'Essential toolkits and resources for legal professionals and advocates',
      heroImage: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
      items: [
        {
          id: 1,
          title: 'Legal Practitioners Guide',
          description: 'Comprehensive guide for legal practice in Kenya',
          fileSize: '2.4 MB',
          downloadDate: 'Updated Nov 2024',
        },
        {
          id: 2,
          title: 'Human Rights Advocacy Toolkit',
          description: 'Complete toolkit for human rights advocacy and documentation',
          fileSize: '1.8 MB',
          downloadDate: 'Updated Oct 2024',
        },
        {
          id: 3,
          title: 'Environmental Law Resource Pack',
          description: 'Essential resources for environmental law practice',
          fileSize: '3.1 MB',
          downloadDate: 'Updated Sep 2024',
        },
        {
          id: 4,
          title: 'Corporate Compliance Manual',
          description: 'Guidelines for corporate compliance and governance',
          fileSize: '2.7 MB',
          downloadDate: 'Updated Aug 2024',
        },
      ],
    },
    blogs: {
      title: 'Blogs',
      subtitle: 'Insights and analysis on law, policy, and social impact',
      heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      items: [
        {
          id: 1,
          title: 'The Future of Digital Rights in Africa',
          description: 'Exploring emerging challenges and opportunities in digital rights protection',
          author: 'Jane Mwangi',
          date: 'Nov 15, 2024',
          readTime: '8 min read',
          image: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg',
        },
        {
          id: 2,
          title: 'Navigating AI Ethics and Governance',
          description: 'Understanding responsible AI deployment and policy frameworks',
          author: 'David Kipchoge',
          date: 'Nov 10, 2024',
          readTime: '6 min read',
          image: 'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg',
        },
        {
          id: 3,
          title: 'Healthcare Access and Human Rights',
          description: 'Addressing barriers to equitable healthcare access',
          author: 'Dr. Sarah Okomo',
          date: 'Nov 5, 2024',
          readTime: '10 min read',
          image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
        },
        {
          id: 4,
          title: 'Environmental Justice and the Law',
          description: 'Legal frameworks for protecting environmental rights',
          author: 'Peter Kiplagat',
          date: 'Oct 28, 2024',
          readTime: '7 min read',
          image: 'https://images.pexels.com/photos/4561623/pexels-photo-4561623.jpeg',
        },
      ],
    },
    podcasts: {
      title: 'Podcasts',
      subtitle: 'Listen to experts discuss critical legal and policy issues',
      heroImage: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      items: [
        {
          id: 1,
          title: 'Digital Rights in the Modern Era',
          description: 'Expert discussion on protecting digital rights and privacy',
          duration: '45 min',
          date: 'Nov 20, 2024',
          speaker: 'Jane Mwangi',
        },
        {
          id: 2,
          title: 'AI and Legal Innovation',
          description: 'How artificial intelligence is transforming legal practice',
          duration: '38 min',
          date: 'Nov 13, 2024',
          speaker: 'Tech Law Expert Panel',
        },
        {
          id: 3,
          title: 'Healthcare Policy Challenges',
          description: 'Current issues in healthcare law and policy',
          duration: '52 min',
          date: 'Nov 6, 2024',
          speaker: 'Dr. James Kamau',
        },
        {
          id: 4,
          title: 'Environmental Governance',
          description: 'Building sustainable legal frameworks for the environment',
          duration: '41 min',
          date: 'Oct 30, 2024',
          speaker: 'Environmental Law Society',
        },
      ],
    },
    reports: {
      title: 'Reports',
      subtitle: 'Research-backed reports on law, policy, and social impact',
      heroImage: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
      items: [
        {
          id: 1,
          title: 'Digital Rights Assessment Report 2024',
          description: 'Comprehensive assessment of digital rights in East Africa',
          pages: '120 pages',
          date: 'Nov 2024',
          type: 'Research Report',
        },
        {
          id: 2,
          title: 'Healthcare Access and Equity Study',
          description: 'Analysis of healthcare accessibility and equity issues',
          pages: '95 pages',
          date: 'Oct 2024',
          type: 'Policy Analysis',
        },
        {
          id: 3,
          title: 'Environmental Law Implementation Review',
          description: 'Review of environmental law implementation and effectiveness',
          pages: '110 pages',
          date: 'Sep 2024',
          type: 'Implementation Review',
        },
        {
          id: 4,
          title: 'AI Governance Framework Study',
          description: 'Study on AI governance frameworks and policy recommendations',
          pages: '105 pages',
          date: 'Aug 2024',
          type: 'Policy Study',
        },
      ],
    },
  };

  const current = newsData[newsType || 'blogs'] || newsData.blogs;

  const renderItem = (item: any) => {
    switch (newsType) {
      case 'resources':
        return (
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <Download className="h-5 w-5 text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{item.fileSize}</span>
              <span>{item.downloadDate}</span>
            </div>
          </div>
        );
      case 'blogs':
        return (
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </span>
                  <span>{item.date}</span>
                </div>
                <span className="text-blue-600">{item.readTime}</span>
              </div>
            </div>
          </div>
        );
      case 'podcasts':
        return (
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Play className="h-5 w-5 fill-current" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{item.duration}</span>
              </span>
              <div className="space-y-1 text-right">
                <p>{item.speaker}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <FileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">{item.type}</span>
              <div className="text-right">
                <p>{item.pages}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">{current.title}</h1>
              <p className="text-xl">{current.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center space-x-2 text-sm mb-8 text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/news" className="hover:text-blue-600">News</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{current.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {['Resources', 'Blogs', 'Podcasts', 'Reports'].map((type, idx) => {
              const typeKey = type.toLowerCase();
              return (
                <Link
                  key={idx}
                  to={`/news/${typeKey}`}
                  className={`text-center p-4 rounded-lg transition-colors ${
                    newsType === typeKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {current.items.map((item: any) => (
              <div key={item.id}>{renderItem(item)}</div>
            ))}
          </div>

          <div className="border-t pt-8 text-center">
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

export default NewsPage;
