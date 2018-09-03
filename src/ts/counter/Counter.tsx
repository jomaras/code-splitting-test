import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IProps {

}

export interface IState {
    count?: number;
}

export class Counter extends React.Component <IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);

        this.state = {
            count: 0
        };
    }

    public render(){
        return <div className="counter-root">
                <button onClick={this.handleDecrease}>-</button>
                <input type="text" value={this.state.count}></input>
                <button onClick={this.handleIncrease}>+</button>
               </div>
    }

    private handleDecrease(){
        this.setState({
            count: this.state.count - 1
        });
    }

    private handleIncrease(){
        this.setState({
            count: this.state.count + 1
        });
    }
}

export const CounterRenderer = {
    render(element: Element){
        if(!element) { return; }

        ReactDOM.render(<Counter/>, element);
    }
};