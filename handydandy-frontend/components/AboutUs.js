import Image from "next/image";
import marni from "../img/marni.JPG"
import brian from "../img/brian.jpeg"
import aoife from "../img/aoife.jpg"
import sergii from "../img/sergii.jpg"
import brendon from "../img/brendon.jpg"

// add more links to object is need
  const team = [
  {
    id: 1,
    name: 'Aoife',
    href: '#',
    src: aoife,
    imageAlt: 'Aoife',
    about: 'Hi, I am a Software Developer',
    linkedIn:"https://www.linkedin.com/in/aoife-mulligan-b3a821220/",
    GitHub:"https://github.com/AoifeWM"
  },
  {
    id: 2,
    name: 'Brendon',
    href: '#',
    src: brendon,
    imageAlt: 'Brendon',
    about: 'My name is Brendon and I’ll be honest, I didn’t plan on a Career in Web Development. at first, I coded because I enjoyed it, then I realized that if I want to make something serious out of it, I need to learn the industry and practices. So here I am.',
    linkedIn:"https://www.linkedin.com/in/brendon-hampton-37132899/",
    GitHub:"https://github.com/BrendonLH"
  },
  {
    id: 3,
    name: 'Brian',
    href: '#',
    src: brian,
    imageAlt: 'Brian',
    about: 'Hi, I am a Software Developer',
    linkedIn:"https://www.linkedin.com/in/brianjtarte/",
    GitHub:"https://github.com/brianjtarte"
  },
  {
    id: 4,
    name: 'Marni',
    href: '#',
    src: marni,
    imageAlt: 'Marni',
    about: 'Hi, I am a Software Developer',
    linkedIn:"https://www.linkedin.com/in/marnihager/",
    GitHub:"https://github.com/mlh6118"
  },
      {
    id: 5,
    name: 'Sergii',
    href: '#',
    src: sergii,
    imageAlt: 'Sergii',
    about: 'Hi, I am a Software Developer',
    linkedIn:"https://www.linkedin.com/in/sergii-otryshko/",
    GitHub:"https://github.com/S14mx"
  },

]
export default function AboutUs() {

  return (
    <>
      {team.map((team) =>(
        <div key={team.id} className="card card-plain">
          <div className="flex">
            <div className="w-1/3">
              <Image
                className="rounded-lg"
                src={team.src}
                alt="card image"
              />
            </div>
            <div className="card-body w-2/3">
              <span className="font-bold uppercase text-rose">{team.name}</span>
              <p className="mb-5 opacity-80">
                {team.about}
              </p>
              <p className="font-bold text-mediumBlue"><a target="_blank" href={team.linkedIn}>LinkedIn</a>.</p>
              <p className="font-bold text-mediumBlue"><a target="_blank" href={team.GitHub}>GitHub</a>.</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

//  {/* <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 ">
//     {team.map((team) =>(
//             <div className="flex flex-wrap -mx-1 lg:-mx-4">
//       <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full">
//         <article className="overflow-auto rounded-lg shadow-lg h-3/4 p-1">
//           <a href={team.href}>
//             <Image  src={team.src} alt={team.imageAlt} className="block h-auto w-full"/>
//           </a>
//           <header className="flex items-center justify-between leading-tight p-2 md:p-4">
//             <h1 className="text-lg text-block">
//               <a className="no-underline hover:underline text-black" href="#">
//                 {team.name}
//               </a>
//             </h1>
//           </header>
//           <footer className="flex items-center justify-between leading-none p-2 md:p-4">
//               <p> {team.about} </p>
//           </footer>
//         </article>
//       </div>
//     </div>
//     ))}
// </div> */}