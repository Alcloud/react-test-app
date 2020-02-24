import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogData.map( el => (<DialogItem name={el.name} id={el.id}/>));
    let messageElements = props.messageData.map( el => (<Message text={el.message} id={el.id}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>);
  }

  export default Dialogs;