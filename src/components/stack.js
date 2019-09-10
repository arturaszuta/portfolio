import React from "react";
import cs from "classnames";
import "./stack.scss";


export default function Stack(props) {

  let value = [];
  props.data.forEach(element => {
    value.push(<p>{element}</p>)
  });

  let csName = 'stack_item-content';

  if(props.layout) {
    csName += ' columns_2';
  }

  


  
  return (
    <div className="stack_item">
      <div className="stack_item-image">
      <i className={props.icon}></i>
      <h3>{props.group}</h3>
      </div>
      <div className={csName}>
        {value}
      </div>
    </div>
  )
}