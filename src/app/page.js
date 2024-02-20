"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section style={{
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(/bg0.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div class="grid place-items-center h-1/4 p-8 md:-p-0 md:h-1/3 mt-64 md:mt-60 w-full md:w-2/3 m-auto">
          <h1 class="text-5xl md:text-6xl text-center text-white mono-medium-h">Build smarter, safer web3 applications</h1>
          <h3 class="text-md md:text-xl mt-6 md:mt-8 text-center text-white mono-medium-h px-14">Our novel digital infrastructure injects artificial intelligence and encryption into the blockchain, enabling developers to build web3 applications that are intelligent and secure.</h3>
        </div>
      </section>
      <div className='px-12 mt-20'>
        <div className="md:flex h-80">
          <div className="w-full md:w-1/3">
            <h1 className="mono-regular-h text-3xl">Decentralization, scalability, and privacy arent mutually exclusive anymore.</h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="mono-regular-h pl-14">True ZK should provide all three. Aleo is the first place that brings all the power of ZK under one roof.</p>
          </div>
        </div>
      </div>
      <div class='min-h-screen px-12 mb-32'>
        <div class="md:flex">
          <div class="p-8 w-full md:w-1/2 bg-black rounded-lg text-white md:h-64 mt-20 mr-20 mono-regular-h">
            <h1 className="text-3xl mb-4">Whats possible with Tenzro</h1>
            <p className="mb-24 text-md text-neutral-400 mono-light">Build AI-powered apps on Tenzro with our ML tools.</p>
            <Link className="font-bold" href="/playground">TRY THE CORTEX PLAYGROUND</Link>
          </div>
          <div class="md:w-1/2">
            <Accordion type="single" collapsible className="w-full mt-12">
              <AccordionItem value="item-1" className="accordion-item">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-3xl'><span className="accordion-number text-neutral-300 ">1</span>Built-in ML & AI</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro enables apps that can use AI out-of-the-box, so developers can prioritize development without sacrificing engineering resources.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-2" className="accordion-item">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-3xl'><span className="accordion-number text-neutral-300 ">2</span>Privacy controls</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-3" className="accordion-item">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-3xl'><span className="accordion-number text-neutral-300 ">3</span>Scalable & fast</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-4" className="accordion-item">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-3xl'><span className="accordion-number text-neutral-300 ">4</span>Decentralized governance</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-5" className="accordion-item">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-3xl'><span className="accordion-number text-neutral-300 ">5</span>Incentivized economy</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div>
        <div className="px-12 pt-4 mono-medium-h text-center">
          <h1 className="text-2xl">Solutions</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-12 mono-medium-h">
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Cortex</h1>
            <p className="text-sm mono-light leading-relaxed">This central intelligence hub powers all our features, seamlessly integrating with diverse blockchains and protocols.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Radar</h1>
            <p className="text-sm mono-light leading-relaxed">Personalized content recommendations suggest assets tailored to your risk tolerance and investment goals, guiding you towards informed decisions.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Insights</h1>
            <p className="text-sm mono-light leading-relaxed">Real-time trend and reputation tracking analyzes social media buzz, market fluctuations, and community sentiment to identify rising stars and potential pitfalls.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Lens</h1>
            <p className="text-sm mono-light leading-relaxed">AI-powered content analysis extracts information from text, images, and audio, to reveal deeper meaning and relationships behind each digital asset.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Create</h1>
            <p className="text-sm mono-light leading-relaxed">Enables creation of diverse creative content using Generative AI.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4">Oracle</h1>
            <p className="text-sm mono-light leading-relaxed">A conversational AI search assistant that can be trained with custom data to answer questions or as a guide to discover digital assets.</p>
          </div>
        </div>

        <div className="px-12 pt-4 mono-medium-h text-center mt-24">
          <h1 className="text-2xl">Tokenomics</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-12 mono-medium-h">
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4"><span className="text-neutral-300">Token</span> X</h1>
            <p className="text-sm mono-light leading-relaxed">The utility token that serves as the means to pay for services on the platform. </p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4"><span className="text-neutral-300">Token</span> Y</h1>
            <p className="text-sm mono-light leading-relaxed">The governance token that is used for submitting proposals to the Tenzro DAO and participating in the voting process.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-2xl mb-4"><span className="text-neutral-300">Token</span> Z</h1>
            <p className="text-sm mono-light leading-relaxed">The reputation token that rewards creators for their contributions to the ecosystem through content creation and data provision, crucial elements in training the Tenzro AI system.</p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  )
}
