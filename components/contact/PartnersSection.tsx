'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { useContentStore } from '@/lib/store';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { cn } from '@/lib/utils';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function PartnersSection() {
  const { partners, partnerColors, countryCoordinates } = useContentStore();
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [hoveredMarker, setHoveredMarker] = useState<{name: string; country: string} | null>(null);

  const markers = partners.flatMap((partner, index) => 
    partner.countries.map(country => ({
      name: partner.name,
      coordinates: countryCoordinates[country],
      country: country,
      color: partnerColors[index]
    }))
  ).filter(marker => marker.coordinates);

  return (
    <Section className="bg-gray-100">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nos Partenaires Mondiaux
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {partners.map((partner, index) => (
          <motion.button
            key={index}
            className={cn(
              'px-4 py-2 rounded-full',
              activePartnerIndex === index ? 'text-white' : 'bg-gray-200 text-gray-800'
            )}
            style={{ 
              backgroundColor: activePartnerIndex === index ? partnerColors[index] : undefined,
            }}
            onClick={() => setActivePartnerIndex(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {partner.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePartnerIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <Image
                    src={partners[activePartnerIndex].logo}
                    alt={`${partners[activePartnerIndex].name} logo`}
                    width={200}
                    height={100}
                    className="w-full h-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{partners[activePartnerIndex].name}</h3>
                  <p className="text-gray-600 mb-4">{partners[activePartnerIndex].description}</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-2">Pays couverts</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partners[activePartnerIndex].countries.map((country, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Spécialités</h4>
                  <ul className="list-disc pl-5">
                    {partners[activePartnerIndex].specialties.map((specialty, index) => (
                      <li key={index} className="mb-1">{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/BlankMap-World.svg"
              alt="World Map Overlay"
              width={1000}
              height={600}
              className="w-full h-auto opacity-30"
            />
            <div className="absolute inset-0">
              <ComposableMap projection="geoMercator">
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="transparent"
                        stroke="#D6D6DA"
                      />
                    ))
                  }
                </Geographies>
                {markers.map(({ name, coordinates, country, color }, index) => (
                  <Marker 
                    key={`${name}-${country}-${index}`}
                    coordinates={coordinates}
                  >
                    <motion.circle 
                      r={4}
                      fill={color}
                      stroke="#fff" 
                      strokeWidth={2} 
                      style={{ cursor: 'pointer' }}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: name === partners[activePartnerIndex].name ? 1.5 : 1,
                        opacity: name === partners[activePartnerIndex].name ? 1 : 0.7
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        duration: 0.3
                      }}
                      onClick={() => {
                        const partnerIndex = partners.findIndex(p => p.name === name);
                        setActivePartnerIndex(partnerIndex);
                      }}
                      onMouseEnter={() => setHoveredMarker({ name, country })}
                      onMouseLeave={() => setHoveredMarker(null)}
                    />
                    {hoveredMarker && hoveredMarker.name === name && hoveredMarker.country === country && (
                      <motion.text
                        textAnchor="middle"
                        y={-10}
                        style={{ fontFamily: "system-ui", fill: "#000", fontSize: "10px", fontWeight: "bold" }}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {name}
                      </motion.text>
                    )}
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}