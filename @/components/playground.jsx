/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/do4bABfUhiB
 */
import {
  CardTitle,
  CardHeader,
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

export const runtime = 'edge'

export default function Playground() {
  return (
    <div className="bg-[#000000] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 mono-medium-h py-12">
        THE CORTEX PLAYGROUND
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-black border border-neutral-700 flex flex-col h-full">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/insights-icon.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  INSIGHTS
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white"></ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Enter text to be analyzed here"
            />
          </CardFooter>
        </Card>
        <Card className="bg-[#000000] border border-neutral-700">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/radar-icon.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  RADAR
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white"></ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Enter search query here"
            />
          </CardFooter>
        </Card>
        <Card className="bg-[#000000] border border-neutral-700">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/lens-icon.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  LENS
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white"></ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Upload content to be analyzed here"
            />
          </CardFooter>
        </Card>
        <Card className="bg-black border border-neutral-700 flex flex-col h-full col-span-2">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/oracle-icon.svg"
                  width={42}
                  height={42}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  ORACLE
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white">
            </ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Enter a prompt here"
            />
          </CardFooter>
        </Card>
        <Card className="bg-[#000000] border border-neutral-700">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/ledger-icon.svg"
                  width={42}
                  height={42}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  LEDGER
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white">
              <table class="w-full table-auto">
                <thead>
                  <tr class="text-sm">
                    <th class="px-2 py-2 text-left">Block</th>
                    <th class="px-2 py-2 text-left">Hash</th>
                    <th class="px-2 py-2 text-left">Time</th>
                    <th class="px-2 py-2 text-left">Trax</th>
                    <th class="px-2 py-2 text-right">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">49</td>
                    <td class="px-2 py-2 text-left">
                      <Link href="https://subnets-test.avax.network/thari/block/0x856ff73b67d8c298c5ed0c9dcad19f81a10162de558c8a5930dbeb7fe8aa7564">
                        0x856...7564
                      </Link>
                    </td>
                    <td class="px-2 py-2 text-left truncate">1w ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                  <tr class="text-xs">
                    <td class="px-2 py-2 text-left">38</td>
                    <td class="px-2 py-2 text-left">0x856...7564</td>
                    <td class="px-2 py-2 text-left truncate">1m ago</td>
                    <td class="px-2 py-2 text-center">1</td>
                    <td class="px-2 py-2 text-right truncate">0.0005 TNZR</td>
                  </tr>
                </tbody>
              </table>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <div className="mono-regular-h flex space-x-2 text-white text-sm">
              View All Transactions
            </div>
          </CardFooter>
        </Card>
        <Card className="bg-[#000000] border border-neutral-700">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/cortex-icon.svg"
                  width={42}
                  height={42}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  CREATE
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white"></ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Enter search query here"
            />
          </CardFooter>
        </Card>
        <Card className="bg-[#000000] border border-neutral-700 col-span-2">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Image
                  src="/identity-icon.svg"
                  width={42}
                  height={42}
                  alt="Picture of the author"
                />
                <h3 className="ml-4 text-white mono-regular-h tracking-wide">
                  IDENTITY
                </h3>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64 text-white"></ScrollArea>
          </CardContent>
          <CardFooter className="flex-grow">
            <Input
              className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0"
              placeholder="Enter text to be encrypted here"
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function RadarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </svg>
  );
}

function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function FingerprintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
    </svg>
  );
}
