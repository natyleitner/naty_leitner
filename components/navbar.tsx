import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Logo, { LogoColor } from './logo';

type Page = {
  name: string;
  path: string;
  title: string;
};
const pages: Page[] = [
  { name: 'Home', path: '/', title: 'Home' },
  { name: 'About', path: '/about', title: 'About me' },
  { name: 'Projects', path: '/projects', title: 'Projects' },
  { name: 'Contact', path: '/contact', title: 'Contact me' },
];

const selectActivePage = (path: string) =>
  pages.find((page: Page) => page.path === path) ?? pages[0];

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageActive, setPageActive] = useState(selectActivePage(router.asPath));

  useEffect(() => {
    setPageActive(selectActivePage(router.asPath));
  }, [router.asPath]);

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a
              aria-label="Naty Leitner"
              title="Naty Leitner"
              className="inline-flex items-center text-white"
            >
              <Logo logoColor={LogoColor.white} />
            </a>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {pages.map((page, i) => (
              <li key={page.path}>
                <Link href={page.path}>
                  <a
                    aria-label={page.title}
                    title={page.title}
                    className={clsx(
                      'font-medium tracking-wide text-gray-100 p-2 transition-colors duration-200 hover:text-gray-300',
                      pageActive === pages[i] && 'bg-gray-700'
                    )}
                    aria-current={pageActive === page ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-400" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/">
                        <a
                          aria-label="Naty Leitner"
                          title="Naty Leitner"
                          className="inline-flex items-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Logo logoColor={LogoColor.black} />
                        </a>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {pages.map((page, i) => (
                        <li key={page.path}>
                          <Link href={page.path}>
                            <a
                              aria-label={page.title}
                              title={page.title}
                              className={clsx(
                                'block font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400',
                                pageActive === pages[i] && 'text-gray-400',
                                pageActive !== pages[i] && 'text-gray-700'
                              )}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {page.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
