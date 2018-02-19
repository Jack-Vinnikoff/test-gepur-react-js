import React, {Component} from 'react';
import ModalWin from './modal-window';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveEditValue} from '../actions/index';
//()=>this.props.deleteUser(id)}

class Buttons extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showIsWindow:false,
            nameBtn1:'Edit',
            nameBtn2:'Delete'
        }
        this.editLineBtn = this.editLineBtn.bind(this);
        this.showIsWindow = this.showIsWindow.bind(this);
    }

    //Метод который изменяет значение строки (редактирование данных)
    editLineBtn () {
        this.setState({nameBtn1:'Save',nameBtn2:'Cancel'})

        //Вызывает метод который проставляет в строке input в значениях для редактирования
        this.props.edit();

        if(this.state.nameBtn1 === 'Save') {
            this.setState({nameBtn1:'Edit',nameBtn2:'Delete'})
            this.props.editValueUser(this.props.input,this.props.id);
        }
    }

    //Открытие модального окна подтверждения удаления пользователя
    showIsWindow() {
        if(this.state.nameBtn2 ==='Delete'){
            return this.setState({showIsWindow:!this.state.showIsWindow})
        }
        this.props.edit();
        return this.setState({nameBtn1:'Edit',nameBtn2:'Delete'})
    }

    render () {
        //Проводим Деструктуризацию элементов объекта this.state
        const {nameBtn1,nameBtn2} = this.state;

        return (
            <td>
                <button onClick={this.editLineBtn}>{nameBtn1}</button>
                <button onClick={this.showIsWindow}>{nameBtn2}</button>
                {this.state.showIsWindow?
                    <ModalWin
                        id = {this.props.id}
                        showIsWindow = {this.showIsWindow}
                    />
                    :''}
            </td>

        )
    }
}
function mapStateToProps (state) {

    return {
        users:state.users
    }
}
function matchDispatchToProps (dispatch) {
    return bindActionCreators({editValueUser:saveEditValue},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Buttons);