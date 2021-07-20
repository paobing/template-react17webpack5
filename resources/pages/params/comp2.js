import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../modules/redux/actions/counter"

function Comp2(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return <div>
            <h2>Comp2-Number: {count}</h2>

            <button onClick={()=>{dispatch(increment())}}> + </button>
            <button onClick={()=>{dispatch(decrement())}}> - </button>
            <button onClick={()=>{dispatch(reset())}}> Reset </button>

        </div>
}

export default Comp2;
