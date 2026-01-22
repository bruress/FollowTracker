import Text from "./Text";
import { Drop } from "../constant/Svg";

const Graph = () => {
    return (
        <section className="mt-[100px] left-0 top-0 bg-[url(src/assets/back-2.png)] bg-cover w-full h-[1200px] items-center">
            {/* container */}
            <div className="mx-[300px] h-full ">

                <div className="flex items-center justify-center flex-col pt-[200px] gap-[70px]">
                    <Text
                        text="Попробуйте сами"
                        type="title"
                        classes="font-bold text-[#ffffff]"
                    />
                    <div className="w-[1300px] h-[600px] bg-[#FEFEFF] rounded-[35px] border-[#040C22] border-[1px]">
                        {/* menu container*/}
                        <div className="flex m-[40px] justify-between items-center">
                            <div className="flex gap-[100px]">
                                {/* first menu */}
                                <div className="justify-between px-[20px] text-[#040C22] font-inter text-[20px] flex items-center w-[200px] h-[50px] border-[1px] border-[#040C22] rounded-[15px]">
                                    <span>Группа</span>
                                    <Drop/>
                                </div>
                                {/* second menu */}
                                <div className="justify-between px-[20px] text-[#040C22] font-inter text-[20px] flex items-center w-[200px] h-[50px] border-[1px] border-[#040C22] rounded-[15px]">
                                    <span>Анализ</span>
                                    <Drop/>
                                </div>
                            </div>
                            <span className="font-bold text-[32px] font-raleway">
                                Февраль
                            </span>
                        </div>
                        {/* graph container */}
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Graph;