import { Outlet } from "react-router-dom"

const MainHeader = ()=> {
    return (
        <div className="w-screen h-screen">
            <Outlet/>
        </div>
    )
}

export default MainHeader;