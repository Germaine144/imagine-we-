'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Hotel, Home, Building2, Wifi, Coffee, Utensils, Car, Star, MapPin, DollarSign } from 'lucide-react';

interface Accommodation {
  id: number;
  name: string;
  type: 'luxury' | 'mid-range' | 'budget' | 'apartment' | 'guesthouse';
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  location: string;
  amenities: string[];
  icon: any;
}

const WhereToStay: React.FC = () => {
  const [activeType, setActiveType] = useState<string>('all');

  const types = [
    { id: 'all', name: 'All Accommodations', icon: Building2 },
    { id: 'luxury', name: 'Luxury Hotels', icon: Hotel },
    { id: 'mid-range', name: 'Mid-Range', icon: Building2 },
    { id: 'budget', name: 'Budget Friendly', icon: Home },
    { id: 'apartment', name: 'Apartments', icon: Home },
    { id: 'guesthouse', name: 'Guesthouses', icon: Home },
  ];

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: 'Kigali Serena Hotel',
      type: 'luxury',
      description: '5-star luxury hotel in the heart of Kigali offering world-class amenities, elegant rooms, and exceptional service.',
      image: '/images/serena-hotel.jpg',
      rating: 4.8,
      priceRange: '$$$$ - $200-400/night',
      location: 'City Center',
      amenities: ['Free WiFi', 'Restaurant', 'Pool', 'Spa', 'Gym', 'Business Center'],
      icon: Hotel
    },
    {
      id: 2,
      name: 'Radisson Blu Hotel & Convention Centre',
      type: 'luxury',
      description: 'Modern luxury hotel with stunning city views, conference facilities, and premium dining options.',
      image: '/images/radisson-blu.jpg',
      rating: 4.7,
      priceRange: '$$$$ - $180-350/night',
      location: 'Kigali Heights',
      amenities: ['Free WiFi', 'Multiple Restaurants', 'Pool', 'Gym', 'Conference Rooms', 'Spa'],
      icon: Hotel
    },
    {
      id: 3,
      name: 'The Retreat',
      type: 'luxury',
      description: 'Boutique luxury retreat offering privacy, tranquility, and personalized service in a beautiful setting.',
      image: '/images/the-retreat.jpg',
      rating: 4.9,
      priceRange: '$$$$ - $250-450/night',
      location: 'Kacyiru',
      amenities: ['Free WiFi', 'Fine Dining', 'Pool', 'Garden', 'Private Villas', 'Butler Service'],
      icon: Hotel
    },
    {
      id: 4,
      name: 'Hotel des Mille Collines',
      type: 'mid-range',
      description: 'Historic hotel with comfortable rooms, great service, and a central location. Famous from "Hotel Rwanda".',
      image: '/images/mille-collines.jpg',
      rating: 4.5,
      priceRange: '$$$ - $120-200/night',
      location: 'City Center',
      amenities: ['Free WiFi', 'Restaurant', 'Pool', 'Bar', 'Room Service', 'Parking'],
      icon: Building2
    },
    {
      id: 5,
      name: 'Park Inn by Radisson',
      type: 'mid-range',
      description: 'Contemporary hotel offering comfortable accommodations with modern amenities at reasonable prices.',
      image: '/images/park-inn.jpg',
      rating: 4.4,
      priceRange: '$$$ - $100-180/night',
      location: 'Kiyovu',
      amenities: ['Free WiFi', 'Restaurant', 'Gym', 'Meeting Rooms', 'Bar', 'Parking'],
      icon: Building2
    },
    {
      id: 6,
      name: 'Heaven Boutique Hotel',
      type: 'mid-range',
      description: 'Stylish boutique hotel with panoramic city views, rooftop restaurant, and vibrant atmosphere.',
      image: '/images/heaven-hotel.jpg',
      rating: 4.6,
      priceRange: '$$$ - $90-160/night',
      location: 'Kiyovu',
      amenities: ['Free WiFi', 'Rooftop Restaurant', 'Bar', 'City Views', 'Event Space'],
      icon: Building2
    },
    {
      id: 7,
      name: 'Discover Rwanda Youth Hostel',
      type: 'budget',
      description: 'Clean, friendly hostel perfect for backpackers and budget travelers. Great place to meet fellow travelers.',
      image: '/images/youth-hostel.jpg',
      rating: 4.2,
      priceRange: '$ - $15-40/night',
      location: 'Kimihurura',
      amenities: ['Free WiFi', 'Shared Kitchen', 'Common Area', 'Laundry', 'Tours'],
      icon: Home
    },
    {
      id: 8,
      name: 'Okapi Hotel',
      type: 'budget',
      description: 'Affordable hotel with basic but clean rooms, friendly staff, and convenient location.',
      image: '/images/okapi-hotel.jpg',
      rating: 4.0,
      priceRange: '$$ - $40-70/night',
      location: 'City Center',
      amenities: ['Free WiFi', 'Restaurant', 'Parking', 'Airport Transfer', '24h Reception'],
      icon: Home
    },
    {
      id: 9,
      name: 'Five to Five Hotel',
      type: 'budget',
      description: 'Budget-friendly accommodation with comfortable rooms and good value for money.',
      image: '/images/five-to-five.jpg',
      rating: 4.1,
      priceRange: '$$ - $50-80/night',
      location: 'Remera',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Parking', 'Room Service'],
      icon: Home
    },
    {
      id: 10,
      name: 'Kigali Luxury Apartments',
      type: 'apartment',
      description: 'Fully furnished apartments with kitchens, perfect for extended stays and families.',
      image: '/images/luxury-apartments.jpg',
      rating: 4.5,
      priceRange: '$$$ - $80-150/night',
      location: 'Kimihurura',
      amenities: ['Free WiFi', 'Full Kitchen', 'Washer/Dryer', 'Living Room', 'Parking', 'Security'],
      icon: Home
    },
    {
      id: 11,
      name: 'Urban Stay Apartments',
      type: 'apartment',
      description: 'Modern serviced apartments with weekly rates available. Great for digital nomads and long stays.',
      image: '/images/urban-stay.jpg',
      rating: 4.4,
      priceRange: '$$ - $60-120/night',
      location: 'Kacyiru',
      amenities: ['Free WiFi', 'Kitchen', 'Workspace', 'Cleaning Service', 'Balcony', 'Gym'],
      icon: Home
    },
    {
      id: 12,
      name: 'Chez Lando',
      type: 'guesthouse',
      description: 'Cozy guesthouse with a homey atmosphere and personalized service. Popular among repeat visitors.',
      image: '/images/chez-lando.jpg',
      rating: 4.6,
      priceRange: '$$ - $50-90/night',
      location: 'Kiyovu',
      amenities: ['Free WiFi', 'Breakfast Included', 'Garden', 'Terrace', 'Parking'],
      icon: Home
    },
  ];

  const filteredAccommodations = activeType === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === activeType);

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return Wifi;
    if (amenity.toLowerCase().includes('restaurant') || amenity.toLowerCase().includes('dining') || amenity.toLowerCase().includes('breakfast') || amenity.toLowerCase().includes('kitchen')) return Utensils;
    if (amenity.toLowerCase().includes('parking') || amenity.toLowerCase().includes('airport')) return Car;
    return Coffee;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image with brightness filter */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* <Image
            src="/images/stay-hero.jpg"
            alt="Kigali Accommodation"
            fill
            priority
            className="object-cover brightness-[0.3]"
            quality={100}
          /> */}
        </div>

        {/* Hero Content - Simple and Clean */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Where to Stay in Kigali
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            From luxury hotels to budget-friendly hostels, find the perfect accommodation for your stay
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="where-to-stay" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Where to Stay in Kigali
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury hotels to budget-friendly hostels, find the perfect accommodation for your Kigali adventure
            </p>
          </div>

          {/* Type Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {types.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveType(type.id)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeType === type.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{type.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accommodations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAccommodations.map((accommodation) => {
              const Icon = accommodation.icon;
              return (
                <div
                  key={accommodation.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <Image
                        src={accommodation.image}
                        alt={accommodation.name}
                        fill
                        className="object-cover"
                      />
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {accommodation.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex-1">
                          {accommodation.name}
                        </h3>
                        <div className="flex items-center space-x-1 ml-2 bg-yellow-50 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-gray-900">{accommodation.rating}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-2 text-gray-600 text-sm mb-3">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span>{accommodation.location}</span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {accommodation.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-4 text-green-600 font-semibold">
                        <DollarSign className="w-5 h-5" />
                        <span className="text-sm">{accommodation.priceRange}</span>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.amenities.slice(0, 4).map((amenity, index) => {
                          const AmenityIcon = getAmenityIcon(amenity);
                          return (
                            <div
                              key={index}
                              className="flex items-center space-x-1 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                            >
                              <AmenityIcon className="w-3 h-3" />
                              <span>{amenity}</span>
                            </div>
                          );
                        })}
                        {accommodation.amenities.length > 4 && (
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">
                            +{accommodation.amenities.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm">
                          View Details
                        </button>
                        <button className="px-4 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips Section */}
          <div className="mt-20 bg-green-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Accommodation Tips for Kigali
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Choose Your Location</h4>
                <p className="text-sm text-green-50">
                  Stay in Kimihurura or Kiyovu for upscale dining, or Nyamirambo for local culture
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Book in Advance</h4>
                <p className="text-sm text-green-50">
                  Hotels fill up quickly during conferences and events. Book early for best rates
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2 text-lg">Airport Transfers</h4>
                <p className="text-sm text-green-50">
                  Many hotels offer free airport pickup. Taxi apps like Move and Yego are also available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereToStay;