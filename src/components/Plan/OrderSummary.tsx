import { FC } from "react";

interface OrderSummaryProps {
    preference: string,
    grind: string,
    kind: string,
    amount: string,
    delivery: string,

}

export const OrderSummary: FC<OrderSummaryProps> = ({ preference, grind, kind, amount, delivery }) => {

    return (
        <div className="bg-[url(src/assets/plan/mobile/bg-order-summary.png)] lg:bg-[url(src/assets/plan/desktop/bg-order-summary.png)] rounded-xl h-auto flex flex-col justify-start gap-2 mt-4 ">

            <h4 className="uppercase text-[#83888F] font-barlow text-sm text-left ml-6 mt-6 md:ml-2 md:text-lg "> Your order Summary:</h4>
            <p className="text-white font-fraunces text-2xl font-bold text-left mt-6 ml-6 w-60 mb-7 md:w-full md:h-30 md:ml-2 lg:text-wrap"> "I drink <span className="text-[#0E8784]">{preference || '_____'}</span> coffee, with a <span className="text-[#0E8784]">{kind || '____'} </span> type of bean.
                <span className="text-[#0E8784]">{amount || '____'}</span> <span className="text-[#0E8784]">{grind}</span>  will be sent to me <span className="text-[#0E8784]">{delivery || '____'}</span>."
            </p>
        </div>
    )
}

