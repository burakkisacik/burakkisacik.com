import Head from 'next/head';
import Nav from '../components/Nav';

function contact() {
    const title = 'Contact Me';
    const description = 'Personal blog of Burak Kısacık';
    const keywords =
        'frontend, engineering, software, education, react, javascript, blog, threejs';

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <div className='h-screen w-screen  flex flex-col'>
                <Nav />
                <div className='flex-grow w-full bg-darkYellow m-auto'>
                    <div className='max-w-7xl m-auto h-full p-4'>
                        <form
                            onSubmit={submitHandler}
                            className='flex flex-col justify-around  h-full'
                        >
                            <div className='flex flex-col mt-2'>
                                <label
                                    htmlFor='name'
                                    className='font-bold text-2xl pl-2'
                                >
                                    Name
                                </label>
                                <input
                                    type='text'
                                    className='w-2/3 sm:w-4/12 h-12 rounded-lg border-2 border-niceRed outline-none bg-mainBackgroundColor pl-2'
                                />
                            </div>

                            <div className='flex flex-col mt-2'>
                                <label
                                    htmlFor='email'
                                    className='font-bold text-2xl pl-2'
                                >
                                    Email
                                </label>
                                <input
                                    type='text'
                                    className='w-2/3 sm:w-4/12 h-12 rounded-lg border-2 border-niceRed outline-none bg-mainBackgroundColor pl-2'
                                />
                            </div>

                            <div className='flex flex-col mt-2'>
                                <label
                                    htmlFor='message'
                                    className='font-bold text-2xl pl-2'
                                >
                                    Message
                                </label>
                                <textarea
                                    name='message'
                                    rows='10'
                                    cols='30'
                                    className='border-2 border-niceRed rounded-xl bg-mainBackgroundColor outline-none p-2'
                                ></textarea>
                            </div>

                            <div className='mt-2'>
                                <button className='bg-buttonColor w-40 text-white font-bold p-4 rounded-full border-2 border-buttonBorder hover:scale-110 hover:shadow-xl transition duration-150'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;
