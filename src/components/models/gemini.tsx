import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'

export default function gemini() {{
    return (
        <div>
                    <h1 className='mono-medium-h text-2xl md:text-3xl mt-6 mb-2 md:my-12 ml-6 md:ml-0'>Google Gemini</h1>
                    <Tabs.Root defaultValue="tab1" className='md:p-0 p-6 mb-8 md:mb-16'>
                        <Tabs.List className='mono-medium-h pl-4'>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab1">
                                Analyze
                            </Tabs.Trigger>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab2">
                                Classify
                            </Tabs.Trigger>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab3">
                                Insights
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab1">
                            <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-12 md:pb-24">
                                    <div className="md:w-2/6">
                                        <Image
                                            src="/sample.png"
                                            width={600}
                                            height={600}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto mb-6 md:mb-0'
                                        />
                                    </div>
                                    <div className="md:w-2/6">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="md:ml-10 code-sample whitespace-pre-wrap break-words text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 2;">
const analysis = tenzro.analyze({
    model: <span style="color: #B3D238;">"gemini"</span>,
    content: <span style="color: #B3D238;">"https://10x0.xyz/i.png"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-2/6">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 text-sm mono-regular-h whitespace-pre-wrap break-words">The image shows a flat lay of a gray sweater, blue jeans, a brown beanie, and yellow tulips. The watch is a nice touch and adds a pop of color. The overall aesthetic is clean and casual.</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab2">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-8 md:pb-24">
                                    <div className="md:w-2/6">
                                        <Image
                                            src="/sample-22.png"
                                            width={700}
                                            height={700}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto mb-6 md:mb-0'
                                        />
                                    </div>
                                    <div className="md:w-2/6">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="md:ml-10 whitespace-pre-wrap break-words code-sample text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 2;">
const classify = tenzro.classify({
    model: <span style="color: #B3D238;">"gemini"</span>,
    content: <span style="color: #B3D238;">"https://10x0.xyz/j.png"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-2/6">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 text-base md:text-xl mono-regular-h">The image has a <span className='tenzro-orange'>positive</span> and <span className='tenzro-orange'>happy</span> sentiment.</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab3">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-8 md:pb-24">
                                    <div className="md:w-2/6">
                                        <Image
                                            src="/swift.png"
                                            width={700}
                                            height={700}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto mb-6 md:mb-0'
                                        />
                                    </div>
                                    <div className="md:w-2/6">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="md:ml-10 whitespace-pre-wrap break-words code-sample text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 2;">
const insights = tenzro.insights({
    model: <span style="color: #B3D238;">"gemini"</span>,
    topic: <span style="color: #B3D238;">"Taylor Swift"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-2/6">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 md:text-base text-sm mono-regular-h">Taylor Swift&apos;s latest album, &quot;Midnights,&quot; has broken numerous records, solidifying her status as a global music icon. Her innovative use of social media and storytelling has created a deeply engaged fan base, known as &quot;Swifies.</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        
                    </Tabs.Root>
                </div>
    )
}}