import React, { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        alert("hiii");
        console.log(event.target.value);
        console.log("event.target.value");
    }

    render() {
        return (
                <ul className='list-inline d-flex times_options2' onChange={this.onChangeValue}>
                    <li className='list-inline-item'><label><input type="radio" name="times2" value={'8:00 AM'} /><span>8:00 AM</span></label></li>
                    <li className='list-inline-item'><label><input type="radio" name="times2" value={'11:00 AM'} /><span>11:30 AM</span></label></li>
                </ul>
        );
    }
}

export default Demo;