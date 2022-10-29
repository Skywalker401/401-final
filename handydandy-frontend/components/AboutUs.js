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
    about: 'I\'m Aoife Mulligan and I\'m a software developer. I\'m a Passionate worker with a strong strong background in the sciences, specifically microbiology, biotech, bioinformatics, and also in art. I am a creative problem solver and a team player who is skilled at contributing to and helping coordinate group efforts. In my free time she enjoys cooking, painting, playing video games, and playing with my two dogs.',
    linkedIn:"https://www.linkedin.com/in/aoife-mulligan-b3a821220/",
    GitHub:"https://github.com/AoifeWM"
  },
  {
    id: 2,
    name: 'Brendon',
    href: '#',
    src: brendon,
    imageAlt: 'Brendon',
    about: 'My name is Brendon and I’ll be honest, I didn’t plan on a Career in Web Development. At first, I coded because I enjoyed it, then I realized that if I want to make something serious out of it, I need to learn the industry and practices. So here I am.',
    linkedIn:"https://www.linkedin.com/in/brendon-hampton-37132899/",
    GitHub:"https://github.com/BrendonLH"
  },
  {
    id: 3,
    name: 'Brian',
    href: '#',
    src: brian,
    imageAlt: 'Brian',
    about: 'My name is Brian and I am a Software Developer with a background in Supply Chain Leadership. My dream is to work with a team that helps spacecraft navigate the stars.',
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

