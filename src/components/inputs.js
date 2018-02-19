import React,{Component} from 'react';

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            valueInput:this.props.value
        }
    }

    //Изменяем значения полей при редактировании
    changeInputValue (event) {
        const {newValue,fieldName} = this.props
        this.setState({valueInput:event.target.value},()=>newValue(fieldName,this.state.valueInput))

    }

    render() {
        return (
            <input
                type="text"
                value = {this.state.valueInput}
                onChange={this.changeInputValue.bind(this)}

            />
        )
    }
}
