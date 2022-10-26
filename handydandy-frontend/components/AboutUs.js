import Image from "next/image";
import marni from "../img/marni.JPG"
import brian from "../img/brian.jpeg"
import aoife from "../img/aoife.jpg"
import sergii from "../img/sergii.jpg"
import brendon from "../img/brendon.jpeg"
  const team = [
  {
    id: 1,
    name: 'Aoife',
    href: '#',
    src: aoife,
    imageAlt: 'Aoife',
    about: 'Hi, I am a Software Developer'
  },
  {
    id: 2,
    name: 'Brendon',
    href: '#',
    src: brendon,
    imageAlt: 'Brendon',
    about: 'Hi, I am a Software Developer'
  },
  {
    id: 3,
    name: 'Brian',
    href: '#',
    src: brian,
    imageAlt: 'Brian',
    about: 'Hi, I am a Software Developer'
  },
  {
    id: 4,
    name: 'Marni',
    href: '#',
    src: marni,
    imageAlt: 'Marni',
    about: 'Hi, I am a Software Developer'
  },
      {
    id: 5,
    name: 'Sergii',
    href: '#',
    src: sergii,
    imageAlt: 'Sergii',
        about: 'Hi, I am a Software Developer'
  },

]
export default function AboutUs() {

  return (
<>
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 ">
    {team.map((team) =>(
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full">
        <article className="overflow-auto rounded-lg shadow-lg h-3/4 p-1">
          <a href={team.href}>
            <Image  src={team.src} alt={team.imageAlt} className="block h-auto w-full"/>
          </a>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg text-block">
              <a className="no-underline hover:underline text-black" href="#">
                {team.name}
              </a>
            </h1>
          </header>
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <p>{team.about}</p>
          </footer>
        </article>
      </div>
    </div>
    ))}
</div>
</>
  )
}
