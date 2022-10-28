
import {
  UsersIcon,
} from '@heroicons/react/24/outline'
import {BellAlertIcon, DocumentTextIcon, WrenchIcon} from "@heroicons/react/20/solid";

const features = [
  {
    name: 'Choose to DIY',
    description: 'Choose from our comprehensive list of popular projects or routine maintenance.',
    icon: WrenchIcon,
  },
  {
    name: 'Hire a Pro',
    description: 'Pro-users are experienced DIYers and Licensed Professionals alike. More importantly, they are your neighbors.',
    icon: UsersIcon,
  },
  {
    name: 'Track all of your projects',
    description: 'With your dashboard, you are able to track all of your routine maintenance and other projects.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Receive Notifications',
    description: 'When routine preventative maintenance is due, we will remind you.',
    icon: BellAlertIcon,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LandingPage() {
  return (
    <div className="bg-white">

      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl pt-10">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover  opacity-70 contrast-50"
                  src="https://images.unsplash.com/photo-1595814432314-90095f342694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="People painting"
                />
                <div className="absolute inset-0  mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-2xl">
                  <span className="block text-white drop-shadow-2xl">Neighbors helping neighbors</span>
                  <span className="block">learn to DIY</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl  sm:max-w-3xl">
                  Meet Neighbors. DIY Stuff.
                </p>
                <div className="  mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="mx-auto flex items-center justify-center space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                    <a
                      href="/api/auth/login"
                      className="flex items-center justify-center rounded-md border border-transparent  mx-auto  px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Sign-Up/Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-semibold">
              Meet Neighbors. DIY Stuff.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            </div>
          </div>
        </div>


        <div className="relative overflow-hidden pt-16 pb-32">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">Hire a "Pro" for your home maintenance/renovations</h2>
                    <p className="mt-4 text-lg">
                      With HandyDandy, you can choose from a curated list of pros near you. They may be licensed professionals, or experienced DIYers. Best of all, they're YOUR neighbors!
                    </p>
                    <div className="mt-6">
                      <a
                        href="/api/auth/login"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-darkBlue to-lightBlue bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base">
                        &ldquo;With HandyDandy, I never fall behind on routine maintenance and I am more confident with DIY than ever!&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium">
                          Broccleigh Ann Floret, Actual Neighbor
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1593788154180-c567b1ad7c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="Neighbor helping"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Tackle any project with our carefully curated list of DIY instructions
                    </h2>
                    <p className="mt-4 text-lg">
                     With HandyDandy, you're given the option to DIY. Browse our comprehensive list of routine maintenance or popular projects for your home.
                    </p>
                    <div className="mt-6">
                      <a
                        href="/api/auth/login"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-darkBlue to-lightBlue bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Diyers"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <p className="mt-4 max-w-3xl ">
             More trendy cliche things about meeting neighbors.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-black">{feature.name}</h3>
                    <p className="mt-2 text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="-mb-1 block  bg-clip-text pb-1 text-transparent">
                Create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">

              <a
                href="/api/auth/login"
                className="flex items-center justify-center rounded-md border bg-gradient-to-r from-lightBlue to-darkBlue border-transparent bg-lightBlue px-4 py-3 text-base text-white font-medium "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}
