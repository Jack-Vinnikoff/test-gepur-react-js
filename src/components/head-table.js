import React, {Component} from 'react';
import {connect} from 'react-redux';

class HeadTable extends Component {

    //Выводим заголовки таблицы. Заголовки таблицы - это ключи объекта в массиве объекта
    showHeaders () {
        return Object.keys(this.props.users[0]).sort().map((item,index) => {
                return (
                    <th key={index}>{item}</th>
                )

        })
    }
    render () {
        if(this.props.users.length){
            return (
                <tr>
                    <th>#</th>
                    {this.showHeaders()}
                    <th>Action</th>
                </tr>
            )
        }
        return (
            <tr>
                <th>Пусто</th>
            </tr>
        )
    }
}

function mapStateToProps (state) {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(HeadTable);