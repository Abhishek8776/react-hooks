import { Component } from "react";
import ClassMouse from "./classMouse";

class ClassMouseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {display:true}
  }
  toggleDisplay = () => {
    this.setState((prevState) => ({
      display: !prevState.display,
    }));
  };
  render() { 
    return ( 
      <div>
        <button onClick={this.toggleDisplay}>
          togggle display
        </button>
        {this.state.display && <ClassMouse />}
      </div>
     );
  }
}
 
export default ClassMouseContainer;