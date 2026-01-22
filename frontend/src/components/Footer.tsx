import Text from "./Text";
import Logo from "./Logo";
import { Fund } from "../constant/Svg";
import { Platform } from "../constant/Svg";
import { inf_items } from "../constant/data";
import { motion } from "motion/react";
import * as type from '../motion/animation'

const Footer = () => {
    return (
        <footer className="bg-[#17145E]">
            {/* container */}
            <motion.div 
                variants={type.animContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount: 0.5}}
                className="flex flex-col items-center md:items-stretch gap-[70px] mx-[20px] sm:mx-[150px] 2xl:mx-[300px] py-[50px]">
                {/* columns */}
                <motion.div
                    variants={type.popUp}
                    className="gap-[40px] md:gap-0 grid md:grid-cols-2">
                    {/* first column */}
                    <div className="flex flex-col gap-[25px]">
                        <Logo/>
                        {/* information */}
                        {inf_items.map((item) => (
                            <Text
                                key={item.id}
                                text={item.text}
                                type="paragraph_wh"
                            />
                        ))}
                    </div>
                    {/* second columns */}
                    <div className="flex md:flex-col justify-between items-center md:items-end gap-[35px]">
                        <Fund className="w-[120px] sm:w-auto"/>
                        <Platform className="w-[120px] sm:w-auto"/>
                    </div>
                </motion.div>
                {/* footer text */}
                <motion.div
                    variants={type.popUp}>
                    <Text
                        text="Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии»"
                        type="paragraph_wh"
                        classes="2xl:px-[100px] text-center"
                    />
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;