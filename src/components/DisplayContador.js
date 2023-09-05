import React,{Component} from "react";
import { Text } from "react-native";
import Estilo from "../estilo";

export default class DisplayContador extends Component {

    render() {
        return(
            <Text style={Estilo.fontG} >{this.props.inicial}</Text>
        )
    }

}