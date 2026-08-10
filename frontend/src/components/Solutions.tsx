import { problems, solutions } from "../constant/data";
import { useI18n } from "../i18n/I18nContext";

const Solutions = () => {
  const { t } = useI18n();

  return (
    <section className="mx-[20px] sm:mt-[250px] sm:px-[30px] 2xl:mx-[300px]">
      <div className="grid gap-[18px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-[28px]">
        <article className="rounded-[34px] border border-[#D7DCEF] bg-[#F7F8FF] px-[22px] py-[26px] sm:rounded-[42px] sm:px-[34px] sm:py-[38px] xl:px-[44px] xl:py-[46px]">
          <p className="font-inter text-[12px] font-bold tracking-[0.2em] text-[#17145E] uppercase">
            {t("solutionsProblemLabel")}
          </p>
          <h2 className="font-raleway mt-[14px] max-w-[680px] text-[28px] leading-[1.08] font-bold tracking-[-0.02em] text-[#040C22] sm:text-[38px] xl:text-[48px]">
            {t("solutionsProblemTitle")}
          </h2>
          <p className="font-inter mt-[18px] max-w-[640px] text-[15px] leading-[1.75] text-[#58627F] sm:text-[17px]">
            {t("solutionsProblemDescription")}
          </p>

          <div className="mt-[26px] grid gap-[12px]">
            {problems.map((point) => (
              <div
                key={point.id}
                className="flex items-center gap-[12px] rounded-[20px] border border-[#DFE3F3] bg-white px-[16px] py-[14px]"
              >
                <p className="font-inter text-[14px] leading-[1.65] text-[#48536F] sm:text-[15px]">
                  {t(point.key)}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="overflow-hidden rounded-[34px] bg-[#17145E] px-[22px] py-[26px] text-white shadow-[0_24px_70px_rgba(23,20,94,0.22)] sm:rounded-[42px] sm:px-[34px] sm:py-[38px] xl:px-[44px] xl:py-[46px]">
          <p className="font-inter text-[12px] font-bold tracking-[0.2em] text-white/70 uppercase">
            {t("solutionsSolutionLabel")}
          </p>
          <h2 className="font-raleway mt-[14px] max-w-[720px] text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[38px] xl:text-[48px]">
            {t("solutionsSolutionTitle")}
          </h2>
          <p className="font-inter mt-[18px] max-w-[660px] text-[15px] leading-[1.75] text-white/78 sm:text-[17px]">
            {t("solutionsSolutionDescription")}
          </p>

          <div className="mt-[28px] grid gap-[12px]">
            {solutions.map((point) => (
              <div
                key={point.id}
                className="grid gap-[12px] rounded-[24px] border border-white/14 bg-white/[0.07] px-[16px] py-[16px] sm:grid-cols-[52px_1fr] sm:px-[18px] sm:py-[18px]"
              >
                <span className="font-raleway flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[15px] font-bold text-[#17145E]">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-raleway text-[18px] leading-[1.2] font-bold text-white">
                    {t(point.titleKey)}
                  </h3>
                  <p className="font-inter mt-[6px] text-[14px] leading-[1.65] text-white/72 sm:text-[15px]">
                    {t(point.textKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Solutions;
