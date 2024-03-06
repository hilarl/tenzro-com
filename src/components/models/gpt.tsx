import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image'

export default function gemini() {{
    return (
        <div>
                    <h1 className='mono-medium-h text-2xl md:text-3xl mt-6 mb-2 md:my-12 ml-6 md:ml-0'>GPT</h1>
                    <Tabs.Root defaultValue="tab1" className='md:p-0 p-6 mb-8 md:mb-16'>
                        <Tabs.List className='mono-medium-h pl-4'>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab1">
                                Text
                            </Tabs.Trigger>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab2">
                                Embeddings
                            </Tabs.Trigger>
                            <Tabs.Trigger className="text-sm md:text-base TabsTrigger p-4" value="tab3">
                                Insights
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab1">
                            <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-12 md:pb-24">
                                    <div className="md:w-1/2">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="md:ml-10 code-sample whitespace-pre-wrap break-words text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 2;">
const text = tenzro.text({
    model: <span style="color: #B3D238;">"gpt"</span>,
    prompt: <span style="color: #B3D238;">"Can you tell me a joke?"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-1/2">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 text-sm md:text-base mono-regular-h whitespace-pre-wrap break-words">Sure! Here&apos;s one: Why couldn&apos;t the bicycle stand up by itself? Because it was two-tired!</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab2">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-8 md:pb-24">
                                    <div className="md:w-1/2">
                                        <div dangerouslySetInnerHTML={{
                                        __html: `
<pre class="md:ml-10 whitespace-pre-wrap break-words code-sample text-sm md:text-base" style="letter-spacing: -0.5px; line-height: 2;">
const embeddings = tenzro.embeddings({
    model: <span style="color: #B3D238;">"gpt"</span>,
    input: <span style="color: #B3D238;">"The quick brown fox jumps over the lazy dog."</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-1/2">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 text-sm  md:text-base mono-regular-h leading-relaxed md:leading-relaxed">&quot;The&quot;: <span className='tenzro-blue'>[0.1, 0.2, 0.3, ...]</span> &quot;quick&quot;: <span className='tenzro-blue'>[0.4, 0.5, 0.6, ...]</span> &quot;brown&quot;: <span className='tenzro-blue'>[0.7, 0.8, 0.9, ...]</span> &quot;fox&quot;: <span className='tenzro-blue'>[1.0, 1.1, 1.2, ...]</span> &quot;jumps&quot;: <span className='tenzro-blue'>[1.3, 1.4, 1.5, ...]</span> &quot;over&quot;: <span className='tenzro-blue'>[1.6, 1.7, 1.8, ...]</span> &quot;the&quot;: <span className='tenzro-blue'>[1.9, 2.0, 2.1, ...]</span> &quot;lazy&quot;: <span className='tenzro-blue'>[2.2, 2.3, 2.4, ...]</span> &quot;dog&quot;: <span className='tenzro-blue'>[2.5, 2.6, 2.7, ...]</span></p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent border px-6 md:px-8 rounded-xl" value="tab3">
                        <div>
                                <div className="md:flex justify-between py-6 md:py-24 pb-8 md:pb-24">
                                    <div className="md:w-2/6">
                                        <Image
                                            src="/avax.png"
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
    model: <span style="color: #B3D238;">"gpt"</span>,
    topic: <span style="color: #B3D238;">"Avax"</span>
});
</pre>
` }} />
                                    </div>
                                    <div className="md:w-2/6">
                                        <h3 className='md:pl-12 mb-4 mono-medium-h mt-6 md:mt-0'>Result: </h3>
                                        <p className="mt-6 md:mt-0 md:pl-12 md:text-base text-sm mono-regular-h">Avalanche (AVAX) Pushes Toward $50, Solana (SOL) and KangaMoon (KANG) Prices Soar: This news article from Blockchain Reporter (Feb 28, 2024) discusses potential price increases for AVAX. </p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Content>
                        
                    </Tabs.Root>
                </div>
    )
}}