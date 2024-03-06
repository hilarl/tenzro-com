import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'

export default function stabilityai() {{
    return (
        <div>
                    <h1 className='mono-medium-h text-3xl my-12'>Stable Diffusion</h1>
                    <Tabs.Root defaultValue="tab1">
                        <Tabs.List className='mono-medium-h pl-4'>
                            <Tabs.Trigger className="TabsTrigger p-4" value="tab1">
                                Images
                            </Tabs.Trigger>
                            <Tabs.Trigger className="TabsTrigger p-4" value="tab2">
                                Video
                            </Tabs.Trigger>
                            <Tabs.Trigger className="TabsTrigger p-4" value="tab3">
                                Generate
                            </Tabs.Trigger>
                            <Tabs.Trigger className="TabsTrigger p-4" value="tab4">
                                Insights
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content className="TabsContent border px-8 rounded-xl" value="tab1">
                            <div>
                                <div className="flex justify-between py-24 pb-24">
                                    <div className="w-1/6">
                                        <Image
                                            src="/sample.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto'
                                        />
                                    </div>
                                    <div className="w-2/6">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample" style="font-size: 16px; letter-spacing: -0.5px; line-height: 2;">
const analysis = tenzro.analyze({
    model: <span style="color: #B3D238;">"gemini"</span>,
    content: <span style="color: #B3D238;">"https://cdn.tenzro.com/image.png"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="w-2/6">
                                        <p className="pl-12 text-sm mono-regular-h">The image shows a flat lay of a gray sweater, blue jeans, a brown beanie, and yellow tulips. The watch is a nice touch and adds a pop of color. The overall aesthetic is clean and casual.</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-8 rounded-xl" value="tab2">
                        <div>
                                <div className="flex justify-between py-24 pb-24">
                                    <div className="w-1/6">
                                        <Image
                                            src="/sample-22.png"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto'
                                        />
                                    </div>
                                    <div className="w-2/6">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample" style="font-size: 16px; letter-spacing: -0.5px; line-height: 2;">
const classification = tenzro.classify({
    model: <span style="color: #B3D238;">"gemini"</span>,
    content: <span style="color: #B3D238;">"https://cdn.tenzro.com/image-2.png"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="w-2/6">
                                        <p className="pl-12 text-base mono-regular-h">The image has a <span className='tenzro-orange'>positive</span> and <span className='tenzro-orange'>happy</span> sentiment.</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-8 rounded-xl" value="tab3">
                        <div>
                                <div className="flex justify-between py-24 pb-24">
                                    <div className="w-1/2">
                                        <Image
                                            src="/sample-3.png"
                                            width={800}
                                            height={800}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto'
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <div className='pl-28' dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample" style="font-size: 22px; letter-spacing: -0.5px; line-height: 2;">
const generate = tenzro.generate({
    model: <span style="color: #B3D238;">"gemini"</span>,
    prompt: <span style="color: #B3D238;">"A brown cat."</span>
});
</pre>
` }} />
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
    )
}}