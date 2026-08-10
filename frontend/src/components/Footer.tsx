import Text from "./Text";
import Logo from "./Logo";
import { motion } from "motion/react";
import * as type from "../motion/animation";
import { useI18n } from "../i18n/I18nContext";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-[#17145E]">
      <motion.div
        variants={type.animContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.45 }}
        className="mx-[20px] mt-[150px] gap-[70px] pt-[50px] pb-[60px] sm:mx-[30px] sm:mt-[250px] 2xl:mx-[120px]"
      >
        <motion.div
          variants={type.mainBlur}
          className="flex flex-col items-center gap-[40px] xl:grid xl:grid-cols-5 xl:gap-0"
        >
          <Logo />

          <a
            href="#product"
            className="font-inter text-center text-[12px] text-[#ffffff] sm:text-[14px] lg:text-[20px]"
          >
            {t("navProduct")}
          </a>

          <a
            href="#capabilities"
            className="font-inter text-center text-[12px] text-[#ffffff] sm:text-[14px] lg:text-[20px]"
          >
            {t("navCapabilities")}
          </a>

          <a
            href="#simulation"
            className="font-inter text-center text-[12px] text-[#ffffff] sm:text-[14px] lg:text-[20px]"
          >
            {t("navSimulation")}
          </a>

          <Text
            text={t("footerTel")}
            type="paragraph_wh"
            classes="text-center"
          />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
