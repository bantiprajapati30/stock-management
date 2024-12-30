"use client";
import Link from 'next/link';
import { getDataFromToken } from "@/helper/dataFromToken";
import axios from "axios";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
const Navbar = () => {
    const router = useRouter();
    const userData = router.state;
    const handleLogout = async () => {
        const response = await axios.get("/api/users/logout");
        if (response.data.success) {
            router.push("/login");
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    }
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        <Link href="/"
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${router.pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                }`}>
                            Dashboard
                        </Link>
                        <Link href="/category"
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${router.pathname === '/category' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                }`}>
                            Category
                        </Link>
                        <Link href="/stock"
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${router.pathname === '/stock' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                }`}>
                            Stock
                        </Link>
                        <Link href="/user"
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${router.pathname === '/user' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                }`}>
                            User
                        </Link>
                        <Link href="/timeline"
                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${router.pathname === '/timeline' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                                }`}>
                            Timeline
                        </Link>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
