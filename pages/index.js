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
        </>
    )
}