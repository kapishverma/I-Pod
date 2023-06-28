import React from "react";
import { ArrayList } from "./arrayList.jsx"
import CSS from "../CSS/Menu.module.css"

export default function Menu(props) {

    const { selectedMenu, selectedOption } = props;
    const arrayMenu = Object.values(ArrayList)[selectedMenu];

    return (<>
        <div className={CSS.body}>
            <div className={CSS.heading}>
                <h1>{Object.keys(ArrayList)[selectedMenu]}</h1>
            </div>
            <div className={CSS.options}>
                {arrayMenu.map((option, index) => (
                    <div key={index}
                        className={`${CSS.item} ${index === selectedOption ? CSS.selectedOption : ''}`}>
                        <div className={CSS.optionName}>
                             <h3>{option.name}</h3>
                        </div>
                        <div className={CSS.optionIcon}>
                            <img src={option.icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}
