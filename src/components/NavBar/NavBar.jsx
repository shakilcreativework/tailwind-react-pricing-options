import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Pricing",
    path: "/pricing"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);

    // links
    const links = routes.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className='flex justify-between mx-2 lg:mx-5 py-2'>
            {/* <Menu /> */}
            <span className='flex items-center gap-1' onClick={() => setOpen(!open)}>
                {
                    !open ? <Menu className='md:hidden' />
                    :
                    <X className='md:hidden' />
                }
                {
                    <ul className={`
                    md:hidden absolute  duration-1000 left-12
                    ${open ?
                        'top-2'
                        :
                        '-top-40'
                    }
                    `}>
                        {
                            links
                        }
                    </ul>
                }
                
                <h3 className='md:flex hidden'>My Navbar</h3>
            </span>
            <ul className='md:flex items-center gap-5 hidden'>
                {
                    links
                }
            </ul>
            <button>Sign in</button>
        </nav>
    );
};

export default NavBar;