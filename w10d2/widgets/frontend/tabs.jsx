import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        // console.log(document.querySelectorAll(".tabHead"));
        document.querySelectorAll(".tabHead").forEach(e => {
            e.className = "tabHead";
        });
        if (e.currentTarget.innerHTML === 'one') {
            this.setState({index: 0});
            e.currentTarget.classList.add("clickedTab");
        } else if (e.currentTarget.innerHTML === 'two') {
            this.setState({ index: 1 });
            e.currentTarget.classList.add("clickedTab");
        } else if (e.currentTarget.innerHTML === 'three') {
            this.setState({ index: 2 });
            e.currentTarget.classList.add("clickedTab");
        }
    }

    render() {
        return (
            <div className="tabs" >
                <div onClick={this.handleClick} className="tabHead">one</div>
                <div onClick={this.handleClick} className="tabHead">two</div>
                <div onClick={this.handleClick} className="tabHead">three</div>
                <div className="tabContent">{this.props.tab[this.state.index].content}</div>
            </div>
        )
    };
}

export default Tabs;