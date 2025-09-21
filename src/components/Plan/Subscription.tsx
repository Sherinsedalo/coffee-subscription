import { FC } from "react";
import { useState } from "react";
import { coffeeForm, coffeeFormItem, grindOptions, grindOptionsItem, coffeeKind, coffeeKindItem, coffeeDosage, coffeeDosageItem, deliveryFrequency, deliveryFrequencyItem } from "./planData";
import { CreateSubscriptionButton } from '../buttons/CreateSubscriptionButton';
import { OrderSummary } from "./OrderSummary";

export const Subscription: FC = () => {

    const [openSection, setOpenSection] = useState(1);
    const [preference, setPreference] = useState('');
    const [grindPreference, setGrindPreference] = useState('');
    const [isGrindDiseabled, setisGrindDiseabled] = useState(false);
    const [selectedCoffeeKind, setSelectedCoffeeKind] = useState('');
    const [selectedCoffeeDosage, setSelectedCoffeeDosage] = useState('');
    const [selectedDelivery, setSelectedDelivery] = useState('');

    const toggleSection = (id: number) => {
        if (id === 4 && isGrindDiseabled) return;
        setOpenSection(openSection === id ? 0 : id);
    }

    const handlePreferenceSelection = (option: string) => {
        setPreference(option);
        if (option === 'capsule') {
            setisGrindDiseabled(true);
            setGrindPreference('')
        }
        else { setisGrindDiseabled(false) }

    }


    return (
        <section className="bg-[#FEFCF7] mb-10">

            {/* Coffee options section */}

            <div className="mb-4">

                <button className="w-full text-left text-2xl font-bold py-4 " onClick={() => toggleSection(1)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-fraunces text-bold text-2xl text-[#83888F] flex items-center ">How do you drink your coffee?</h3>
                        <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow icon" className={`w-4 transform transition-transform duration-1000 ${openSection === 1 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>

                </button>

                {openSection === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 ">
                        {coffeeForm.map((option: coffeeFormItem) => (
                            <button key={option.title} onClick={() => handlePreferenceSelection(option.title)} className={`p-6 rounded-xl text-center shadow-md flex flex-col justify-evenly items-center m-2 h-45 md:h-60 md:justify-start hover:bg-[#FDD6BA] cursor-pointer ${preference === option.title ? 'bg-[#0E8784] text-[#FEFCF7]' : 'bg-[#F4F1EB] text-[#333D4B]'} `}>
                                <strong className="font-fraunces text-xl md:mt-4">{option.title}</strong>
                                <p className="text-md mt-2">{option.description}</p>
                            </button>
                        ))}

                    </div>
                )}

            </div>

            {/* Kind of coffee section */}
            <div className="mb-4">

                <button className="w-full text-left text-2xl font-bold py-4 " onClick={() => toggleSection(2)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-fraunces text-bold text-2xl text-[#83888F] flex items-center " > What type of coffee?</h3>
                        <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow icon" className={`w-4 transform transition-transform duration-1000 ${openSection === 2 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </button>

                {openSection === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2">

                        {coffeeKind.map((option: coffeeKindItem) => (
                            <button key={option.title} onClick={() => setSelectedCoffeeKind(option.title)} className={`p-6 rounded-xl text-center shadow-md flex flex-col justify-evenly items-center m-2 h-45 md:h-60 md:justify-start hover:bg-[#FDD6BA] cursor-pointer ${selectedCoffeeKind === option.title ? 'bg-[#0E8784] text-[#FEFCF7]' : 'bg-[#F4F1EB] text-[#333D4B]'} `}>
                                <strong className="font-fraunces text-xl md:mt-4">{option.title}</strong>
                                <p className="text-md mt-2">{option.description}</p>
                            </button>
                        ))}
                    </div>
                )}

            </div>


            {/* Coffee amount section */}
            <div className="mb-4">
                <button className="w-full text-left text-2xl font-bold py-4 " onClick={() => toggleSection(3)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-fraunces text-bold text-2xl text-[#83888F] flex items-center" >How much would you like? </h3>
                        <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow icon" className={`w-4 transform transition-transform duration-1000 ${openSection === 3 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </button>

                {openSection === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 ">
                        {coffeeDosage.map((option: coffeeDosageItem) => (
                            <button key={option.title} onClick={() => setSelectedCoffeeDosage(option.title)} className={`p-6 rounded-xl text-center shadow-md flex flex-col justify-evenly items-center m-2 h-45 md:h-60 md:justify-start hover:bg-[#FDD6BA] cursor-pointer ${selectedCoffeeDosage === option.title ? 'bg-[#0E8784] text-[#FEFCF7]' : 'bg-[#F4F1EB] text-[#333D4B]'} `}>
                                <strong className="font-fraunces text-xl md:mt-4">{option.title}</strong>
                                <p className="text-md mt-2">{option.description}</p>
                            </button>
                        ))}

                    </div>
                )}
            </div>


            {/* Grind section */}

            <div className="mb-4">
                <button className={`w-full text-left text-2xl font-bold py-4  ${isGrindDiseabled ? 'text-[#83888F] cursor-not-allowed' : ''}`} onClick={() => toggleSection(4)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-fraunces text-bold text-2xl text-[#83888F] flex items-center gap-2">Want us to grind them? </h3>
                        <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow icon" className={`w-4 transform transition-transform duration-1000 ${openSection === 4 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>

                </button>
                {openSection === 4 && !isGrindDiseabled && (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 ">
                        {grindOptions.map((grind: grindOptionsItem) => (
                            <button key={grind.title} onClick={() => setGrindPreference(grind.title)} className={`p-6 rounded-xl text-center shadow-md flex flex-col justify-evenly items-center m-2 h-45 md:h-60 md:justify-start hover:bg-[#FDD6BA] cursor-pointer ${grindPreference === grind.title ? 'bg-[#0E8784] text-[#FEFCF7]' : 'bg-[#F4F1EB] text-[#333D4B]'}`}>
                                <strong className="font-fraunces text-xl md:mt-4">{grind.title}</strong>
                                <p className="text-md mt-2">{grind.description}</p></button>
                        ))}
                    </div>
                )}
            </div>

            {/* Delivery frequency section */}

            <div>
                <button onClick={() => toggleSection(5)} className="w-full text-left text-2xl font-bold py-4 " >
                    <div className="flex justify-between items-center">
                        <h3 className="font-fraunces text-bold text-2xl text-[#83888F] flex items-center gap-2">How often should we deliver? </h3>
                        <img src="/assets/plan/desktop/icon-arrow.svg" alt="arrow icon" className={`w-4 transform transition-transform duration-1000 ${openSection === 5 ? 'rotate-180' : 'rotate-0'}`} />

                    </div>
                </button>

                {openSection === 5 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 ">
                        {deliveryFrequency.map((option: deliveryFrequencyItem) => (
                            <button key={option.title} onClick={() => setSelectedDelivery(option.title)} className={`p-6 rounded-xl text-center shadow-md flex flex-col justify-evenly items-center m-2 h-45 md:h-60 md:justify-start hover:bg-[#FDD6BA] cursor-pointer ${selectedDelivery === option.title ? 'bg-[#0E8784] text-[#FEFCF7]' : 'bg-[#F4F1EB] text-[#333D4B]'} `}>
                                <strong className="font-fraunces text-xl md:mt-4">{option.title}</strong>
                                <p className="text-md mt-2">{option.description}</p>
                            </button>
                        ))}

                    </div>
                )}
            </div>

            <div className="md:mt-14">
                <OrderSummary
                    preference={preference}
                    kind={selectedCoffeeKind}
                    grind={preference === 'Capsule' ? 'in capsules form' : grindPreference}
                    amount={selectedCoffeeDosage}
                    delivery={selectedDelivery}
                />
            </div>

            <div className=" mt-5 md:text-right md:mt-9">
                <CreateSubscriptionButton />
            </div>
        </section>
    )
}