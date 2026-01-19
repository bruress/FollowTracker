import Text from "./Text";
import Logo from "./Logo";
import { Fund } from "../constant/Svg";
import { Platform } from "../constant/Svg";
import { inf_items } from "../constant/data";

const Footer = () => {
    return (
        <footer className="bg-[#17145E] w-full h-[500px] mt-[250px]">
            {/* container */}
            <div className="py-[50px] mx-[300px] flex flex-col items-center gap-[60px]">
                {/* two columns */}
                <div className="grid grid-cols-2">
                    {/* first column */}
                    <div className="flex flex-col gap-[20px]">
                        <Logo/>
                        {/* information */}
                        {inf_items.map((item) => (
                            <Text
                                key={item.id}
                                text={item.text}
                                type="paragraph"
                                classes="text-[#ffffff]"
                            />
                        ))}
                    </div>
                    {/* second columns */}
                    <div className="flex flex-col items-end gap-[35px]">
                        <Fund/>
                        <Platform/>
                    </div>
                </div>
                <Text
                    text="Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии»"
                    type="paragraph"
                    classes="text-[#ffffff] w-[850px] text-center"
                />
            </div>
        </footer>
    );
};

export default Footer;