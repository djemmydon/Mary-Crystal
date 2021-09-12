import Head from 'next/head'
import Navbar from '../Component/Navbar'
import Header from '../Component/Men.js/head.js'


export default function Men() {



    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>

            </Head>

            <main >

                <Navbar />
                <Header />
            </main>


        </div>
    )
}
