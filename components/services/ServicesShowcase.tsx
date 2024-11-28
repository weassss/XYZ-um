'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { useContentStore } from '@/lib/store';
import { getIconByName } from '@/lib/utils/icons';

export default function ServicesShowcase() {
  const { services, serviceImages } = useContentStore();
  const [activeService, setActiveService] = useState(1);
  const [activeStep, setActiveStep] = useState(0);

  const handleServiceChange = (index: number) => {
    setActiveService(index);
    setActiveStep(0);
  };

  const handleStepChange = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nos Services en Action
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez comment les services d'UM peuvent transformer votre processus de fabrication et améliorer votre efficacité opérationnelle.
        </motion.p>
        <div className="service-navigation mb-12 flex w-full items-center justify-center text-center">
          <div className="flex w-full max-w-4xl flex-col gap-2 md:flex-row">
            {services.map((service, index) => {
              const Icon = getIconByName(service.iconName);
              return (
                <motion.button
                  key={index}
                  className={`group relative flex w-full flex-col items-start p-3 text-left rounded-lg transition-all duration-300 hover:shadow-md`}
                  onClick={() => handleServiceChange(index + 1)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`mb-3 ${
                      activeService === index + 1
                        ? `bg-[#8ADD69] text-white`
                        : `bg-gray-100 text-gray-600`
                    } z-10 rounded-lg p-2 transition-colors duration-300 group-hover:bg-[#8ADD69] group-hover:text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="z-10 mb-2 text-sm font-semibold">{service.name}</div>
                  <p className="z-10 m-0 text-xs text-gray-600 md:text-sm">
                    {service.description}
                  </p>
                  {activeService === index + 1 && (
                    <motion.span
                      layoutId="tab"
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="absolute inset-0 z-0 rounded-lg bg-gray-50 border border-[#8ADD69]/20"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="rounded-lg border bg-white shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {serviceImages.map((service, index) => (
              <div key={index} data-image-number={service.imageNumber}>
                {activeService === service.imageNumber && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full rounded-lg"
                  >
                    <Image
                      src={service.imageSources[activeService === 1 ? activeStep : 0]}
                      alt={`Service ${service.imageNumber}`}
                      width={800}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          <div>
            {services.map((service, serviceIndex) => (
              activeService === serviceIndex + 1 && (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#8ADD69]">{service.name}</h3>
                  <div className="mb-8">
                    <div className="flex items-center">
                      {service.details.map((_, index) => (
                        <React.Fragment key={index}>
                          <motion.div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 ${
                              index <= activeStep ? 'bg-[#8ADD69] text-white' : 'bg-gray-100 text-gray-600'
                            } hover:shadow-md`}
                            onClick={() => handleStepChange(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {index + 1}
                          </motion.div>
                          {index < service.details.length - 1 && (
                            <motion.div 
                              className="flex-1 h-1 mx-2 bg-gray-100 rounded-full overflow-hidden"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: index < activeStep ? 1 : 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className="h-full bg-[#8ADD69] transform origin-left scale-x-0" />
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-[#8ADD69]/20 hover:border-[#8ADD69]/40 transition-colors duration-300">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold mb-4 text-[#8ADD69]">
                          {service.details[activeStep].title}
                        </h4>
                        <ul className="space-y-3">
                          {service.details[activeStep].points.map((point, pointIndex) => (
                            <motion.li 
                              key={pointIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: pointIndex * 0.1 }}
                              className="flex items-start space-x-2"
                            >
                              <span className="h-2 w-2 mt-2 rounded-full bg-[#8ADD69]" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}