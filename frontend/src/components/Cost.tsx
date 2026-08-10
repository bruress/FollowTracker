import Text from "./Text";
import { motion } from "motion/react";
import { useState } from "react";
import * as type from "../motion/animation";
import * as Yup from "yup";
import axios from "axios";
import { useI18n } from "../i18n/I18nContext";

const API_URL = import.meta.env.VITE_API_URL || "/api";

interface FormState {
  name: string;
  email: string;
  comment: string;
}

const Cost = () => {
  const { t } = useI18n();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t("formNameError"))
      .matches(
        /^[A-Za-zА-ЯЁа-яё]+\s[A-Za-zА-ЯЁа-яё]+\s[A-Za-zА-ЯЁа-яё]+$/,
        t("formNameError"),
      ),
    email: Yup.string()
      .required(t("formEmailRequired"))
      .email(t("formEmailInvalid"))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("formEmailInvalid"),
      ),
    comment: Yup.string().required(t("formCommentRequired")),
  });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    comment: "",
  });
  const [errors, setError] = useState<Partial<FormState>>({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(form, { abortEarly: false });
      await axios.post(`${API_URL}/submit`, form);
      setMessage(t("formSuccess"));
      setForm({
        name: "",
        email: "",
        comment: "",
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
      <motion.section
        id="lead"
        className="mx-[20px] mt-[150px] flex flex-col items-center sm:mt-[250px] sm:px-[30px] 2xl:mx-[300px]"
        variants={type.animContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
      >
        <form onSubmit={handleSubmit}>
          <motion.div variants={type.popUp}>
            <Text text={t("formTitle")} type="title_dr" classes="text-center" />

            <Text
              text={t("formSubtitle")}
              type="subtitle_gr"
              classes="pb-[30px] pt-[10px]"
            />
          </motion.div>

          <motion.div variants={type.popUp} className="">
            <div className="py-[20px]">
              <Text
                text={t("formNameLabel")}
                type="paragraph_dr"
                classes="pb-[8px]"
              />
              <input
                name="name"
                type="text"
                placeholder={t("formNamePlaceholder")}
                className="font-inter h-[70px] w-full rounded-[25px] border-[1px] border-[#58627F] pl-[30px] text-[12px] outline-none focus:border-2 focus:border-[#040C22] sm:text-[14px] lg:text-[20px]"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <Text text={errors.name} type="error" />}
            </div>

            <div className="py-[20px]">
              <Text
                text={t("formEmailLabel")}
                type="paragraph_dr"
                classes="pb-[8px]"
              />
              <input
                name="email"
                type="text"
                placeholder={t("formEmailPlaceholder")}
                className="font-inter h-[70px] w-full rounded-[25px] border-[1px] border-[#58627F] pl-[30px] text-[12px] outline-none focus:border-2 focus:border-[#040C22] sm:text-[14px] lg:text-[20px]"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <Text text={errors.email} type="error" />}
            </div>

            <div className="py-[20px]">
              <Text
                text={t("formCommentLabel")}
                type="paragraph_dr"
                classes="pb-[8px]"
              />
              <textarea
                name="comment"
                placeholder={t("formCommentPlaceholder")}
                className="font-inter h-[160px] w-full resize-none rounded-[25px] border-[1px] border-[#58627F] px-[30px] pt-[25px] text-[12px] outline-none focus:border-2 focus:border-[#040C22] sm:text-[14px] lg:text-[20px]"
                value={form.comment}
                onChange={handleChange}
              />
              {errors.comment && <Text text={errors.comment} type="error" />}
            </div>

            <button className="font-raleway mt-[20px] h-[90px] w-full rounded-[25px] bg-[#17145E] text-[20px] font-bold text-white duration-300 hover:cursor-pointer hover:bg-[#110d99] sm:text-[32px]">
              {t("formSubmit")}
            </button>
            {message && (
              <Text
                text={message}
                type="paragraph_dr"
                classes="text-center pt-[5px]"
              />
            )}
          </motion.div>
        </form>
      </motion.section>
    </>
  );
};

export default Cost;
