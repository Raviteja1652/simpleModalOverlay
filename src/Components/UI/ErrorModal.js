import React from "react";
import ReactDOM from "react-dom";
import './ErrorModal.css';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onConfirm}></div>
};

const ModalOverlay = props =>{
    return (
        <div className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button onClick={props.onConfirm}>Okay</button>
            </footer>
        </div>
    )
};

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal((<Backdrop onConfirm={props.onConfirm} />), document.getElementById('backdrop'))}
            {ReactDOM.createPortal((<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />), document.getElementById('modal-overlay'))}            
        </React.Fragment>
    )
};

export default ErrorModal;