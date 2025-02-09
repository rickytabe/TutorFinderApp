// src/pages/LearnerHomePage.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth/shared/firebaseAuthUtils';
import { Learner } from '../../../types/users';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const mockLearningData = [
  { date: 'Mon', hours: 3 },
  { date: 'Tue', hours: 2 },
  { date: 'Wed', hours: 4 },
  { date: 'Thu', hours: 1 },
  { date: 'Fri', hours: 5 },
  { date: 'Sat', hours: 2 },
  { date: 'Sun', hours: 3 },
];

const LearnerHomePage: React.FC = () => {
  const { currentUser, authLoading } = useAuth();
  const [learnerInfo, setLearnerInfo] = useState<Learner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (authLoading) return;

    if (!currentUser) {
      navigate('/auth/learner-login');
      return;
    }

    if (currentUser.userType === 'learner') {
      setLearnerInfo(currentUser as Learner);
      setLoading(false);
    } else {
      navigate('/');
    }
  }, [currentUser, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!learnerInfo) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-red-500">Failed to load learner information</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, {learnerInfo.firstName}! 👋
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Notifications</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex-shrink-0">
              <span className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                {learnerInfo.firstName?.[0]}{learnerInfo.lastName?.[0]}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
            <dt className="text-sm font-medium text-purple-600">Upcoming Sessions</dt>
            <dd className="mt-1 text-3xl font-bold text-gray-900">3</dd>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
            <dt className="text-sm font-medium text-purple-600">Completed Courses</dt>
            <dd className="mt-1 text-3xl font-bold text-gray-900">12</dd>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
            <dt className="text-sm font-medium text-purple-600">Learning Streak</dt>
            <dd className="mt-1 text-3xl font-bold text-gray-900">5 days 🔥</dd>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Learning Progress */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Learning Progress</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockLearningData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="#7c3aed" 
                      strokeWidth={2}
                      dot={{ fill: '#7c3aed' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Subjects of Interest */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Interests</h2>
              <div className="flex flex-wrap gap-2">
                {learnerInfo.subjectsOfInterest?.map((subject, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
              <InfoItem label="Full Name" value={`${learnerInfo.firstName} ${learnerInfo.lastName}`} />
              <InfoItem label="Email" value={learnerInfo.email || 'Not specified'} />
              <InfoItem label="Learning Style" value={learnerInfo.preferredLearningStyle} />
              <InfoItem label="Location" value={learnerInfo.location || 'Not specified'} />
            </div>

            {/* Availability Calendar */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Availability</h2>
              <Calendar
                className="w-full border-none"
                tileClassName={({ date }) => 
                  learnerInfo.availability?.includes(date.getDay().toString()) 
                    ? 'bg-purple-100 text-purple-800' 
                    : ''
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="mb-4 last:mb-0">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-gray-900">{value || 'Not specified'}</dd>
  </div>
);

export default LearnerHomePage;