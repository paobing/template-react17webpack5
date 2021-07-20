import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../../modules/redux/actions/counter"

class Comp1 extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>

            <h2>Comp1-Number: {this.props.counter.count}</h2>

            <button onClick={()=>{this.props.increment()}}> + </button>
            <button onClick={()=>{this.props.decrement()}}> - </button>
            <button onClick={()=>{this.props.reset()}}> Reset </button>

        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp1);
