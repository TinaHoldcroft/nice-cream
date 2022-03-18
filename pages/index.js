import Head from 'next/head'
import React from "react";
import Flavour from './choice/flavour';
import Topping from './choice/topping';

export default function Home() {

    return (
        <>
            <Head>
                <title>Nice Cream</title>
            </Head>

            <h1>Nice Cream</h1>

            <Flavour />

            <Topping />
            
            <div className="index-container">
                <div className="wrapper">
                    <div className="btn active">
                        <div>
                            <i className="fas fa-ice-cream"/>
                        </div>
                    </div>
                    <div className="btn">
                        <div>
                            <i className="fas fa-shopping-cart"/>
                        </div>
                    </div>
                    <div className="btn">
                        <div>
                            <i className="fa-solid fa-user-secret"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}