import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementbyValue, decrementbyValue } from '../../Redux/Features/Counter/CounterSlice'

const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div >
            <h1 className="cursor-pointer" onClick={() => dispatch(incrementbyValue(5))}>IncrementByValue 5</h1><br />
            <h1 className="cursor-pointer" onClick={() => dispatch(increment())}>Increment</h1>
            <h1 className="cursor-pointer">{count}</h1>
            <h1 className="cursor-pointer" onClick={() => dispatch(decrement())}>Decrement</h1><br />
            <h1 className="cursor-pointer" onClick={() => dispatch(decrementbyValue(5))}>DecrementByValue 5</h1>
        </div>
    );
};

export default Counter;