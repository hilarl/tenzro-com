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
        <div class="grid place-items-center h-1/4 p-8 md:-p-0 md:h-1/3 mt-52 md:mt-60 w-full md:w-2/3 m-auto">
          <h1 class="text-3xl md:text-6xl text-center text-white mono-medium-h">Build smarter, safer web3 applications</h1>
          <h3 class="text-sm md:text-md md:text-xl mt-6 md:mt-8 text-center text-white mono-light md:px-14">Our novel digital infrastructure injects artificial intelligence and encryption into the blockchain, enabling developers to build web3 applications that are intelligent and secure.</h3>
        </div>
      </section>
      <div className='px-6 md:px-12 mt-20'>
        <div className="md:flex py-12 md:py-0 md:h-72">
          <div className="w-full md:w-3/4">
            <h1 className="mono-regular-h text-3xl text-left md:text-left">Combining decentralization, intelligence, scalability, and privacy, while incentivizing participation.</h1>
          </div>
          <div className="w-full md:w-full">
            <p className="mono-regular-h mt-8 md:mt-0 md:pl-14 text-xl text-left md:text-left">Tenzro combines Machine Learning, Artificial Intelligence, and Encryption, seamlessly within its Blockchain ecosystem.</p>
          </div>
        </div>
      </div>
      <div class='min-h-screen px-6 md:px-12' id="discover">
        <div class="md:flex">
          <div class="p-6 md:p-8 w-full md:w-1/2 border border-neutral-200 rounded-lg text-black h-auto md:h-72 mt-20 mr-20 mono-regular-h">
            <h1 className="text-xl md:text-3xl mb-4">Whats possible with Tenzro</h1>
            <p className="mb-24 text-sm md:text-base text-neutral-400 mono-light">Build AI-powered apps on Tenzro with our ML tools.</p>
            <Link className="text-sm md:text-base font-bold" href="#">TRY THE CORTEX PLAYGROUND (TBA)</Link>
          </div>
          <div class="md:w-1/2">
            <Accordion type="single" collapsible className="w-full mt-12 mb-20">
              <AccordionItem value="item-1" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300">1</span>Built-in ML & AI</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro incorporates advanced AI and ML models directly into its platform, providing intelligent analysis, prediction, and decision-making capabilities to enhance user experiences and insights for apps building on the platform.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-2" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">2</span>Privacy controls</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro prioritizes user privacy by implementing robust privacy controls, ensuring that personal data is encrypted and securely managed. Users have granular control over their data, with the assurance that it is only accessible to them.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-3" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">3</span>Scalable & fast</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Leveraging the Avalanche consensus protocol, Tenzro achieves scalability and speed within its blockchain ecosystem. This architecture allows for rapid transaction processing and seamless scalability, ensuring optimal performance even as the platform grows.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-4" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">4</span>Truly decentralized</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro is governed by a DAO, which enables developers, academics, researchers, to participate and contribute to its vision. Participants have a voice in shaping the direction and development of the Tenzro ecosystem.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-5" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title text-left">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">5</span>Incentivized economy</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro is designed to foster an incentivized economy where users are rewarded for their contributions and participation within the ecosystem. Through token incentives and rewards, users are encouraged to engage actively, driving growth, innovation, and community involvement.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div id="solutions">
        <div className="px-6 md:px-12 pt-4 mono-medium-h text-center">
          <h1 className="text-2xl">SOLUTIONS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12 mono-medium-h">
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Cortex</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">The central intelligence hub that powers all AI functionalities of Tenzro, seamlessly integrating with its blockchain ecosystem.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Radar</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">Personalized content recommendations suggest assets tailored to your risk tolerance and investment goals, guiding you towards informed decisions.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Insights</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">Real-time trend and reputation tracking analyzes social media buzz, market fluctuations, and community sentiment to identify rising stars and potential pitfalls.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Lens</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">AI-powered content analysis extracts information from text, images, and audio, to reveal deeper meaning and relationships behind digital assets in the Tenzro ecosystem.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Create</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">Enables creation of diverse creative content using Generative AI.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Oracle</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">A conversational AI search assistant that can be trained with custom data to answer questions or be a guide to help discover digital assets.</p>
          </div>
        </div>

        <div id="tokenomics">
          <div className="px-6 md:px-12 pt-4 mono-medium-h text-center mt-24">
            <h1 className="text-2xl">TOKENOMICS</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12 mono-medium-h">
            <div className="border border-neutral-200 rounded-lg p-8">
              <h1 className="text-xl md:text-2xl mb-4"><span className="text-neutral-300">Token</span> X</h1>
              <p className="text-sm md:text-base mono-light leading-relaxed">The utility token that serves as the means to pay for services on the platform. </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-8">
              <h1 className="text-xl md:text-2xl mb-4"><span className="text-neutral-300">Token</span> Y</h1>
              <p className="text-sm md:text-base mono-light leading-relaxed">The governance token that is used for submitting proposals to the Tenzro DAO and participating in the voting process.</p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-8">
              <h1 className="text-xl md:text-2xl mb-4"><span className="text-neutral-300">Token</span> Z</h1>
              <p className="text-sm md:text-base mono-light leading-relaxed">The reputation token that rewards creators for their contributions to the ecosystem through content creation and data provision, crucial elements in training the Tenzro AI.</p>
            </div>
          </div>
        </div>

        <div id="governance">
          <div className="px-6 md:px-12 pt-4 mono-medium-h text-center mt-24">
            <h1 className="text-2xl">GOVERNANCE</h1>
          </div>
          <div className="grid gap-4 p-6 md:p-12 mono-medium-h text-center">
              <p className="text-md md:text-xl mono-light leading-relaxed md:w-2/3 mx-auto">Tenzro maintains true decentralization through its innovative three-token system, separating governance, utility, and incentivization functions to remain aligned with its core vision. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
