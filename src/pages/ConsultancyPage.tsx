import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConsultancyPage = () => {
  const { consultancyId } = useParams();

  const consultancyData: { [key: string]: any } = {
    health: {
      title: 'Health & Human Rights',
      description: 'Comprehensive legal consultancy services focused on health law and human rights advocacy.',
      heroImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
      overview: 'We provide expert legal advice on health policy, medical ethics, patient rights, and human rights in healthcare settings. Our consultants work with healthcare organizations, NGOs, and government agencies to develop compliant and ethical health policies.',
      activities: [
        'Health policy development and review',
        'Patient rights advocacy and documentation',
        'Medical ethics consultancy',
        'Healthcare regulatory compliance',
        'Human rights impact assessments',
        'Training on health and human rights',
      ],
      projects: [
        {
          title: 'Healthcare Access Initiative',
          description: 'Supporting equitable access to healthcare services across underserved communities',
          status: 'Active',
        },
        {
          title: 'Patient Rights Framework',
          description: 'Developing comprehensive patient protection standards',
          status: 'In Progress',
        },
        {
          title: 'Medical Ethics Guidelines',
          description: 'Creating evidence-based ethical standards for healthcare practitioners',
          status: 'Active',
        },
      ],
      nextArea: 'ai-policy',
      nextLabel: 'AI Policy & Digital Rights',
    },
    'ai-policy': {
      title: 'AI Policy & Digital Rights',
      description: 'Strategic consultancy on artificial intelligence governance and digital rights protection.',
      heroImage: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg',
      overview: 'We advise on the emerging landscape of AI regulation, digital rights, data privacy, and technology governance. Our team helps organizations navigate complex digital transformation while protecting fundamental rights and ensuring responsible AI deployment.',
      activities: [
        'AI governance framework development',
        'Digital rights policy formulation',
        'Data protection and privacy compliance',
        'Technology impact assessments',
        'Digital literacy and rights training',
        'Regulatory compliance consultation',
      ],
      projects: [
        {
          title: 'Digital Rights Framework',
          description: 'Establishing comprehensive digital rights protection standards',
          status: 'Active',
        },
        {
          title: 'AI Ethics Guidelines',
          description: 'Developing responsible AI deployment standards',
          status: 'In Progress',
        },
        {
          title: 'Data Protection Initiative',
          description: 'Implementing robust data privacy safeguards',
          status: 'Active',
        },
      ],
      nextArea: 'data-policy',
      nextLabel: 'Data Policy & Governance',
    },
    'data-policy': {
      title: 'Data Policy & Governance',
      description: 'Expert guidance on data management, governance frameworks, and regulatory compliance.',
      heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      overview: 'Our consultants provide strategic advice on data governance, management policies, and regulatory compliance. We help organizations establish robust data handling practices that balance innovation with protection and compliance with international standards.',
      activities: [
        'Data governance framework design',
        'Regulatory compliance assessment',
        'Data management policy development',
        'Privacy impact assessments',
        'Stakeholder engagement and consultation',
        'Capacity building and training programs',
      ],
      projects: [
        {
          title: 'Data Governance Framework',
          description: 'Establishing comprehensive data management standards',
          status: 'Active',
        },
        {
          title: 'Compliance Documentation',
          description: 'Developing detailed regulatory compliance documentation',
          status: 'In Progress',
        },
        {
          title: 'Data Protection Standards',
          description: 'Creating security and privacy protection standards',
          status: 'Active',
        },
      ],
      nextArea: 'health',
      nextLabel: 'Health & Human Rights',
    },
  };

  const current = consultancyData[consultancyId || 'health'] || consultancyData.health;

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
              <p className="text-xl">{current.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center space-x-2 text-sm mb-8 text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/consultancy" className="hover:text-blue-600">Consultancy</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{current.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{current.overview}</p>

              <h3 className="text-2xl font-bold mb-6">Key Activities</h3>
              <ul className="space-y-3 mb-8">
                {current.activities.map((activity: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {Object.entries(consultancyData).map(([key, data]: [string, any]) => (
                  <li key={key}>
                    <Link
                      to={`/consultancy/${key}`}
                      className={`block px-3 py-2 rounded transition-colors ${
                        consultancyId === key
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.projects.map((project: any, idx: number) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-8 flex justify-between items-center">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
              <span>Back to Home</span>
            </Link>
            {current.nextArea && (
              <Link
                to={`/consultancy/${current.nextArea}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Next Area: {current.nextLabel}</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsultancyPage;
