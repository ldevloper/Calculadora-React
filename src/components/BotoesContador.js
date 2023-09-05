import React,{Component} from "react";
import { Button } from "react-native";

export default class BotoesContador extends Component {

    render() {
        return(
            <>
            <Button title="+" onPress={this.props.inc}/>
            <Button title="-" onPress={this.props.dec}/>
            </>
        )
    }

}