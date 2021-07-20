
import {
    ASYNC_INCREMENT,
    DECREMENT,
    RESET
} from "../constants/counter";

export function increment() {
    return {type: ASYNC_INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}
