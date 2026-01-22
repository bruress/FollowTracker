import Text from "./Text";

const Cost = () => {
    return (
        <>
            {/* container */}
            <section className="mb-[250px] flex flex-col items-center justify-center mx-[300px] h-screen">
                {/* text */}
                <div className="mb-[70px] w-[890px]">
                    <Text
                        text="Индивидуальная стоимость"
                        type="title"
                        classes="font-bold text-center"
                    />
                    <Text
                        text="Итоговая цена рассчитывается индивидуально в зависимости от задач, объёма данных и необходимых возможностей."
                        type="subtitle"
                        classes="text-[#58627F] text-center"
                    />
                </div>
                {/* name */}
                <div className="mb-[40px]">
                    <Text
                        text="ФИО*"
                        type="subtitle"
                        classes="text-[#040C22] pb-[8px]"
                    />
                    <input
                        type="text"
                        placeholder="Иванов Иван Иванович"
                        className="outline-none rounded-[25px] border-[#040C22] border-[1px] w-[650px] h-[70px] pl-[30px] font-inter text-[20px]"
                    />
                </div>
                {/* email */}
                <div className="mb-[40px]">
                    <Text
                        text="E-mail*"
                        type="subtitle"
                        classes="text-[#040C22] pb-[8px]"
                    />
                    <input
                        type="email"
                        placeholder="name@mail.ru"
                        className="outline-none  rounded-[25px] border-[#040C22] border-[1px] w-[650px] h-[70px] pl-[30px] font-inter text-[20px]"
                    />
                </div>
                {/* messsage */}
                <div className="mb-[40px]">
                    <Text
                        text="Ваше сообщение*"
                        type="subtitle"
                        classes="text-[#040C22] pb-[8px]"
                    />
                    <textarea
                        placeholder="Напишите что-нибудь"
                        className="outline-none pt-[25px] rounded-[25px] border-[#040C22] border-[1px] w-[650px] h-[160px] pl-[30px] font-inter text-[20px]"
                    />
                </div>
            

                <button className="mt-[20px] w-[650px] h-[90px] bg-[#17145E] font-raleway text-[32px] text-white font-bold rounded-[25px]">
                    Отправить
                </button>



            </section>
        </>
    );
};

export default Cost;