import Text from "./Text";
import Header from "./Header";
import back1 from "../assets/back-1.png";
import graphics from "../assets/graphics.png";
import { hero_points } from "../constant/data";
import { motion } from "motion/react";
import * as type from "../motion/animation";
import { useI18n } from "../i18n/I18nContext";

const Hero = () => {
  const { t } = useI18n();
  return (
    <motion.section
      id="hero"
      className="relative min-h-[860px] overflow-hidden bg-[url(back-1.png)] bg-cover bg-bottom pt-[18px] pb-[110px] xl:min-h-screen"
      variants={type.animContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${back1})` }}
    >
      <div className="relative z-10">
        <Header />
        <motion.div
          variants={type.mainBlur}
          className="mt-[54px] grid items-start gap-[28px] sm:mt-[72px] sm:px-[30px] xl:grid-cols-[1.08fr_0.92fr] 2xl:px-[300px]"
        >
          <div className="mx-auto max-w-[960px] rounded-[36px] px-[22px] py-[24px] sm:px-[30px] sm:py-[32px]">
            <Text
              text={t("heroTitle")}
              type="title_wh"
              classes="leading-[1.10] text-center xl:text-start max-w-[960px] [text-shadow:0_10px_28px_rgba(0,0,0,0.28)]"
            />
            <Text
              text={t("heroSubtitle")}
              type="subtitle_wh"
              classes="2xl:max-w-[550px] pt-[18px] text-center xl:text-start text-[16px] leading-[1.65] sm:text-[20px] text-white/92 [text-shadow:0_6px_22px_rgba(0,0,0,0.24)]"
            />

            <div className="mt-[30px] flex flex-col gap-[14px] sm:flex-row sm:justify-center xl:justify-start">
              <a
                href="#lead"
                className="font-raleway inline-flex items-center justify-center rounded-[22px] bg-white px-[28px] py-[18px] text-[18px] font-bold text-[#17145E] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#f2f3ff]"
              >
                {t("heroBtnDemo")}
              </a>
              <a
                href="#product"
                className="font-raleway inline-flex items-center justify-center rounded-[22px] border border-[rgba(255,255,255,0.34)] bg-[rgba(255,255,255,0.08)] px-[28px] py-[18px] text-center text-[18px] font-bold text-white backdrop-blur transition duration-300 hover:bg-[rgba(255,255,255,0.16)] sm:text-left"
              >
                {t("heroBtnInterface")}
              </a>
            </div>

            <div className="mt-[26px] grid gap-[10px]">
              {hero_points.map((point) => (
                <div
                  key={point.id}
                  className="flex items-center gap-[12px] rounded-[20px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[14px] backdrop-blur-[8px]"
                >
                  <span className="lg:h-[8px] lg:w-[8px] lg:rounded-full lg:bg-[#bdb8ff]" />
                  <p className="font-inter text-[14px] leading-[1.6] text-white sm:text-[16px]">
                    {t(point.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[960px] xl:block xl:translate-y-[42px]">
            <img
              src={graphics}
              alt={t("heroImageAlt")}
              className="h-[560px] w-full object-contain drop-shadow-[0_24px_80px_rgba(8,9,35,0.28)]"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
