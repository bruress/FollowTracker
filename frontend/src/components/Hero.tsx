import Text from "./Text";
import Header from "./Header";
import img from "../assets/graphics.png"
import { motion } from "motion/react";
import * as type from "../motion/animation";

const Hero = () => {
    return (
        <motion.section 
            className="relative bg-[url(src/assets/back-1.png)] bg-cover bg-contain lg:bg-bottom min-h-[700px] sm:min-h-[1000px] lg:min-h-screen"
            variants={type.animContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
        >
            <Header/>
            {/* containter */}
            <motion.div 
                variants={type.mainBlur}
                className="flex xl:flex-row flex-col-reverse xl:justify-between items-center gap-[20px] mx-[20px] sm:mx-[150px] 2xl:mx-[300px] mt-[50px] sm:mt-[100px]">
                {/* image */}
                <img
                    src={img}
                    alt="hero image"
                    className="w-fit 2xl:w-full xl:max-w-xl"
                />
                {/* text */}
                <div className="2xl:max-w-[400px] xl:max-w-[320px]">
                    <Text
                        text="Умная аналитика социальных сетей"
                        type="title_wh"
                    />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;

         