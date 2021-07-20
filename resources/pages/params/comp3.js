/**
 * 手动封装 redux
 *
 * useReducer, useContext, createContext
 */
import React, {createContext, useContext, useEffect, useReducer} from 'react';

const actionsType = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}

const increment = (payload) => {
    return { type: actionsType.INCREMENT, payload }
}

const decrement = (payload) => {
    return { type: actionsType.DECREMENT, payload }
}

const reset = (payload) => {
    return { type: actionsType.RESET, payload }
}

const initState = {
    count: 0
}

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case actionsType.INCREMENT:
            return { count: state.count + action.payload };
        case actionsType.DECREMENT:
            return { count: state.count - action.payload };
        case actionsType.RESET:
            return { count: 0 }
        default:
            throw new Error();
    }
}

const Context = createContext(initState);
const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}

export default function Comp3(){

    return (
        <Provider>
            <Comp4 />
        </Provider>
    )
}

function Comp4(){
    const {state, dispatch} = useContext(Context);
    const inc = () => {
        dispatch(increment(5));
    }
    const dec = () => {
        dispatch(decrement(1))
    }
    const res = () => {
        dispatch(reset())
    }
    return (
        <>
            <div>{state.count}</div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={res}>RESET</button>
        </>
    )
}