import Image from 'next/image'
import Link from 'next/link'

export default function Ecosystem() {
    return (
        <div className="container mx-auto pt-24">
            <div className="md:flex md:justify-between p-6 md:p-0 py-24 pb-32 md:py-24 md:pb-32">
                    <div className="md:w-1/2">
                        <h1 className="mono-regular-h font-medium text-4xl md:text-6xl leading-tight md:leading-tight tracking-tight">Built on Tenzro</h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="md:mt-0 mt-6 md:pl-12 text-base md:text-lg mono-regular-h">Explore how our network of partners are using our technology to advance their goals.</p>
                    </div>
                </div>
            <div>
                <div className="flex flex-col">
                    <div className="md:flex">
                        <div className="md:w-1/2 m-4 rounded-xl border">
                            <Image
                                src="/naios-ui.png"
                                width={800}
                                height={800}
                                alt="Picture of the author"
                                className='mx-auto rounded-xl'
                            />
                            <div className='m-8 mb-12'>
                                <h2 className='text-xl md:text-2xl  mono-medium-h'>Naios</h2>
                                <p className='mono-regular-h mt-2 text-lg'>Naios uses Tenzro&apos;s Machine Learning models to develop advanced tools used for music production.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 m-4 rounded-xl border">
                            <Image
                                src="/prvnz.png"
                                width={1000}
                                height={1000}
                                alt="Picture of the author"
                                className='mx-auto rounded-xl'
                            />
                            <div className='m-8 mb-12'>
                                <h2 className='text-xl md:text-2xl  mono-medium-h'>PRVNZ</h2>
                                <p className='mono-regular-h mt-2 text-lg'>PRVNZ uses Tenzro&apos;s AI models to simplify Web3 for small businesses and streamline e-commerce customer experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 p-4"></div>
                        <div className="w-1/2 p-4"></div>
                    </div>
                </div>


            </div>
            <div className='mt-24 px-12 rounded-xl py-24 border'>
                <Image
                    src="/brands.png"
                    width={1280}
                    height={90}
                    alt="Picture of the author"
                    className='mx-auto'
                />
            </div>
            <div>
                <h1 className="mt-32 mono-regular-h font-medium text-2xl md:text-4xl leading-tight md:leading-tight tracking-tight">Start creating with Tenzro’s AI infrastructure.</h1>
                <button className='border-2 mono-regular-h border-black px-16 py-6 rounded-xl mt-12 text-2xl'>
                    <Link href="mailto:team@tenzro.com">Get Started</Link>
                </button>
            </div>
        </div>
    )
}