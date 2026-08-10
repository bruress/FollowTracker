import Text from "./Text";
import { opp_items } from "../constant/data";
import { motion } from "motion/react";
import * as type from "../motion/animation";
import { useI18n } from "../i18n/I18nContext";

const Opportunities = () => {
  const { t } = useI18n();

  return (
    <>
      <section
        id="capabilities"
        className="mx-[20px] mt-[150px] sm:mt-[250px] sm:px-[30px] 2xl:mx-[300px]"
      >
        <motion.div
          variants={type.animContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div variants={type.popUp}>
            <Text
              text={t("oppSectionTitle")}
              type="title_dr"
              classes="text-center mb-[30px]"
            />
          </motion.div>

          <motion.div
            variants={type.popUp}
            className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3"
          >
            {opp_items.map((item) => (
              <div
                className="rounded-[50px] p-[50px] px-[25px] text-[#040C22] shadow-lg/8 shadow-[#872CAB] duration-500 hover:shadow-xl/15"
                key={item.id}
              >
                <span className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#17145E]">
                  <item.icon className="block" />
                </span>

                <div className="pt-[30px]">
                  <Text text={t(item.titleKey)} type="subtitle_cd" />
                  <Text text={t(item.subtitleKey)} type="paragraph_cd" />
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
