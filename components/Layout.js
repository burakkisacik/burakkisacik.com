import Nav from './Nav';
import Head from 'next/head';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Hello from './Hello';

function Layout({ title, keywords, description, children }) {
    const router = useRouter();

    return (
        <div className=''>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <div className='h-screen flex flex-col'>
                <Nav />

                {/*<div className='flex-grow border-2 border-red-500'>
                    {children}
                </div>*/}

                {router.pathname === '/' && <Hello />}
            </div>

            <div>{children}</div>

            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: 'Burak Kısacık',
    description: 'Personal blog of Burak Kısacık',
    keywords:
        'frontend, engineering, software, education, react, javascript, blog, threejs',
};

export default Layout;
