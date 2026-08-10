import { LogoSvg } from "../constant/Svg";
import Text from "./Text";
import { useI18n } from "../i18n/I18nContext";

const Logo = () => {
  const { t } = useI18n();
  return (
    <a href="#hero" className="flex items-center gap-[10px]">
      <LogoSvg />
      <span>
        <Text
          text={t("nameLogo")}
          type="subtitle_wh"
          classes="font-bold sm:text-[28px]"
        />
      </span>
    </a>
  );
};

export default Logo;
