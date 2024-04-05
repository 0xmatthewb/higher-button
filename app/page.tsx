// built by @matthewb for the Higher community
// click the green button and ↑ will be copied to your clipboard

'use client';

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast, Toaster } from 'react-hot-toast';

export default function Component() {
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('↑ copied to clipboard!', {iconTheme: {primary: '#018A08', secondary: '#FFFFFF'}, duration:1500})
    } catch (err) {
      toast.error('Failed to copy text.');
      console.error('Failed to copy:', err);
    }
  }

return (
  <div key="1" className="flex flex-col justify-center min-h-screen items-center bg-[#FDFDFD]">

    <main className="flex flex-col items-center justify-center flex-grow">
      <h1 className="text-4xl text-black font-bold mb-8">Higher</h1>
      <Button
        className={`bg-[#018A08] text-white py-4 px-8 text-2xl font-semibold rounded-lg shadow-md transform transition-transform duration-200 ease-in-out active:scale-95 ${
          isHovered ? "bg-[#016A06]" : ""
        }`}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={(e) => {
          setIsHovered(false);
          e.currentTarget.blur();
        }}
        onTouchMove={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseUp={(e) => {
          setIsHovered(false);
          e.currentTarget.blur();
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          copyToClipboard("↑");
          e.currentTarget.blur();
        }}
        variant="default"
      >
        Copy &quot;↑&quot; to clipboard
      </Button>
      {/* This component is responsible for rendering toasts */}
      <Toaster />
    </main>

    <footer className="w-full py-4 flex items-center justify-center">
      <span className="text-sm text-gray-500">Built by</span>
      <a
        className="ml-1 text-[#8A63D2] hover:text-[#6e4fa8] text-sm"
        href="https://warpcast.com/matthewb"
        rel="noopener noreferrer"
        target="_blank"
      >
        @matthewb
      </a>
      <a className="ml-2" href="https://warpcast.com/matthewb" rel="noopener noreferrer" target="_blank">
        <FarcasterIcon />
      </a>
    </footer>

  </div>
)
}

// https://icon-sets.iconify.design/simple-icons/farcaster/
function FarcasterIcon() {
return (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.25em" viewBox="0 0 24 24"><path fill="#8A63D2" d="M18.24.24H5.76A5.76 5.76 0 0 0 0 6v12a5.76 5.76 0 0 0 5.76 5.76h12.48A5.76 5.76 0 0 0 24 18V6A5.76 5.76 0 0 0 18.24.24m.816 17.166v.504a.49.49 0 0 1 .543.48v.568h-5.143v-.569A.49.49 0 0 1 15 17.91v-.504c0-.22.153-.402.358-.458l-.01-4.364c-.158-1.737-1.64-3.098-3.443-3.098c-1.804 0-3.285 1.361-3.443 3.098l-.01 4.358c.228.042.532.208.54.464v.504a.49.49 0 0 1 .543.48v.568H4.392v-.569a.49.49 0 0 1 .543-.479v-.504c0-.253.201-.454.454-.472V9.039h-.49l-.61-2.031H6.93V5.042h9.95v1.966h2.822l-.61 2.03h-.49v7.896c.252.017.453.22.453.472"/></svg>
)}