
/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const team = [
  {
    id: 1,
    name: 'Aoife',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    about: 'My name is Aoife and I am a Software Developer',
  },
  {
    id: 2,
    name: 'Brendon',
    href: '#',

    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    about: 'My name is Brendon and I am a Software Developer',
  },
  {
    id: 3,
    name: 'Brian',
    href: '#',

    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    about: 'My name is Brian and I am a Software Developer',
  },
  {
    id: 4,
    name: 'Marni',
    href: '#',

    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    about: 'My name is Marni and I am a Software Developer',
  },
      {
    id: 5,
    name: 'Sergii',
    href: '#',

    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        about: 'My name is Sergii and I am a Software Developer',
  },

]

export default function AboutUs() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">

      {team.map((team) => (

        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-full ">


            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href={team.href}>
                <img alt={team.imageAlt} className="block h-auto w-full" src={team.imageSrc} />
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    {team.name}
                  </a>
                </h1>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    {team.about}
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        </div>
      )
    )}
    </div>
)}
