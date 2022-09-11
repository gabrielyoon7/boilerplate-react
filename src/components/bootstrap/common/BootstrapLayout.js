import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}