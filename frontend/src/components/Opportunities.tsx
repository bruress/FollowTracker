import Text from "./Text";
import { opp_items } from "../constant/data";

const Opportunities = () => {
    return (
        <>
            {/* container */}
            <section className="mx-[20px] mt-[150px] sm:mx-[30px] xl:mx-[150px] 2xl:mx-[300px]">
                    <Text
                        text="Наши возможности"
                        type="title_dr"
                        classes="text-center mb-[50px]"
                    />
                    {/* wrapper */}
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        {/* card */}
                        {opp_items.map((item) => (
                                <div className="rounded-[50px] px-[10px] py-[60px] text-[#040C22] shadow-lg/8 shadow-[#872CAB] duration-500 hover:shadow-xl/15" key={item.id}>
                                {/* icon */}
                                <span className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#17145E]">
                                    <item.icon className="block"/>
                                </span>
                                {/* text */}
                                <div className="pt-[30px]">
                                    <Text
                                        text={item.title}
                                        type="subtitle_cd"
                                    />
                                    <Text
                                        text={item.subtitle}
                                        type="paragraph_cd"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
        </>
    );
};

export default Opportunities;
