import React from "react";
import {FaTimes,FaRegCircle,FaPen } from "react-icons/fa";

const Icon= ({choise}) => {
    switch (choise){
        case"cross":
            return<FaTimes className="icon"/>;
        case "circle":
            return<FaRegCircle className="icon"/>;
        default:
            return"";
    }
}
export default Icon
