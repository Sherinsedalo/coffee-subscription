import { Link } from "react-router-dom";

export const CreatePlanButton: React.FC = () => {
    return (
        <Link to='/plan'>
            <button className='bg-[#0E8784] hover:bg-[#66D2CF] rounded-md h-12 w-48 font-bold text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#66D2CF] text-[#FEFCF7] '> Create your plan </button>
        </Link>

    )
}