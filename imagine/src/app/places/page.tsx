'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Star, Camera, Coffee, Utensils, Palette, TreePine, Building2 } from 'lucide-react';

interface Place {
  id: number;
  name: string;
  category: 'museum' | 'viewpoint' | 'cafe' | 'restaurant' | 'park' | 'art' | 'recreation';
  description: string;
  image: string;
  rating?: number;
  bestTime?: string;
  highlights: string[];
  icon: any;
}

const PlacesToVisit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Places', icon: MapPin },
    { id: 'museum', name: 'Museums & Culture', icon: Camera },
    { id: 'viewpoint', name: 'Viewpoints', icon: Camera },
    { id: 'cafe', name: 'Cafés', icon: Coffee },
    { id: 'restaurant', name: 'Restaurants', icon: Utensils },
    { id: 'park', name: 'Parks & Nature', icon: TreePine },
    { id: 'art', name: 'Art & Creative', icon: Palette },
    { id: 'recreation', name: 'Recreation', icon: Building2 },
  ];

  const places: Place[] = [
    {
      id: 1,
      name: 'Kandt House Museum of Natural History',
      category: 'museum',
      description: 'Explore Rwanda\'s rich colonial and natural history in this beautifully preserved building, once home to German explorer Richard Kandt.',
      image: '/images/KandtHouse.jpg',
      rating: 4.5,
      bestTime: '9:00 AM - 5:00 PM',
      highlights: ['Colonial Architecture', 'Natural History Exhibits', 'Historical Artifacts', 'Educational Tours'],
      icon: Camera
    },
    {
      id: 2,
      name: 'Nature Kigali',
      category: 'viewpoint',
      description: 'Kigali Nature is a peaceful restaurant surrounded by greenery, offering fresh and delicious meals in a calm environment. It is a perfect place to relax, meet friends, and enjoy nature in the heart of Kigali!',
      image: '/images/naturekigali1.jpg',
      rating: 4.8,
      bestTime: 'Sunset (5:30-6:30 PM)',
      highlights: ['360° City Views', 'Sunset Photography', 'Peaceful Atmosphere', 'Off the Beaten Path'],
      icon: Camera
    },
    {
      id: 3,
      name: 'Inzora Rooftop Café',
      category: 'cafe',
      description: 'Stylish rooftop café offering stunning city views, great coffee, and a vibrant atmosphere perfect for relaxing or working.',
      image: '/images/inzora1.jpg',
      rating: 4.7,
      bestTime: 'Afternoon & Evening',
      highlights: ['Rooftop Views', 'Specialty Coffee', 'Modern Ambiance', 'Free WiFi'],
      icon: Coffee
    },
    {
      id: 4,
      name: 'Kigali Golf Club & Villas',
      category: 'recreation',
      description: 'Premium golf course with lush greens and beautiful surroundings. Open to visitors for a round of golf or just to enjoy the scenery.',
      image: '/images/golf1.jpg',
      rating: 4.6,
      bestTime: 'Morning (7:00-11:00 AM)',
      highlights: ['18-Hole Course', 'Clubhouse Dining', 'Pro Shop', 'Scenic Views'],
      icon: Building2
    },
    {
      id: 5,
      name: 'Azizi Life Studio',
      category: 'art',
      description: 'Immersive cultural experience where you can learn traditional Rwandan crafts, weaving, and connect with local artisans.',
      image: '/images/azizi.jpg',
      rating: 4.9,
      bestTime: 'By Appointment',
      highlights: ['Cultural Workshops', 'Traditional Crafts', 'Meet Artisans', 'Handmade Souvenirs'],
      icon: Palette
    },
    {
      id: 6,
      name: 'Nyarutarama Lake',
      category: 'park',
      description: 'Serene lake surrounded by walking trails and green spaces. Perfect for morning jogs, picnics, and bird watching.',
      image: '/images/resort day.jpg',
      rating: 4.4,
      bestTime: 'Early Morning or Late Afternoon',
      highlights: ['Nature Walks', 'Bird Watching', 'Peaceful Setting', 'Jogging Trails'],
      icon: TreePine
    },
    {
      id: 7,
      name: 'Poivre Noir',
      category: 'restaurant',
      description: 'Upscale restaurant serving exquisite international and Rwandan fusion cuisine in an elegant setting.',
      image: '/images/noir.jpg',
      rating: 4.8,
      bestTime: 'Dinner (6:00-10:00 PM)',
      highlights: ['Fine Dining', 'Fusion Cuisine', 'Wine Selection', 'Romantic Atmosphere'],
      icon: Utensils
    },
    {
      id: 8,
      name: 'Inka Steakhouse & Bar',
      category: 'restaurant',
      description: 'Authentic Rwandan restaurant offering traditional dishes in a cozy, culturally-rich environment.',
      image: '/images/inka.jpg',
      rating: 4.7,
      bestTime: 'Lunch & Dinner',
      highlights: ['Traditional Rwandan Food', 'Cultural Ambiance', 'Live Music', 'Local Experience'],
      icon: Utensils
    },
    {
      id: 9,
      name: 'Green Park Gahanga',
      category: 'park',
      description: 'Beautiful community park with green spaces, playgrounds, and recreational facilities. Great for families and outdoor activities.',
      image: '/images/gahanga.jpg',
      rating: 4.5,
      bestTime: 'Weekends & Afternoons',
      highlights: ['Family-Friendly', 'Playgrounds', 'Picnic Areas', 'Sports Facilities'],
      icon: TreePine
    },
    {
      id: 10,
      name: 'Kacyiru Park',
      category: 'park',
      description: 'Urban park in the heart of Kacyiru district offering green spaces, walking paths, and a peaceful escape from city life.',
      image: '/images/download (9).jpg',
      rating: 4.3,
      bestTime: 'Anytime',
      highlights: ['Urban Oasis', 'Walking Paths', 'Green Spaces', 'City Views'],
      icon: TreePine
    },
    {
      id: 11,
      name: 'Ivuka Art',
      category: 'art',
      description: 'Contemporary art gallery and studio showcasing Rwanda\'s vibrant art scene with rotating exhibitions and artist workshops.',
      image: '/images/ivuka.jpg',
      rating: 4.6,
      bestTime: 'Tuesday-Sunday',
      highlights: ['Contemporary Art', 'Local Artists', 'Exhibitions', 'Art Workshops'],
      icon: Palette
    },
     {
      id: 12,
      name: 'Soy Restaurant & Lounge',
      category: 'restaurant',
      description: 'Soy Restaurant & Lounge offers delicious Asian cuisine, stylish ambiance, refreshing drinks, and a relaxing space for friends and family to gather and enjoy.',
      image: '/images/soyares.jpg',
      rating: 4.6,
      bestTime: 'Tuesday-Sunday',
      highlights: ['Delicious Asian dishes', 'Friendly service', 'Perfect for dining & hangouts'],
      icon: Palette
    },
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? places 
    : places.filter(place => place.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Simple Hero Section with brightness filter */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* <Image
            src="/images/kigali-hero.jpg"
            alt="Kigali City Panorama"
            fill
            priority
            className="object-cover brightness-[0.3]"
            quality={100}
          /> */}

        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From hidden viewpoints to cultural landmarks, explore the best spots that make Kigali unique
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Curated Selection</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Explore Amazing Places
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hidden viewpoints to cultural landmarks, discover the best spots that make Kigali unique
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
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => {
              const Icon = place.icon;
              return (
                <div
                  key={place.id}
                  onMouseEnter={() => setHoveredCard(place.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredCard === place.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Icon className="w-4 h-4" />
                      <span className="capitalize">{place.category}</span>
                    </div>
                    {/* Rating */}
                    {place.rating && (
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{place.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {place.name}
                    </h3>
                    
                    {place.bestTime && (
                      <div className="flex items-center space-x-2 text-green-600 text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{place.bestTime}</span>
                      </div>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {place.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {place.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <MapPin className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No places found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-green-50 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Need Help Planning Your Visit?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations and insider tips from local experts to make the most of your Kigali experience
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact a Local Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesToVisit;