import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../utils/appStore"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import  "@testing-library/jest-dom"

it("Sholud change login buttin on click of button",()=>{
    //Rendering Header component to test login button
    //Using  <BrowserRouter> Because in header component we are using Link to navigate jsDom read directly js,jsx but not redux and react-router-dom
    //<Provider store={appStore}> same purpose
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:'Login'})
    fireEvent.click(loginButton)

    const logoutbutton = screen.getByRole('button',{name:'Logout'})

    expect(logoutbutton).toBeInTheDocument()
})