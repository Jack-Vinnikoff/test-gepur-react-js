import React, {Component} from 'react';
import {connect} from 'react-redux';
import Line from './line-table';

class Table extends Component {
    render () {
        return (
            <tbody>
            {this.props.users.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <Line
                            key={index}
                            obj = {item}
                        />

                    </tr>
                    )

            })}

            </tbody>
        )
    }
}

function mapStateToProps (state) {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(Table);