{/* desrcibe which props will be used */}
interface TextProps {
    text: string;
    type: "title_dr" | "title_wh" | "subtitle_cd" | "subtitle_wh" | "subtitle_dr" | "subtitle_gr" | "paragraph" | "paragraph_wh" | "paragraph_cd";
    classes?: string;
}

{/* main */}
const Text = ({text, type, classes}:TextProps) => {

    {/* base styles for text */}
    const baseStyles = {
        title_dr: "lg:text-[64px] sm:text-[48px] text-[40px] font-bold font-raleway text-[#040C22]",
        title_wh: "sm:text-[64px] font-bold font-raleway text-[32px] text-[#ffffff]",
        subtitle_wh: "text-[#ffffff] sm:text-[24px] text-[14px] font-raleway ",
        subtitle_dr: "text-[#040C22] sm:text-[24px] text-[14px] font-raleway text-center pb-[8px]" ,
        subtitle_gr: "text-[#58627F] sm:text-[24px] text-[14px] font-raleway ",
        subtitle_cd: "text-[24px] font-raleway font-bold text-center",
        paragraph: "text[20px] font-inter",
        paragraph_wh: "text[20px] font-inter text-[#ffffff]",
        paragraph_cd: "text[16px] font-inter pt-[20px] text-center",
    };

    {/* combinating styles with style classes */}
    const finalStyle = `${baseStyles[type]} ${classes}`;
    
    return (
        <p className={finalStyle}>{text}</p>
    );
};

export default Text;
