import React,{Component} from "react";
class Wine extends Component{
    render(){
        return(
            <>
            <p>{this.props.desc}</p>
            <p>{this.props.title}</p>
            <p>{this.props.rating.value}{4.5}</p>
            <p>{this.props.like ?<p>&#128147;</p> : null}</p>
            </>
        );
    }
}
export default Wine