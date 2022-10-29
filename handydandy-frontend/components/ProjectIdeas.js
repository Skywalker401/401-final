


const projects = [
  {
    id: 1,
    name: 'Install Shiplap in your home!',
    href: 'https://www.wikihow.com/Install-Shiplap',

  },
   {
    id: 2,
    name: 'Epoxy Coat Your Garage Floor!',
    href: 'https://www.wikihow.com/Do-Epoxy-Flooring',

  },
  {
    id: 3,
    name: 'Install Luxury Vinyl Plank Flooring!',
    href: 'https://www.wikihow.com/Install-Vinyl-Plank-Flooring-on-Concrete',

  },
  {
    id: 4,
    name: 'Build a Pergola!',
    href: 'https://www.wikihow.com/Build-a-Pergola',

  },
    {
    id: 5,
    name: 'Install String Lighting!',
    href: 'https://www.wikihow.com/Hang-String-Lights-on-a-Covered-Patio',

  },
]
export default function ProjectIdeas() {

  return (
    <>
        <div className="mt-4">
          <h1 className="sr-only">Upcoming Maintenance</h1>
          <ul role="list" className="space-y-4">


            {projects.map((projects) => (
             <a href={projects.href} target="_blank"> <li key={projects.id} className=" text-center px-4 py-6 bg-lightBlue text-white font-medium shadow-lg sm:rounded-lg sm:p-6 m-5">

               <h1>{projects.name}</h1>
              </li></a>
            ))}
          </ul>
        </div>
    </>
  )
}

