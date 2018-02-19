import React from 'react';
import ReactDom from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/index';


class ModalWin extends React.Component{

    //Метод который удаляет пользователя по его id - uuid
    deleteUser () {
        let id = this.props.id;
        this.props.deleteUser(id)
        return this.props.showIsWindow()
    }

    render () {

         return ReactDom.createPortal(
             <div className="modal-window">
                 <div className="modal-window-background"></div>
                 <div className="modal-window-view">
                     <div>
                         <p>Do you really wan to delete this user ?</p>
                     </div>
                     <div className="modal-window-view-buttons">
                         <input type="button" value="Yes" onClick={this.deleteUser.bind(this)}/>
                         <input type="button" value="Cancel" onClick={this.props.showIsWindow}/>
                    </div>
                 </div>
             </div>,
             document.getElementById('modal')
         )
     }

 }

function mapStateToProps (state) {

    return {
        users:state.users
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({deleteUser:deleteUser},dispatch)
}
 export default connect(mapStateToProps,matchDispatchToProps)(ModalWin)