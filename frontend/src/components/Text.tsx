{/* desrcibe which props will be used */}
interface TextProps {
    text: string;
    type: "title" | "subtitle" | "paragraph";
    classes?: string;
}

{/* main */}
const Text = ({text, type, classes}:TextProps) => {

    {/* base styles for text */}
    const baseStyles = {
        title: "text-[64px] font-bold font-raleway",
        subtitle: "text-[24px] font-inter",
        paragraph: "text[20px] font-inter"
    };

    {/* combinating styles with style classes */}
    const finalStyle = `${baseStyles[type]} ${classes}`;
    
    return (
        <p className={finalStyle}>{text}</p>
    );
};

export default Text;