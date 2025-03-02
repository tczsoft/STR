import React from 'react'

export default function Herosection() {
  return (
    <section className='py-16'>
        <div className='max-w-[85rem] w-full mx-auto px-4 flex flex-col items-center justify-center'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className='relative'>
                <img src="/assets/Images/Home/Img_2.jpg" className='h-86 w-full object-cover' alt="" />
                <div class="absolute bottom-0 start-0 end-0 bg-[#000000c7]">
                  <div class="p-4 md:p-5">
                    <h1 class="text-xl font-bold text-white">
                      Card title
                    </h1>
                    <p class="mt-1 text-white">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <p class="mt-5 text-xs text-white dark:text-neutral-500">
                      Last updated 5 mins ago
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <img src="/assets/Images/Home/Img_1.png" className='h-86 w-full object-cover' alt="" />
                <div class="absolute bottom-0 start-0 end-0 bg-[#000000c7]">
                  <div class="p-4 md:p-5">
                    <h1 class="text-xl font-bold text-white">
                      Card title
                    </h1>
                    <p class="mt-1 text-white">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <p class="mt-5 text-xs text-white dark:text-neutral-500">
                      Last updated 5 mins ago
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='max-w-[85rem] w-full mx-auto px-4 '>
          <div className='grid grid-cols-3 gap-3'>
            <div className="col-span-2">
              <h2 className='text-xl font-semibold py-5'>More stories</h2>
              <div className="grid grid-cols-2 gap-3">
                
                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

                {/* Card */}
                <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                  <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                    <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p class="mt-1 text-gray-500 dark:text-neutral-400">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border disabled:opacity-50 disabled:pointer-events-none" href="#">
                      Read More
                    </a>
                  </div>
                </div>

              </div>
              <div className='text-center'>
                <button type="button" class="py-2 my-4 px-3 w-[70%] items-center gap-x-2 text-md font-medium rounded-md border border-transparent bg-[#2e3051] text-white hover:bg-[#2e3051] disabled:pointer-events-none">
                  LOAD MORE
                </button>
              </div>
            </div>

            <div className="">
              <h2 className='text-xl font-semibold py-5 text-center side-line'>Our Picks</h2>

              {/* Card */}
              <div class=" flex flex-col bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <img class="w-full h-auto rounded-t-xl" src="/assets/Images/Home/Img_2.jpg" alt="Card Image" />
                <div class="relative p-4 md:p-5 rounded-b-2xl border-gray-300 border-b-1 border-l-1 border-r-1">
                  <span class="cursor-pointer inline-flex items-center gap-x-1.5 pt-1 px-2 rounded-full text-md font-medium bg-red-500 text-white absolute top-[-15px] left-[45%]"><i class="fi fi-rr-fire-flame-curved"></i></span>
                  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Card title
                  </h3>

                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
