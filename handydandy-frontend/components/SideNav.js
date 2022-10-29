import {HomeIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {EnvelopeOpenIcon, LightBulbIcon} from "@heroicons/react/20/solid";

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Project Ideas', href: '/projects', icon: LightBulbIcon, current: false },
  { name: 'About Us', href:'/about', icon: UserGroupIcon, current: false },
  { name: 'Contact Us', href: '/contactUs', icon: EnvelopeOpenIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function SideNav(){
    return(
                    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-lightGray">
                <div className="space-y-1 pb-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-200 text-black' : 'text-black hover:bg-lightGray',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-black' : 'text-black group-hover:text-rose',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>

              </nav>
            </div>
    )
}