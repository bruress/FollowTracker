import Text from "./Text";
import { Drop } from "../constant/Svg";
import {LineChartComponent, LineChartWidget }from "./LineChart";
import { useState } from "react";
import { titles } from "../constant/recharts";
import { motion } from 'motion/react';
import * as type from "../motion/animation";

const Graph = () => {
    const [selected, setSelected] = useState("engagement_drop");
    const actived = titles[selected];
    return (
        <motion.section 
            variants={type.animContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.4}}
            className="bg-[linear-gradient(0deg,rgba(38,26,75,1)_30%,rgba(12,12,60,1)_70%)] mt-[250px] py-[100px]">
            <div className="mx-[20px] sm:mx-[150px] 2xl:mx-[300px]">
                <motion.div 
                    variants={type.popUp}
                    className="flex justify-center">
                    <Text
                        text="Попробуйте сами"
                        type="title_wh"
                        classes="mb-[50px]"
                    />
                </motion.div>
                <motion.div 
                    variants={type.mainBlur}
                    className="flex flex-col justify-between gap-[50px]">
                    <div className="bg-[#FEFEFF] p-[20px] border-[#040C22] border-[1px] rounded-[35px] w-full">
                        <LineChartComponent
                            dataKeyValue={selected}
                        />
                    </div>
                    <div className="gap-[30px] grid md:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(titles).map(([key, value]) => (
                            <div className="text-center">
                                <div
                                    key={key}
                                    onClick={() => setSelected(key)}
                                    className="bg-[#FEFEFF] hover:bg-[#ebebf9] p-[30px] border-[#040C22] border-[1px] rounded-[35px] duration-500"
                                >
                                    <LineChartWidget
                                        dataKeyValue={key}
                                    />
                                </div>
                                <Text
                                    text={value.label}
                                    type="paragraph_wh"
                                    classes="pt-[5px] cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div> 
        </motion.section>
    );
};

export default Graph;