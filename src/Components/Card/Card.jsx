import { useDispatch } from "react-redux";
import { addtocart, } from "../../Redux/Features/Cart/CartSlice";
const Card = ({ book }) => {
    const dispatch = useDispatch()
    return (
        <div className="border-2 border-solid border-purple-500 p-3">
            <h3>{book?.name}</h3>
            <p>{book?.price}</p>
            <div className="flex justify-end">
                <button className="bg-red-700 text-white p-2 rounded-lg" onClick={() => dispatch(addtocart(book))}>add to cart</button>
            </div>
        </div>
    );
};

export default Card;