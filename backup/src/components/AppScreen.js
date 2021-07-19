import React from 'react';
import { AsideAddAnyoneElse } from './AsideAddAnyoneElse';
import { AsideDescription } from './AsideDescription';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from "./navbar/NavBar";
import { PreviousResults } from './PreviousResults';

export const AppScreen = () => {
    
    return (
        <>
            <NavBar />
            <Header />
                <div className="max-centered">

                    <AsideDescription /> 

                    <PreviousResults />

                    <AsideAddAnyoneElse />
                    
                    <hr role="separator"/>

                    <Footer />
                    
                </div>
        </>
    )
}
