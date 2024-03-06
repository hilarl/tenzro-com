import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'

export default function dalle() {{
    return (
        <div>
                    <h1 className='mono-medium-h text-2xl md:text-3xl mt-6 mb-2 md:my-12 ml-6 md:ml-0'>DALL-E</h1>
                    <Tabs.Root defaultValue="tab1" className='md:p-0 p-6 mb-8 md:mb-16'>
                        <Tabs.List className='mono-medium-h pl-4'>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab1">
                                Generate Images
                            </Tabs.Trigger>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab2">
                                Variations
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab1">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-12 md:pb-24">
                                    <div className="md:w-1/2">
                                        <Image
                                            src="/sample-3.png"
                                            width={800}
                                            height={800}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto mb-6 md:mb-0'
                                        />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className='md:pl-28' dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample whitespace-pre-wrap break-words text-base md:text-xl" style="letter-spacing: -0.5px; line-height: 2;">
const generate = tenzro.generate({
    model: <span style="color: #B3D238;">"dall-e"</span>,
    prompt: <span style="color: #B3D238;">"A brown cat."</span>
});
</pre>
` }} />
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab2">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-12 md:pb-24">
                                    <div className="md:w-1/2">
                                        <div className='flex'>
                                        <Image
                                            src="/cats.png"
                                            width={800}
                                            height={800}
                                            alt="Picture of the author"
                                            className='rounded-xl mx-auto mb-6 md:mb-0'
                                        />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className='md:pl-28' dangerouslySetInnerHTML={{
                                        __html: `
<pre class="code-sample whitespace-pre-wrap break-words text-base md:text-xl" style="letter-spacing: -0.5px; line-height: 2;">
const variation = tenzro.generateVariation({
    model: <span style="color: #B3D238;">"dall-e"</span>,
    image: <span style="color: #B3D238;">"https://10x0.xyz/k.png"</span>
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