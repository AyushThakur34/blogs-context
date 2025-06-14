import { Outlet } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const Header = ()=> {
    return (
        <div className="mb-2">
            <header className="text-center uppercase font-bold text-3xl shadow-lg p-1">
                Blogs
            </header>
        </div>
    )
}

export default Header;