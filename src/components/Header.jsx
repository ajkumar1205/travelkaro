

export const Header = () => {
    return (
        <header className="p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center items-center">
                <img src={logo} alt="TheTravelKaro" className="w-16 h-16" />
                <h1 className="text-2xl font-bold text-red-500">TheTravelKaro</h1>
            </div>
            <nav className="w-full md:w-2/3 hidden md:flex uppercase justify-center items-center gap-2 lg:gap-6 text-xs lg:text-sm font-bold flex-wrap">
                {['home', 'about us', 'top destinations', 'contact us'].map((item) => (
                    <a key={item} href="#" className="hover:border-b-2 hover:border-yellow-500 hover:pb-2">{item}</a>
                ))}
            </nav>
        </header>
    );
}