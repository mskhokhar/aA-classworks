import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date().toString()};
    }
    componentDidMount(){
        this.intervalId = setInterval((e) => { this.tick(); },1000);
    }
    tick(){
        this.setState({ date: new Date().toString()});
    }
    render(){
        return(
            <div >
                <h1>CLOCK</h1>
                <div className="clock">
                    <div className="titles">
                        <h2>Time: </h2>
                        <h2>Date: </h2>
                    </div>
                    <div className="content"> 
                        <h2>{this.state.date.slice(16, 24)}</h2>
                        <h2>{this.state.date.slice(0, 15)} </h2>
                    </div>
                    
                </div>
            </div>
        )
    };
}

export default Clock;