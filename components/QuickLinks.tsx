import React from 'react';

export default function QuickLinks() {
  return (
    <div className="w-full bg-black text-brandomedia-yellow py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           {/* Empty left side or just spacing, the image shows text in middle-leftish */}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-center">
            <h2 className="text-xl font-bold text-center md:text-right max-w-xs leading-tight">
                Quick Links so you don't waste a second
            </h2>

            <div className="flex gap-8 md:gap-12 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center text-white group-hover:text-brandomedia-yellow group-hover:border-brandomedia-yellow transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </div>
                    <span className="font-bold text-brandomedia-yellow">To Book</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white group-hover:text-brandomedia-yellow group-hover:border-brandomedia-yellow transition-colors">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <span className="font-bold text-brandomedia-yellow">To Call</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center text-white group-hover:text-brandomedia-yellow group-hover:border-brandomedia-yellow transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </div>
                    <span className="font-bold text-brandomedia-yellow">To Locate</span>
                </div>

                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center text-white group-hover:text-brandomedia-yellow group-hover:border-brandomedia-yellow transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                    </div>
                    <span className="font-bold text-brandomedia-yellow">Review Us</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
