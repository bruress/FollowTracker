import Text from "./Text";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as type from "../motion/animation";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


const Cost = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: ""
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/requests`, form);
        } catch {
            setError("Request failed");
        }
    };

    console.log(API_URL); 

    return (
        <>
            {/* container */}
            <motion.section 
                className="flex flex-col items-center mx-[20px] sm:mx-[150px] 2xl:mx-[300px] mt-[250px] mb-[250px]"
                variants={type.animContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount:0.5}}
                >
                <form onSubmit={handleSubmit}>
                    {/* text */}
                    <motion.div
                        variants={type.popUp}
                    >
                        {/* title */}
                        <Text
                            text="Индивидуальная стоимость"
                            type="title_dr"
                            classes="text-center pb-[10px]"
                        />
                        {/* subtitle */}
                        <Text
                            text="Итоговая цена рассчитывается индивидуально в зависимости от задач, объёма данных и необходимых возможностей."
                            type="subtitle_gr"
                            classes="2xl:px-[200px] pb-[50px]"
                        />
                    </motion.div>
                    {/* containter inputs */}
                    <motion.div
                        variants={type.popUp}
                        className="lg:px-[50px] 2xl:px-[300px] xl:px-[200px] w-full">
                        {/* input name */}
                        <div
                            className="py-[20px]">
                            <Text
                                text="ФИО*"
                                type="paragraph_dr"
                                classes="pb-[8px]"
                            />
                            <input
                                type="text"
                                placeholder="Иванов Иван Иванович"
                                className="pl-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[70px] font-inter text-[12px] sm:text-[14px] lg:text-[20px]"
                                value={form.name}
                                onChange={(e) => setForm({...form, name: e.target.value})}
                            />
                        </div>
                        {/* input email */}
                        <div className="py-[20px]">
                            <Text
                                text="E-mail*"
                                type="paragraph_dr"
                                classes="pb-[8px]"
                            />
                            <input
                                type="email"
                                placeholder="name@mail.ru"
                                className="pl-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[70px] font-inter text-[12px] sm:text-[14px] lg:text-[20px]"
                                value={form.email}
                                onChange={(e) => setForm({...form, email: e.target.value})}
                            />
                        </div>
                        {/* input messsage */}
                        <div className="py-[20px]">
                            <Text
                                text="Ваше сообщение*"
                                type="paragraph_dr"
                                classes="pb-[8px]"
                            />
                            <textarea
                                placeholder="Напишите что-нибудь"
                                className="pt-[25px] px-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[160px] font-inter text-[12px] sm:text-[14px] lg:text-[20px] resize-none"
                                value={form.comment}
                                onChange={(e) => setForm({...form, comment: e.target.value})}
                            />
                        </div>
                        {/* button */}
                        <button className="bg-[#17145E] hover:bg-[#110d99] mt-[20px] rounded-[25px] w-full h-[90px] font-raleway font-bold text-[20px] text-white sm:text-[32px] duration-300 hover:cursor-pointer">
                            Отправить
                        </button>
                    </motion.div>
                </form>
            </motion.section>
        </>
    );
};

export default Cost;