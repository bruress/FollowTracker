import Text from "./Text";
import { opp_items } from "../constant/data";
import { motion } from 'motion/react';
import * as type from "../motion/animation";

const Opportunities = () => {
    return (
        <>
            {/* container */}
            <section className="mx-[20px] mt-[150px] sm:mx-[150px] 2xl:mx-[300px]">
                <motion.div
                    variants={type.animContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.4}}
                >
                    {/* text */}
                    <motion.div
                        variants={type.popUp}
                    >
                        <Text
                            text="Наши возможности"
                            type="title_dr"
                            classes="text-center mb-[50px]"
                        />
                    </motion.div>
                    {/* wrapper */}
                    <motion.div  
                        variants={type.popUp}
                        className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        {/* card */}
                        {opp_items.map((item) => (
                            <div 
                                className="rounded-[50px] px-[10px] py-[60px] text-[#040C22] shadow-lg/8 shadow-[#872CAB] duration-500 hover:shadow-xl/15" 
                                key={item.id}>
                                {/* icon */}
                                <span className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#17145E]">
                                    <item.icon className="block"/>
                                </span>
                                {/* text */}
                                <div className="pt-[30px]">
                                    <Text
                                        text={item.title}
                                        type="subtitle_cd"
                                    />
                                    <Text
                                        text={item.subtitle}
                                        type="paragraph_cd"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Opportunities;
