import { LogoSvg } from "../constant/Svg";
import Text from "./Text";

const Logo = () => {
    return (
        <div className="flex items-center gap-[10px]">
            <LogoSvg/>
            <a>
                <Text
                    text="FollowTracker"
                    type="subtitle"
                    classes="text-[#ffffff]"
                />
            </a>
        </div>
    );
};

export default Logo;