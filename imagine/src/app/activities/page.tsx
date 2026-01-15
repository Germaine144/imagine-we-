'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bike, Music, Utensils, Coffee, ShoppingBag, Heart, Users, Compass, Calendar, Star } from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  category: 'adventure' | 'culture' | 'food' | 'nightlife' | 'shopping' | 'wellness' | 'social';
  description: string;
  image: string;
  duration?: string;
  priceRange: '$' | '$$' | '$$$';
  bestFor: string[];
  icon: any;
}

const ThingsToDo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Activities', icon: Compass },
    { id: 'adventure', name: 'Adventure', icon: Bike },
    { id: 'culture', name: 'Culture & Arts', icon: Music },
    { id: 'food', name: 'Food & Drink', icon: Utensils },
    { id: 'nightlife', name: 'Nightlife', icon: Music },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag },
    { id: 'wellness', name: 'Wellness', icon: Heart },
    { id: 'social', name: 'Social & Events', icon: Users },
  ];

  const activities: Activity[] = [
    {
      id: 1,
      name: 'Fun & Games',
      category: 'social',
      description: 'Fun & Games in Kigali give people a chance to relax and enjoy their time together.',
      image: '/images/universal.jpg',
      duration: '3-4 hours',
      priceRange: '$',
    bestFor: ['Social Fun', 'Making Friends', 'Group Hangouts'],
      icon: Users
    },
    {
      id: 2,
      name: 'Coffee Tasting Tour',
      category: 'food',
      description: 'Discover Rwanda\'s world-renowned coffee culture. Visit local roasteries, learn about the coffee-making process, and taste different brews.',
      image: '/images/coffe.jpg',
      duration: '2-3 hours',
      priceRange: '$$',
      bestFor: ['Coffee Lovers', 'Foodies', 'Cultural Learning'],
      icon: Coffee
    },
    {
      id: 3,
      name: 'Cycling Through the City',
      category: 'adventure',
      description: 'Explore Kigali\'s hills and neighborhoods on two wheels. Guided bike tours available or rent and explore on your own.',
      image: '/images/riding.jpg',
      duration: '2-4 hours',
      priceRange: '$$',
      bestFor: ['Adventure Seekers', 'Fitness Enthusiasts', 'Sightseeing'],
      icon: Bike
    },
    {
      id: 4,
      name: 'Live Music at Inema Arts Center',
      category: 'culture',
      description: 'Enjoy live performances, art exhibitions, and cultural events at this vibrant arts hub. Weekly events featuring local and international artists.',
      image: '/images/night.jpg',
      duration: '2-3 hours',
      priceRange: '$$',
      bestFor: ['Art Lovers', 'Music Fans', 'Culture Enthusiasts'],
      icon: Music
    },
    {
      id: 5,
      name: 'Traditional Rwandan Cooking Class',
      category: 'food',
      description: 'Learn to cook authentic Rwandan dishes like Isombe, Ubugali, and Brochettes. Hands-on experience with local chefs.',
      image: '/images/local1.jpg',
      duration: '3-4 hours',
      priceRange: '$$',
      bestFor: ['Foodies', 'Cultural Experience', 'Hands-on Learning'],
      icon: Utensils
    },
    {
      id: 6,
      name: 'Nightlife at Heaven Restaurant & Club',
      category: 'nightlife',
      description: 'Experience Kigali\'s vibrant nightlife scene. Live DJ sets, dancing, and a great atmosphere with panoramic city views.',
      image: '/images/the-retreat.jpg',
      duration: 'Evening/Night',
      priceRange: '$$',
      bestFor: ['Night Owls', 'Party Lovers', 'Socializing'],
      icon: Music
    },
    {
      id: 7,
      name: 'City Running Adventure',
      category: 'adventure',
      description: 'Enjoy running in Kacyiru and Kimihurura, staying fit, meeting people, and experiencing Kigali’s lively and safe streets daily.',
      image: '/images/raaa.jpg',
      duration: '2-3 hours',
      priceRange: '$',
     bestFor: ['Fitness', 'Outdoor Adventure', 'Community Connection'],
      icon: Bike
    },
    {
      id: 8,
      name: 'Yoga & Wellness Retreat',
      category: 'wellness',
      description: 'Relax and rejuvenate with yoga classes, meditation sessions, and wellness workshops at various studios around the city.',
      image: '/images/yoga2.jpg',
      duration: '1-2 hours',
      priceRange: '$$',
      bestFor: ['Wellness Seekers', 'Relaxation', 'Mindfulness'],
      icon: Heart
    },
    {
      id: 9,
      name: 'The Retreat',
      category: 'social',
      description: 'A deluxe hotel offering premium comfort, modern amenities, and an exceptional experience in Kigali’s vibrant setting.',
      image: '/images/retreat hote.jpg',
      duration: '2-3 hours',
      priceRange: '$$',
        bestFor: ["Luxury Stay", "Cultural Learning", "Community Support"],
      icon: Users
    },
    {
      id: 10,
      name: 'Hike Mount Kigali',
      category: 'adventure',
      description: 'Challenge yourself with a hike up Mount Kigali for breathtaking 360° views of the city. Best in early morning or late afternoon.',
      image: '/images/hikiong.jpg',
      duration: '2-3 hours',
      priceRange: '$',
      bestFor: ['Hikers', 'Nature Lovers', 'Photography'],
      icon: Bike
    },
    {
      id: 11,
      name: 'Craft Shopping at Caplaki Craft Village',
      category: 'shopping',
      description: 'Browse beautiful handmade crafts, jewelry, and artwork by local artisans. Perfect for unique gifts and authentic souvenirs.',
      image: '/images/craft2.jpg',
      duration: '1-2 hours',
      priceRange: '$$',
      bestFor: ['Art Collectors', 'Gift Shopping', 'Supporting Local'],
      icon: ShoppingBag
    },
    {
      id: 12,
      name: 'Sundowner at Repub Lounge',
      category: 'nightlife',
      description: 'Enjoy cocktails and stunning sunset views from one of Kigali\'s most popular rooftop lounges. Perfect for unwinding after a day of exploring.',
      image: '/images/nigh3.jpg',
      duration: '2-3 hours',
      priceRange: '$$$',
      bestFor: ['Cocktail Lovers', 'Romantic Evening', 'City Views'],
      icon: Music
    },
  ];

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  const getPriceColor = (price: string) => {
    switch (price) {
      case '$': return 'text-green-600';
      case '$$': return 'text-yellow-600';
      case '$$$': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* <Image
            src="/images/activities-hero.jpg"
            alt="Kigali Activities"
            fill
            priority
            className="object-cover brightness-[0.3]"
            quality={100}
          /> */}
        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Things to Do in Kigali
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From cultural experiences to adventure activities, discover unforgettable experiences
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="things-to-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Things to Do in Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cultural experiences to adventure activities, discover unforgettable experiences in the heart of Rwanda
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Duration Badge */}
                    {activity.duration && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{activity.duration}</span>
                      </div>
                    )}
                    {/* Price Badge */}
                    <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold ${getPriceColor(activity.priceRange)}`}>
                      {activity.priceRange}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Icon & Name */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                        {activity.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {activity.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {activity.description}
                    </p>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.bestFor.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Popular Experiences Section */}
          <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
              Popular Experiences
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Tours</h4>
                <p className="text-sm text-gray-600">Authentic local experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Utensils className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Food Adventures</h4>
                <p className="text-sm text-gray-600">Taste Rwanda's flavors</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Bike className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Outdoor Activities</h4>
                <p className="text-sm text-gray-600">Adventure awaits</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Music className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Arts & Culture</h4>
                <p className="text-sm text-gray-600">Creative experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThingsToDo;