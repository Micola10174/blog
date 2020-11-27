import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import './Modal.scss';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({open, handleClose, children}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            classes={{
                root: 'default_dialog_root',
                paper:'paper_custom_dialog'
            }}
        >
            <div className="wrapper-modal">
                {children}
            </div>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal;