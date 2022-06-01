import React from 'react'
import searchIcon from './icons/searchIcon.png'
import changeIcon from './icons/changeIcon.png'
import plusIcon from './icons/plusIcon.png'
import trashIcon from './icons/trashIcon.png'
import cancelIcon from './icons/cancelIcon.png'
import callIcon from './icons/callIcon.png'
import smsIcon from './icons/smsIcon.png'
import endcallIcon from './icons/endcallIcon.png'

const icons  = {
    changeIcon,
    searchIcon,
    plusIcon,
    trashIcon,
    cancelIcon,
    callIcon,
    smsIcon,
    endcallIcon
};

export const Ico = ({name, width = 30, height = 30}) => {
    return  <img src={icons[name]} alt="icon" width={width} height={height} /> 
}