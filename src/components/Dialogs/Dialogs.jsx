import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Helen
                </div>
                <div className={classes.dialog}>
                    Kate
                </div>
                <div className={classes.dialog}>
                    Alena
                </div>
                <div className={classes.dialog}>
                    Julia
                </div>
                <div className={classes.dialog}>
                    Stacy
                </div>
                <div className={classes.dialog}>
                    Polina
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hey darling</div>
                <div className={classes.message}>how are you?</div>
                <div className={classes.message}>everything will be fine...</div>
            </div>
        </div>
    )
}

export default Dialogs;