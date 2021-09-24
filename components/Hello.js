function Hello() {
    return (
        <div className='flex-grow max-w-4xl mx-auto px-4'>
            <p className='text-center leading-relaxed mt-12 font-extrabold text-3xl sm:text-5xl sm:leading-relaxed sm:mt-8'>
                Hello, <span className='text-niceRed'>I'm Burak.</span> I’m
                Electrical Electronics Engineer and Front-End Developer, living
                in Ankara.
            </p>

            <p className='text-center leading-relaxed mt-12 text-xl sm:text-2xl sm:leading-relaxed'>
                Here, you can find tech related articles, electronic projects,
                personal writings and some geek stuff
            </p>

            <div className='flex items-center justify-center mt-12'>
                <button className='bg-buttonColor w-40 text-white font-bold p-4 rounded-full border-2 border-buttonBorder hover:scale-110 hover:shadow-xl transition duration-150'>
                    Contact Me
                </button>
            </div>
        </div>
    );
}

export default Hello;
