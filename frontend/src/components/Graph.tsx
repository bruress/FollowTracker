import Text from "./Text";
import { LineChartComponent, LineChartWidget } from "./LineChart";
import { useMemo, useState } from "react";
import { data_1, titles } from "../constant/recharts";
import { motion } from "motion/react";
import * as type from "../motion/animation";
import { useI18n } from "../i18n/I18nContext";

const Graph = () => {
  const { t } = useI18n();

  const viewportAmount =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.1 : 0.35;
  const [selected, setSelected] = useState("engagement_drop");
  const [postingFrequency, setPostingFrequency] = useState(4);
  const [toxicityLevel, setToxicityLevel] = useState(20);
  const [postUniqueness, setPostUniqueness] = useState(55);
  const actived = titles[selected];

  const simulationData = useMemo(() => {
    const postingFactor = postingFrequency / 2;
    const toxicityFactor = toxicityLevel / 20;
    const uniquenessFactor = postUniqueness / 55;

    const totalDays = data_1.length;

    return data_1.map((point, dayIndex) => {
      const dayNumber = dayIndex + 1;
      const timeFactor = totalDays > 0 ? dayNumber / totalDays : 1;
      const byDay = (rate: number) => 1 + (rate - 1) * timeFactor;

      const engagementBoost =
        1 +
        (postingFactor - 1) * 0.2 +
        (uniquenessFactor - 1) * 0.18 -
        (toxicityFactor - 1) * 0.16;
      const engagementDropRate =
        1 -
        (postingFactor - 1) * 0.1 -
        (uniquenessFactor - 1) * 0.14 +
        (toxicityFactor - 1) * 0.18;
      const toxicityRate = toxicityFactor * (1 - (uniquenessFactor - 1) * 0.09);
      const qualityRate =
        1 + (uniquenessFactor - 1) * 0.2 - (toxicityFactor - 1) * 0.08;

      const clampPercent = (value: number) =>
        Math.min(100, Math.max(0, Number(value.toFixed(1))));

      return {
        ...point,
        day: t(point.dayKey),
        engagement_drop: clampPercent(
          point.engagement_drop * byDay(engagementDropRate),
        ),
        toxic_content: clampPercent(point.toxic_content * byDay(toxicityRate)),
        unwanted_content: clampPercent(
          point.unwanted_content *
            byDay(
              0.9 + (toxicityFactor - 1) * 0.25 - (uniquenessFactor - 1) * 0.1,
            ),
        ),
        content_engagement: clampPercent(
          point.content_engagement * byDay(engagementBoost),
        ),
        emotional_tone: clampPercent(point.emotional_tone * byDay(qualityRate)),
        uniqueness: clampPercent(
          point.uniqueness *
            byDay(
              0.9 + (postingFactor - 1) * 0.08 + (uniquenessFactor - 1) * 0.4,
            ),
        ),
      };
    });
  }, [postingFrequency, toxicityLevel, postUniqueness, t]);

  const sliderClass = "sim-slider w-full cursor-pointer";
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percent = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(90deg, #17145e 0%, #5e59a8 ${percent}%, #cfd2de ${percent}%, #cfd2de 100%)`,
    };
  };

  return (
    <motion.section
      id="simulation"
      variants={type.animContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: viewportAmount }}
      className="mt-[150px] bg-[linear-gradient(0deg,rgba(38,26,75,1)_30%,rgba(12,12,60,1)_70%)] py-[120px] sm:mt-[250px] sm:pt-[120px] sm:pb-[250px]"
    >
      <div className="sm:px-[30px] 2xl:mx-[300px]">
        <motion.div variants={type.popUp} className="flex justify-center">
          <Text
            text={t("graphTryItYourself")}
            type="title_wh"
            classes="mb-[50px]"
          />
        </motion.div>
        <motion.div
          variants={type.mainBlur}
          className="flex flex-col justify-between gap-[10px] gap-y-[15px]"
        >
          <div className="w-full rounded-[35px] border-[1px] border-[#040C22] bg-[#FEFEFF] sm:p-[20px]">
            <LineChartComponent dataKeyValue={selected} data={simulationData} />
          </div>
          <Text
            text={t(actived.labelKey)}
            type="subtitle_wh"
            classes="text-center font-bold pb-[20px]"
          />
          <div className="mx-[5px] mb-[20px] grid gap-[18px] rounded-[35px] border-[1px] border-[#040C22] bg-[#FEFEFF] p-[30px] pb-[40px]">
            <Text
              text={t("graphSimulation")}
              type="subtitle_dr"
              classes="text-start font-bold"
            />
            <div className="grid gap-[10px]">
              <div className="flex">
                <Text
                  text={t("graphPostingFrequency")}
                  type="paragraph_dr"
                  classes="font-semibold pr-[5px]"
                />
                <Text
                  text={`${postingFrequency} ${t("graphPostsPerDay")}`}
                  type="paragraph_dr"
                />
              </div>
              <input
                type="range"
                min={1}
                max={8}
                step={1}
                value={postingFrequency}
                onChange={(e) => setPostingFrequency(Number(e.target.value))}
                className={sliderClass}
                style={getSliderStyle(postingFrequency, 1, 8)}
              />
            </div>
            <div className="grid gap-[6px]">
              <div className="flex">
                <Text
                  text={t("graphToxicityComments")}
                  type="paragraph_dr"
                  classes="font-semibold pr-[5px]"
                />
                <Text text={`${toxicityLevel}%`} type="paragraph_dr" />
              </div>
              <input
                type="range"
                min={0}
                max={60}
                step={1}
                value={toxicityLevel}
                onChange={(e) => setToxicityLevel(Number(e.target.value))}
                className={sliderClass}
                style={getSliderStyle(toxicityLevel, 0, 60)}
              />
            </div>
            <div className="grid gap-[6px]">
              <div className="flex">
                <Text
                  text={t("graphPostUniqueness")}
                  type="paragraph_dr"
                  classes="font-semibold pr-[5px]"
                />
                <Text text={`${postUniqueness}%`} type="paragraph_dr" />
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={postUniqueness}
                onChange={(e) => setPostUniqueness(Number(e.target.value))}
                className={sliderClass}
                style={getSliderStyle(postUniqueness, 0, 100)}
              />
            </div>
          </div>
          <div className="mx-[5px] grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(titles).map(([key, value]) => (
              <div className="text-center" key={key}>
                <div
                  onClick={() => setSelected(key)}
                  className={`rounded-[35px] border-[1px] border-[#040C22] p-[5px] duration-500 sm:p-[30px] ${selected === key ? "bg-[#d6d6ea]" : "bg-[#FEFEFF] hover:bg-[#ebebf9]"}`}
                >
                  <LineChartWidget dataKeyValue={key} data={simulationData} />
                </div>
                <Text
                  text={t(value.labelKey)}
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
