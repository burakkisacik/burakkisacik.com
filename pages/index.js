import Head from 'next/head';
import Nav from '../components/Nav';
import Hello from '../components/Hello';

export default function Home() {
    const title = 'Burak Kısacık';
    const description = 'Personal blog of Burak Kısacık';
    const keywords =
        'frontend, engineering, software, education, react, javascript, blog, threejs';

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <div className='h-screen flex flex-col'>
                {/* Navbar */}
                <Nav />

                {/* Banner */}
                <Hello />
            </div>

            <div className='h-96 bg-lightYellow'>
                <h1>Burak</h1>
            </div>
        </div>
    );
}
