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
        position: "relative",
        
      }} className="bg-black">
        <video autoplay muted loop playsinline style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}>
          <source src="/tenzro-ball-720.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="grid place-items-center h-1/4 p-8 md:-p-0 md:h-1/3 mt-52 md:mt-60 w-full md:w-2/3 m-auto">
          <h1 class="text-3xl md:text-5xl text-center text-white mono-medium-h">Decentralized AI Training and Compute System</h1>
          <h3 class="text-sm md:text-md md:text-xl mt-6 md:mt-8 text-center text-white mono-light md:px-14">A peer-to-peer network where anyone with a device and an internet connection can participate in AI training and compute.</h3>
        </div>
      </section>


      <div className='px-6 md:px-12 mt-20'>
        <div className="md:flex py-12 md:py-0 md:h-72">
          <div className="w-full md:w-3/4">
            <h1 className="mono-regular-h text-3xl text-left md:text-left">Centralized AI development often results in monopolistic control, biased models, and privacy breaches.</h1>
          </div>
          <div className="w-full md:w-full">
            <p className="mono-regular-h mt-8 md:mt-0 md:pl-14 text-xl text-left md:text-left">Tenzro democratizes access to AI resources, allowing a diverse range of participants to contribute to and benefit from AI advancements.</p>
          </div>
        </div>
      </div>
      <div class='min-h-screen px-6 md:px-12' id="discover">
        <div class="md:flex">
          <div class="p-6 md:p-8 w-full md:w-1/2 border border-neutral-200 rounded-lg text-black h-auto md:h-72 mt-20 mr-20 mono-regular-h">
            <h1 className="text-xl md:text-2xl mb-4">Contribute to a Fairer AI Future</h1>
            <p className="mb-24 text-sm md:text-base text-neutral-400 mono-light">Be a part of the Tenzro network and contribute to a decentralized, ethical, and sustainable AI ecosystem. Whether you are a developer, data contributor, or and AI enthusiast, Tenzro offers a platform for meaningful participation and impact.</p>
          </div>
          <div class="md:w-1/2">
            <Accordion type="single" collapsible className="w-full mt-12 mb-20">
              <AccordionItem value="item-1" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300">1</span>Peer-to-Peer Network</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro&apos;s decentralized approach enables a peer-to-peer network where anyone with a device and an internet connection.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-2" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">2</span>On-Device Processing</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tenzro utilizes the computing power of individual devices, minimizing the need for large, centralized data centers.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-3" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">3</span>Incentivized Participation</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Contributors, or Trainers, earn an income for providing data, computing power, and model training.
                    </motion.div>
                  </AccordionContent>
                </div>
              </AccordionItem>
              <AccordionItem value="item-4" className="accordion-item w-full text-left">
                <div class="pb-8">
                  <AccordionTrigger className="accordion-title">
                    <span className='text-xl md:text-3xl'><span className="text-2xl md:text-4xl mr-4 text-neutral-300 ">4</span>Intelligent Digital Assets</span>
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content mono-light leading-relaxed">
                    <motion.div
                      className="accordion-content text-md md:text-lg"
                      key="modal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      The Contextual Framework enables intelligent digital assets by integrating AI-driven vector embeddings and metadata, enhancing discoverability and user interactions with advanced contextual understanding.
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
            <h1 className="text-xl md:text-2xl mb-4">Training System</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">Participants, in Tenzro&apos;s AI training system contribute to the network and are rewarded with tokens.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Data Marketplace</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">A decentralized marketplace for training data and processed data, participants are incentivized fairly.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Contextual Framework</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">Tenzro’s contextual framework enables the seamless integration of AI with blockchain-based content.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">Compute Currency</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">A utility token, which is used for accessing compute power, services, and features within the ecosystem.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">The Cortex</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">a sophisticated AI infrastructure designed to facilitate the management and access of AI models.</p>
          </div>
          <div className="border border-neutral-200 rounded-lg p-8">
            <h1 className="text-xl md:text-2xl mb-4">DAO</h1>
            <p className="text-sm md:text-base mono-light leading-relaxed">The Tenzro DAO is structured to ensure effective decision-making and the sustainable growth of the ecosystem.</p>
          </div>
        </div>

        <div id="tokenomics">
          <div className="px-6 md:px-12 pt-4 mono-medium-h text-center mt-24">
            <h1 className="text-2xl">TOKENOMICS</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12 mono-medium-h">
            <div className="border border-neutral-200 rounded-lg p-8">
              <h1 className="text-xl md:text-2xl mb-4"><span className="text-neutral-300">Token</span> X</h1>
              <p className="text-sm md:text-base mono-light leading-relaxed">The governance token that is used for submitting proposals to the Tenzro DAO and participating in the voting process. </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-8">
              <h1 className="text-xl md:text-2xl mb-4"><span className="text-neutral-300">Token</span> Y</h1>
              <p className="text-sm md:text-base mono-light leading-relaxed">The utility token that serves as the means to pay for services on the platform.</p>
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
