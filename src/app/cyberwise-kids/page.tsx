'use client';

import { useState } from 'react';
import { Gamepad2, Image, UserPlus, Trophy, Smartphone, Users } from 'lucide-react';
import Link from 'next/link';

const tabs = [
  { label: 'Age 4-7', icon: <Users size={16} />, key: '4-7' },
  { label: 'Age 8-12', icon: <Gamepad2 size={16} />, key: '8-12' },
  { label: 'Age 13-17', icon: <Smartphone size={16} />, key: '13-17' },
  { label: 'For Parents', icon: <Users size={16} />, key: 'parents' },
];

const stories = [
  {
    title: 'Cyber Safety Games',
    description: 'Play games like Phishing Spotter and Password Puzzles to sharpen your skills.',
    icon: <Gamepad2 className="text-green-500" size={24} />,
    linkText: 'Play Games',
    href: '/cyberwise-kids/games',
  },
  {
    title: 'Diya’s Selfie Scare',
    description: 'Learn about sharing photos safely and what happens when pictures fall into the wrong hands.',
    icon: <Image className="text-green-500" size={24} />,
    linkText: 'Read Story',
    href: '/cyberwise-kids/diyas-selfie-scare',
  },
  {
    title: 'The Mystery Friend Request',
    description: 'A story about recognizing and dealing with suspicious friend requests from strangers online.',
    icon: <UserPlus className="text-green-500" size={24} />,
    linkText: 'Read Story',
    href: '/cyberwise-kids/mystery-friend-request',
  },
  {
    title: 'The Quest for the Golden Armor',
    description: 'Follow a gamer who learns a tough lesson about fake cheats and scams for in-game items.',
    icon: <Trophy className="text-green-500" size={24} />,
    linkText: 'Read Story',
    href: '/cyberwise-kids/quest-golden-armor',
  },
];

export default function CyberWiseKidsPage() {
  const [activeTab, setActiveTab] = useState('8-12');

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-6 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">CyberWise Kids</h1>
        <p className="text-lg text-gray-400">
          A dedicated space to make kids and teens cyber-aware with fun, age-appropriate content.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === tab.key
                ? 'bg-[#1f2937] text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Age 8-12 Content */}
      {activeTab === '8-12' && (
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Smart Learners (Ages 8–12)</h2>
            <p className="text-gray-400">
              Building cyber awareness through interactive games, comics, and fun challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-[#161b22] rounded-xl p-5 shadow hover:shadow-md transition">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0e4429] mb-4">
                  {story.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{story.description}</p>
                <Link
                  href={story.href}
                  className="inline-block px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                >
                  {story.linkText}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © 2025 CyberWise. All Rights Reserved.
      </footer>
    </div>
  );
}
