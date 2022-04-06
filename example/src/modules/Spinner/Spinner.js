import React from "react";
import "./styles.css";

const styles = (backgroundColor) =>  ({
  wrapperStyle: { background: backgroundColor }
 })

export const Spinner = ({icon:Icon, backgroundColor = 'gray'}) => {
  if (Icon) return Icon;
  return (
    <>
    <style>
      {`
      .assetcrush-lds-roller div:after {
        content: " ";
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${backgroundColor};
        margin: -4px 0 0 -4px;
      }
      `}
    </style>
    <div className="assetcrush-lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </>
  );
};
