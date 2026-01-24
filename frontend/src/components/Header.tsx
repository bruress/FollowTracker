import Logo from "./Logo";

const Header = () => {
    return (
        <header className="pt-[30px] sm:pt-[50px] px-[20px] sm:px-[150px] 2xl:px-[300px]">
            <div className="flex justify-center md:block">
                <Logo/>
            </div>
        </header>

    );
};

export default Header;