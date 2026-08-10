import Logo from "./Logo";
import { HamburgerSvg } from "../constant/Svg";
import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-[20px] pt-[30px] sm:px-[30px] sm:pt-[50px] 2xl:px-[300px]">
      <div className="flex items-center justify-between gap-[20px]">
        <Logo />

        <nav className="hidden items-center gap-[26px] md:flex">
          <a
            href="#product"
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navProduct")}
          </a>
          <a
            href="#capabilities"
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navCapabilities")}
          </a>
          <a
            href="#simulation"
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navSimulation")}
          </a>
          <a
            href="#lead"
            className="font-raleway rounded-full border border-white/20 bg-white/10 px-[16px] py-[10px] text-[14px] font-bold text-white backdrop-blur transition hover:bg-white/16"
          >
            {t("navRequestDemo")}
          </a>

          <div className="flex gap-[8px]">
            <button
              onClick={() => setLang("ru")}
              className={
                lang === "ru"
                  ? "font-bold text-white hover:cursor-pointer"
                  : "text-white/60 hover:cursor-pointer"
              }
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={
                lang === "en"
                  ? "font-bold text-white hover:cursor-pointer"
                  : "text-white/60 hover:cursor-pointer"
              }
            >
              EN
            </button>
          </div>
        </nav>

        <button onClick={toggleMenu} className="md:hidden">
          <HamburgerSvg className="size-[30px] text-white sm:size-[50px]" />
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-[68px] right-0 z-3 flex min-w-[168px] flex-col items-center gap-[20px] rounded-[20px] border border-white/45 bg-[#131a52]/88 py-[20px] backdrop-blur-md sm:top-[98px] sm:mr-[10px] sm:min-w-[178px] md:hidden">
          <a
            href="#product"
            onClick={closeMenu}
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navProduct")}
          </a>
          <a
            href="#capabilities"
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navCapabilities")}
          </a>
          <a
            href="#simulation"
            className="font-inter text-[14px] font-bold text-white/86 transition hover:text-white"
          >
            {t("navSimulation")}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
