import React,{Component,Fragment} from 'react';
import Buttons from './buttons';
import Input from './inputs';


export default class Line extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isEdit: false,
            valueInput: this.props.obj
        }

        this.createNewValue = this.createNewValue.bind(this);
        this.editValue = this.editValue.bind(this);
    }

    //Изменяет стейт ieEdit на противопложный
    editValue() {
        this.setState({isEdit:!this.state.isEdit})
    }

    //Создание нового объекта с новыми значениями, редактироваными
    createNewValue(fieldName,newVal) {
        let obj = this.state.valueInput;
        obj[fieldName]=newVal;
        this.setState({valueInput:obj})

    }

    render() {
        let obj = Object.keys(this.props.obj);
        obj.sort();

        if(this.state.isEdit){
            return (
                <Fragment>
                    {obj.map((item,index)=><td key={index}>
                            <Input
                                value={this.props.obj[item]}
                                newValue={this.createNewValue}
                                fieldName={item}
                            />
                        </td>)}
                    <Buttons
                        id={this.props.obj.uuid}
                        edit ={this.editValue}
                        input={this.state.valueInput}
                    />
                </Fragment>
            )
        }
        return (
            <Fragment>
                {obj.map((item,index)=><td key={index}>{this.props.obj[item]}</td>)}
                <Buttons
                    id={this.props.obj.uuid}
                    edit ={this.editValue}
                />
            </Fragment>
        )
    }
}

