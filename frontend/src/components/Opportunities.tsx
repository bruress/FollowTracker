import Text from "./Text";
import { opp_items } from "../constant/data";

const Opportunities = () => {
    return (
        <section className="mt-[150px] w-full h-screen">
            {/* container */}
            <div className="mx-[300px]">
                <Text
                    text="Наши возможности"
                    type="title"
                    classes="text-[#040C22] text-center"
                />
                {/* wrapper */}
                <div className="grid grid-cols-3">
                    {opp_items.map((item) => (
                            <div className="rounded-[50px] pt-[50px] text-[#040C22] w-[400px] h-[400px] shadow-lg/8 shadow-[#872CAB]" key={item.id}>
                            {/* icon */}
                            <span className="mx-auto flex items-center justify-center rounded-full w-[100px] h-[100px] bg-[#17145E]">
                                <item.icon/>
                            </span>
                            {/* text */}
                            <div className="pt-[30px] ">
                                <Text
                                    text={item.title}
                                    type="subtitle"
                                    classes="font-raleway font-bold text-center"
                                />
                                <Text
                                    text={item.subtitle}
                                    type="paragraph"
                                    classes="pt-[20px] text-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;