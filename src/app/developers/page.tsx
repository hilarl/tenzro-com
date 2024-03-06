"use client";

import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'
import Gemini from '../../components/models/gemini'
import GPT from '../../components/models/gpt'
import StableDiffusion from '../../components/models/stabilityai'
import Dalle from '../../components/models/dalle'

export default function Developers() {
    return (
        <div className="pt-24">
            <div className="container mx-auto">
                <div className="md:flex md:justify-between p-6 md:p-0 py-24 pb-32 md:py-24 md:pb-32">
                    <div className="md:w-1/2">
                        <h1 className="mono-regular-h font-medium text-4xl md:text-6xl leading-tight md:leading-tight tracking-tight">Enhancing Digital Assets with AI</h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="md:mt-0 mt-6 md:pl-12 text-base md:text-lg mono-regular-h">Our API and SDK empowers developers to create applications with unprecedented levels of sophistication and intelligence, with  access to the most cutting-edge AI models available today.</p>
                    </div>
                </div>
                <div className="md:flex justify-between p-6 md:p-0">
                    <div className="md:w-1/3">
                        <h2 className="pr-12 mb-6 md:mb-12 text-xl mono-regular-h">Developers can start building with just a simple API call.</h2>
                        <p className='mono-regular-h text-sm pr-10 md:mb-0 mb-24'>Tenzro leverages vector embeddings to represent the unique characteristics of each Digital Asset in a format understood by AI models. These act as unique digital fingerprints, capturing the context of an NFT or token in a format readily accessible by AI models.</p>
                    </div>
                    <div className="md:w-2/3">
                        <Tabs.Root defaultValue="tab1">
                            <Tabs.List className='text-sm md:text-base mono-medium-h pl-4'>
                                <Tabs.Trigger className="TabsTrigger p-4" value="tab1">
                                    Python
                                </Tabs.Trigger>
                                <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab2">
                                    Node.js
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content className="TabsContent border p-8 rounded-xl" value="tab1">
                                <div>
                                    <div dangerouslySetInnerHTML={{
                                        __html: `                                        
<pre class="code-sample whitespace-pre-wrap break-words text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 1.6;">
asset = DigitalAsset.create(
    model=<span style="color: #B3D238;">"gemini"</span>,
    asset=[
        {
            <span style="color: #B3D238;">"type"</span>: <span style="color: #B3D238;">"nft"</span>,
            <span style="color: #B3D238;">"data"</span>: [
                {
                    <span style="color: #B3D238;">"owner"</span>: <span style="color: #B3D238;">"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"</span>,
                    <span style="color: #B3D238;">"type"</span>: <span style="color: #B3D238;">"image"</span>,
                    <span style="color: #B3D238;">"src"</span>: <span style="color: #B3D238;">"https://cdn.tenzro.com/img-1.jpg"</span>,
                    <span style="color: #B3D238;">"metadata"</span>: {
                        <span style="color: #B3D238;">"title"</span>: <span style="color: #B3D238;">"Celestial Dreams"</span>,
                        <span style="color: #B3D238;">"description"</span>: <span style="color: #B3D238;">"Immerse yourself in dreams.",</span>
                        <span style="color: #B3D238;">"vectorId"</span>: <span style="color: #B3D238;">"vc123"</span>
                    }
                }
            ]
        }
    ]
)
</pre>
` }} />

                                </div>
                            </Tabs.Content>
                            <Tabs.Content className="TabsContent border p-8 rounded-xl" value="tab2">
                                <div>
                                    <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample whitespace-pre-wrap break-words text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 1.6;">
const asset = tenzro.DigitalAsset.create({
    model: <span style="color: #B3D238;">"gemini"</span>,
    asset: [
        {
            type: <span style="color: #B3D238;">"nft"</span>,
            data: [
                {
                    owner: <span style="color: #B3D238;">"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"</span>,
                    type: <span style="color: #B3D238;">"image"</span>,
                    src: <span style="color: #B3D238;">"https://cdn.tenzro.com/img-1.jpg"</span>,
                    metadata: {
                        title: <span style="color: #B3D238;">"Celestial Dreams"</span>,
                        description: <span style="color: #B3D238;">"Immerse yourself in dreams."</span>,
                        <span style="color: #B3D238;">"vectorId"</span>: <span style="color: #B3D238;">"vc123"</span>
                    }
                }
            ]
        }
    ]
});
</pre>
` }} />
                                </div>
                            </Tabs.Content>
                        </Tabs.Root>

                    </div>
                </div>
                <div className="flex justify-between px-6 md:px-0">
                    <div>
                        <h1 className="mt-16 md:mt-0 mono-regular-h font-medium text-4xl md:text-6xl leading-tight tracking-tight mb-6 md:mb-0">Models</h1>
                    </div>
                </div>
                <Gemini />
                <GPT />
                <Dalle />
            </div>
        </div>
    )
}