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
        let newValue = this.props.newValue;
        let fieldName = this.props.fieldName;
        this.setState({valueInput:event.target.value},()=>newValue(fieldName,this.state.valueInput))

    }

    render() {
        console.log(this.props.val1);
        return (
            <input
                type="text"
                value = {this.state.valueInput}
                onChange={this.changeInputValue.bind(this)}

            />
        )
    }
}
