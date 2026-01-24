import Text from "./Text";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as type from "../motion/animation";
import * as Yup from "yup";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


const Cost = () => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Укажите фамилию, имя и отчество через пробел")
        .matches(/^[A-Za-zА-ЯЁа-яё]+\s[A-Za-zА-ЯЁа-яё]+\s[A-Za-zА-ЯЁа-яё]+$/, "Укажите фамилию, имя и отчество через пробел"),
        email: Yup.string()
            .required("Укажите адрес электронной почты")
            .email("Проверьте адрес электронной почты")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Проверьте адрес электронной почты"),
        comment: Yup.string().required("Укажите комментарий"),
    });

    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: ""
    });
    const [errors, setError] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(form, {abortEarly: false});
            const res = await axios.post(`${API_URL}/requests`, form);
            setMessage("Ваш запрос был успешно отправлен");
            setForm({
                name: "",
                email: "",
                comment: ""
            });
            setError({});
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setError(newErrors);
            setMessage("");
        }
    };

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
                                name="name"
                                type="text"
                                placeholder="Иванов Иван Иванович"
                                className="pl-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[70px] font-inter text-[12px] sm:text-[14px] lg:text-[20px]"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && 
                            <Text 
                                text={errors.name}
                                type="error"
                            />}
                        </div>
                        {/* input email */}
                        <div className="py-[20px]">
                            <Text
                                text="E-mail*"
                                type="paragraph_dr"
                                classes="pb-[8px]"
                            />
                            <input
                                name="email"
                                type="text"
                                placeholder="name@mail.ru"
                                className="pl-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[70px] font-inter text-[12px] sm:text-[14px] lg:text-[20px]"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && 
                            <Text 
                                text={errors.email}
                                type="error"
                            />}
                        </div>
                        {/* input messsage */}
                        <div className="py-[20px]">
                            <Text
                                text="Ваше сообщение*"
                                type="paragraph_dr"
                                classes="pb-[8px]"
                            />
                            <textarea
                                name="comment"
                                placeholder="Напишите что-нибудь"
                                className="pt-[25px] px-[30px] border-[#58627F] border-[1px] focus:border-[#040C22] focus:border-2 rounded-[25px] outline-none w-full h-[160px] font-inter text-[12px] sm:text-[14px] lg:text-[20px] resize-none"
                                value={form.comment}
                                onChange={handleChange}
                            />
                            {errors.comment && 
                            <Text 
                                text={errors.comment}
                                type="error"
                            />}
                        </div>
                        {/* button */}
                        <button className="bg-[#17145E] hover:bg-[#110d99] mt-[20px] rounded-[25px] w-full h-[90px] font-raleway font-bold text-[20px] text-white sm:text-[32px] duration-300 hover:cursor-pointer">
                            Отправить
                        </button>
                            {message && 
                            <Text 
                                text={message}
                                type="paragraph_dr"
                                classes="text-center pt-[5px]"
                            />}
                    </motion.div>
                </form>
            </motion.section>
        </>
    );
};

export default Cost;