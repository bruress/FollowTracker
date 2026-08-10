import { useRef, useState } from "react";
import { product_panels } from "../constant/data";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import { motion } from "motion/react";
import * as type from "../motion/animation";
import { useI18n } from "../i18n/I18nContext";

const imageMap = {
  screen1,
  screen2,
};

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className={`h-[18px] w-[18px] ${direction === "right" ? "rotate-180" : ""}`}
    fill="none"
  >
    <path
      d="M11.75 4.5L6.25 10L11.75 15.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const target = slider.children[index] as HTMLElement | undefined;
    target?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIndex =
      activeIndex === 0 ? product_panels.length - 1 : activeIndex - 1;
    scrollToSlide(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      activeIndex === product_panels.length - 1 ? 0 : activeIndex + 1;
    scrollToSlide(nextIndex);
  };

  const { t } = useI18n();

  return (
    <section
      id="product"
      className="mt-[150px] overflow-x-clip sm:mx-[20px] sm:mt-[250px] md:mx-[40px] 2xl:mx-[300px]"
    >
      <motion.div
        variants={type.animContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-[22px] sm:gap-[32px] md:gap-[40px] lg:gap-[56px]"
      >
        <motion.div
          variants={type.popUp}
          className="mx-auto w-full text-center"
        >
          <h2 className="font-raleway mx-auto max-w-[420px] px-[6px] text-center text-[24px] leading-[1.02] font-bold tracking-[-0.03em] text-[#040C22] sm:max-w-[520px] sm:text-[34px] md:max-w-[720px] md:text-[44px] lg:max-w-[860px] lg:text-[58px] xl:max-w-[980px] xl:text-[64px]">
            {t("productTitle")}
          </h2>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t("prevSlide")}
            className="absolute top-1/2 left-4 z-20 hidden h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(212,218,248,0.95)] bg-white text-[#17145E] transition hover:-translate-y-1/2 hover:scale-[1.03] md:flex"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label={t("nextSlide")}
            className="absolute top-1/2 right-4 z-20 hidden h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(212,218,248,0.95)] bg-white text-[#17145E] transition hover:-translate-y-1/2 hover:scale-[1.03] md:flex"
          >
            <ArrowIcon direction="right" />
          </button>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth pb-[4px] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:gap-[20px] md:pb-[10px] [&::-webkit-scrollbar]:hidden"
          >
            {product_panels.map((panel) => (
              <motion.article
                key={panel.id}
                variants={type.mainBlur}
                className="min-w-full snap-start md:pr-0"
              >
                <div className="grid gap-[12px]">
                  <div className="overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px]">
                    <img
                      src={imageMap[panel.image as keyof typeof imageMap]}
                      alt={`${t("screenshotAlt")} ${panel.id}`}
                      className="block w-full object-contain"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
