import Text from "./Text";
import Header from "./Header";

const Hero = () => {
    return (
        <section className="bg-[url(src/assets/back-1.png)] bg-cover relative w-full h-[1121px]">
            {/* containter */}
            <div className="mx-[300px] pt-[250px]">
                <div className="flex justify-between items-center gap-[180px]">
                    <div className="flex w-full">
                        {/* first graph */}
                        <div>
                            <div className="bg-[#F9F5FF] w-[450px] h-[350px] border-[1px] border-[#040C22] rounded-[50px]">
                            </div>
                            <Text
                                text="Динамика подписчиков «ВКонтакте»"
                                type="subtitle"
                                classes="text-[#ffffff] w-[300px]"
                            />
                        </div>
                        {/* second graph */}
                        <div className="flex-col items-center flex absolute pl-[300px] pt-[130px]">
                            <div className="bg-[#FEFEFF] w-[450px] h-[350px] border-[1px] border-[#040C22] rounded-[50px]">
                            </div>

                            <Text
                                text="Динамика подписчиков «ВКонтакте для бизнеса»"
                                type="subtitle"
                                classes="text-center w-[350px] text-[#ffffff]"
                            />

                        </div>
                    </div>
                    {/* text */}
                    <div className="max-w-[420px]">
                        <Text
                            text="Умная аналитика социальных сетей"
                            type="title"
                            classes="text-[#ffffff]"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;

         