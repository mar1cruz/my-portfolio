import React from 'react';
import Header from "./layout/header/Header";
import Developer from "./layout/sections/developer/Developer";
import {About} from "./layout/sections/about/About";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";


export default function App() {
    return (
        <>
            <Header/>
            <Developer/>
            <About/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </>
    )
}








