"use client";
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
    const pathname = usePathname()
    const noNavbarRoutes = ['/login', '/signup'];

    const showNavbar = !noNavbarRoutes.includes(pathname);

    return (
        <div>
            {showNavbar && <Navbar />}
            <main className={`${showNavbar ? 'pt-16' : ''}`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
