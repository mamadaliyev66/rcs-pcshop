// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
// import Logo from "../assets/rcsLogo.jpg"
// const features = [
//   {
//     name: 'Nodatiy va Ajoyib Websitelar',
//     description:
//       'Nodatiy, ajoyib va ko`p funksiyaga ega website kerakmi unda bizga shu yerdamiz !',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'Mobile Ilovalar.',
//     description: 'Sizning biznesingiz uchun mobile ilova kerakmi RCS jamoasi buni ham tez va arzon narxlarda tayyorlab beradi!',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Desktop Dasturlar.',
//     description: 'Kompyuterlar uchun ajoyib va takrorlanmas ilovalarni RCS Jamoasi siz uchun tayyorlaydi!',
//     icon: ServerIcon,
//   },
// ]

// export default function About() {
//   return (
//     <div className="overflow-hidden bg-black-600 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pr-8 lg:pt-4">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base font-semibold leading-7 text-indigo-600">Biz Haqimizda</h2>
//               <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">RCS Team</p>
//               <p className="mt-6 text-lg leading-8 text-gray-300">
//               RCS Team 2021 yil 1 Sentyabrdan o'z faoliyatini boshlagan. RCS team o'z ish faoliyatini malakali dasturchilar bilan do'kon , zavod va boshqa xizmatlar uchun web site,mobile ilova va desktop dasturlarini tayyorlash bilan boshladi va hozir ham o'z faoliyatini olib bormoqda.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-100">
//                       <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline text-gray-400">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//           <img
//             src={Logo}
//             alt="Product screenshot"
//             className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//             width={2432}
//             height={1442}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }



// // import React from 'react'
// // import Logo from "../assets/forrek.png"
// // function About() {
// //   return (
// //     <div>

// //       <div className="card mt-10 mb-48 ml-10 mr-10 lg:card-side h-full bg-blue-900 shadow-xl">
// //         <figure className='mt-5 mb-5 ml-5 mr-5'><img className='w-80' src={Logo} alt="Album"/></figure>
// //         <div className="card-body">
// //           <h2 className="card-title">RCS Team</h2>
// //           <p className='w-96'>RCS Team 2021 yil 1 Sentyabrdan o'z faoliyatini boshlagan. RCS team o'z ish faoliyatini malakali dasturchilar bilan do'kon , zavod va boshqa xizmatlar uchun web site,mobile ilova va desktop dasturlarini tayyorlash bilan boshladi va hozir ham o'z faoliyatini olib bormoqda.</p>
// //           <div className="card-actions justify-end">
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default About


import React from "react";
import AboutImg from "../assets/forrek.png";

const About = () => {
  return (
    <div className="bg-no-repeat bg-fixed bg-center	bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/myapp-19322.appspot.com/o/pexels-nikolaos-dimou-2473183.jpg?alt=media&token=4d4c84f3-0d30-42be-b1cb-ec250be424a6')]">
    <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
    <section className="bg-secondery text-white px-5 py-32 " id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            RCS Team
          </h2>

          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus quia, cupiditate exercitationem nostrum excepturi repellendus laboriosam nemo amet quae! Similique atque, consequatur enim qui consequuntur voluptas sapiente eaque nisi.
          </p>
          <p className="pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus quia, cupiditate exercitationem nostrum 
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] lg:w-72 mt-5 md:ml-24"
          />
        </div>
      </div>
    </section>
        </div>
  </div>
  );
};

export default About;