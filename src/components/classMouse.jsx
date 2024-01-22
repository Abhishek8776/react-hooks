import { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y:0
    }
  }
  logMousePosition = (e) => {
    console.log("mouse event")
    this.setState({ x: e.clientX, y: e.clientY})
  }
  componentDidMount() {
    console.log("componentDidMount called")

    window.addEventListener("mousemove", this.logMousePosition)
  }
  componentWillUnmount() {
    console.log("component unmounting code")

    window.removeEventListener("mousemove", this.logMousePosition)
  }
  render() { 
    return (<div>
      x - {this.state.x} Y - {this.state.y}
    </div> );
  }
}
 
export default ClassMouse;