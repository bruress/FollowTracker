import Logo from "./Logo";

const Header = () => {
    return (
        <header className="absolute z-10 w-full bg-transparent">
            <div className="flex h-[150px] items-center mx-[300px]">
                <Logo className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]"/>
            </div>
        </header>

    );
};

export default Header;