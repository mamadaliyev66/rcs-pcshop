// import React from 'react'
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://cfwtenenwqvbhblumcpk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmd3RlbmVud3F2YmhibHVtY3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTY1NDQ2NywiZXhwIjoxOTk1MjMwNDY3fQ.YBJSHRVum64s-1dx7kAYit4nrceMLVlVt5kygQXq5k0");






// function GetProducts() {
//     const [prods, setProds] = useState([]);
//     useEffect(() => {
//         getProds();
//       },[] );
    
    
//     async function getProds() {
//             const { data } = await supabase.from("computers").select();
//             setProds(data);
//             console.log(data);

//             // SetProds()
//     }


    // function SetProds(){
    //   prods.map((item)=>{
    //       products.unshift(
    //         {
    //           id: item.id,
    //           name: item.name,
    //           cpuName:item.cpu_name,
    //           cpuCore:item.cpu_core,
    //           gpuName:item.gpu_name,
    //           gpuSize:item.gpu_size,
    //           displaySize:"",
    //           displatFR:"",
    //           storage:"",
    //           imageSrc: '',
    //           imageAlt: "",
    //           price: '',
    //         }
    //       )
    //   })
    // }
    
  // return (
   
   
   
   
   
   
   
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //     <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kompyuterlar</h2>

    //     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    //       {prods.map((item) => (
    //         <div key={item.id} className="group text-center rounded-xl relative ">
    //           <div className=" aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-75 ">
    //             <img
    //               src={supabase.storage.from('computers/'+item.pc_type).getPublicUrl(item.image).data.publicUrl} 
    //               alt={item.image}
    //               className=""
    //             />
    //           </div>
    //           <div className="mt-4 flex justify-between">
    //             <div>
    //               <h3 className="text-sm text-gray-700">
    //                   <span aria-hidden="true" className="absolute inset-0" />
    //                   {item.name}
    //               </h3>
    //               <br />
    //               <p className="mt-1 text-sm text-gray-500">CPU:  {item.cpu_name}</p>
    //               <p className="mt-1 text-sm text-gray-500">CPU Core:  {item.cpu_core}</p>
    //               <p className="mt-1 text-sm text-gray-500">GPU Core:  {item.gpu_name}</p>
    //               <p className="mt-1 text-sm text-gray-500">GPU Size:  {item.gpu_size}</p>
    //               <p className="mt-1 text-sm text-gray-500">Display:  {item.display_size}</p>
    //               <p className="mt-1 text-sm text-gray-500">Display Chastotasi:  {item.display_fr}</p>
    //               <p className="mt-1 text-sm text-gray-500">Xotira:  {item.storage_size} {item.storage_type}</p>

    //             <p className="text-sm font-medium text-gray-900">Narxi:   {item.price}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
   
   
   
   
   
    // <div className='flex'>
        
       
    //     {prods.map((item) => (
    //             <div className=" ml-5 mr-5card w-96 bg-violet-800 shadow-xl" key={item.id}>
    //                 <figure><img className='bg-white w-full' src={supabase.storage.from('computers/'+item.pc_type).getPublicUrl(item.image).data.publicUrl} alt="Shoes" /></figure>
    //                 <div className="card-body ">
    //                     <h2 className="card-title">{item.name}</h2>
    //                     <div className='grid  grid-cols-2'>
    //                     <p>CPU</p>
    //                     <p>{item.cpu_name}</p>
    //                     <p>CPU Core </p>
    //                     <p>{item.cpu_core}</p>
    //                     <p>GPU </p>
    //                     <p>{item.gpu_name}</p>
    //                     <p>GPU Size </p>
    //                     <p>{item.gpu_size}</p>
    //                     <p>Display </p>
    //                     <p>{item.display_size}</p>
    //                     <p>Display Fresh Rate </p>
    //                     <p>{item.display_fr}</p>
    //                     <p>Storage</p>
    //                     <p> {item.storage_size} {item.storage_type}</p>
    //                     <div className="card-actions justify-end">
    //                       <button className="btn btn-primary">Buy Now</button>
    //                     </div>
    //                     </div>
    //                 </div>
    //             </div> 
    //     ))} 
//     // </div>
//   )
// }

// export default GetProducts

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GetProds() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [prods, setProds] = useState([]);
  const [searched,setSearched] = useState([])
  useEffect(() => {
      getProds();
    },[] );
  
  
  async function getProds() {
          const { data } = await supabase.from("computers").select();
          setProds(data);
          console.log(data);

          // SetProds()
  }

    async function Search(){
      const { data, error } = await supabase
      .from('computers')
      .select()
      .ilike('name', '%'+document.getElementById('default-search').value+'%')
      setProds(data);
          console.log(prods);
        }

  return (
    <div className="bg-no-repeat bg-fixed bg-center	bg-cover bg-[url('https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg')] text-white">
      <div>
        
                

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight ">Kompyuterlar</h1>
            
            {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative w-1/2 block">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input  type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qidirish . . ." required />
                    <button type="submit" onClick={Search} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Qidirish</button>
                </div> */}
                <div className="flex mt-10  rounded">
                <input
                id="default-search"
                    type="text"
                    className=" block w-full px-4 py-2  bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button onClick={Search} className="px-4 ml-2 text-white bg-primary rounded ">
                    Search
                </button>
            </div>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  
                </Transition>
              </Menu>

             
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
             

              {/* Product grid */}
              <div className="lg:col-span-3">
                
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      

        <div className="mt-6 grid  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {prods.map((item) => (
            <div key={item.id} className="group text-center rounded-xl relative ">
              <div className=" aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-300 lg:aspect-none group-hover:opacity-75 ">
                <img
                  src={supabase.storage.from('computers/'+item.pc_type).getPublicUrl(item.image).data.publicUrl} 
                  alt={item.image}
                  className=""
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-50">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                  </h3>
                  <br />
                  <p className="mt-1 text-sm text-gray-300">CPU:  {item.cpu_name}</p>
                  <p className="mt-1 text-sm text-gray-300">CPU Core:  {item.cpu_core}</p>
                  <p className="mt-1 text-sm text-gray-300">GPU Core:  {item.gpu_name}</p>
                  <p className="mt-1 text-sm text-gray-300">GPU Size:  {item.gpu_size}</p>
                  <p className="mt-1 text-sm text-gray-300">Display:  {item.display_size}</p>
                  <p className="mt-1 text-sm text-gray-300">Display Chastotasi:  {item.display_fr}</p>
                  <p className="mt-1 text-sm text-gray-300">Xotira:  {item.storage_size} {item.storage_type}</p>

                <p className="text-sm font-medium text-gray-100">Narxi:   {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}