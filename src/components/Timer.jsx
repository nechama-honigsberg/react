import React from "react";
class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.x = React.createRef();
        this.state = {
            m: props.m,
            s: 50
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let { s, m } = this.state;
            s++;
            if (s == 60) {
                m++;
                s = 0;
            }
            //setState מעדכן את הסטייט
            this.setState({ s, m })
        }, 1000);
        this.x.current.focus();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.m != this.state.m) {
            if (this.state.m == 2) {
                this.props.setIsShow(false);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    a = () => {
        this.x.current.value = "first";
    }
    
    render() {
        return (<>
            <h1>hello</h1>
            <input type="text" ref={this.x}></input>
            <button onClick={this.a}>click me</button>
            <div>{String(this.state.m).padStart(2, "0")}:{String(this.state.s).padStart(2, "0")}</div>
        </>)
    }
}
export default Timer;