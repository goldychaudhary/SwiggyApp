import React, { lazy, Suspense } from "react" //coming from nodemodules we have package react
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Choose a theme
import 'primereact/resources/primereact.min.css';                // Core styles
import 'primeicons/primeicons.css';                              // Icons
import 'primeflex/primeflex.css';     
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContext from "./components/utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./components/utils/appStore"
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery.jsx"

//React.createElement return object when we render this on to the dom then it becomes a HTML Element
//JSX => React.CreateElement => returns JS Object => HTMLElement(render) --->Babel is converting elemnets into regular js

const App = () => {
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:"Goldy"}}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const Grocery = lazy(()=> import ("./components/Grocery"))
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
        
            },
            {
                path:"/contact-us",
                element:<ContactUs/>
            },
            {
                path: "/grocery",
                element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                  </Suspense>
                ),
              },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    // {
    //     path:"/about",
    //     element:<About/>

    // },
    // {
    //     path:"/contact-us",
    //     element:<ContactUs/>
    // }
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)