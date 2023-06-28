import React, { Component } from "react";
import CSS from "../CSS/IPodButton.module.css";

export default function IPodButton(props) {

    const { wheelRef, btnFunction, selectedOption } = props;

    return (<>
        <div className={CSS.buttonSide}>
            <div className={CSS.buttonOuter} ref={wheelRef}>
                <button className={CSS.button + ' ' + CSS.menuButton} onTouchEnd={() => btnFunction.menuOrBack()} onClick={() => btnFunction.menuOrBack()}>MENU</button>
                <button className={CSS.button + ' ' + CSS.back} onTouchEnd={() => btnFunction.backwardBtn()} onClick={() => btnFunction.backwardBtn()}><i className="bi bi-skip-backward-fill"></i></button>
                <button className={CSS.button + ' ' + CSS.forward} onTouchEnd={() => btnFunction.forwardBtn()} onClick={() => btnFunction.forwardBtn()}><i className="bi bi-skip-forward-fill"></i></button>
                <button className={CSS.button + ' ' + CSS.playPause} onTouchEnd={() => btnFunction.playBtn()} onClick={() => btnFunction.playBtn()}><i className="bi bi-play-fill"></i><i className="bi bi-pause-fill"></i></button>
            </div>
            <div className={CSS.buttonInner} onTouchEnd={() => btnFunction.okButtonHandle(selectedOption)} onClick={() => btnFunction.okButtonHandle(selectedOption)}>
                <h1>OK</h1>
            </div>
        </div>
    </>)
}
