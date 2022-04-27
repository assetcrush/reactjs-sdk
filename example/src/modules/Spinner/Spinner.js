import React from "react";
import "./styles.css";

export const Spinner = ({
  icon: Icon,
  backgroundColor = "gray",
  width,
  height,
}) => {
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
      <div
        style={{
          transform: `${
            width < height
              ? `scale(${height > 100 ? 1 : height / 300},${
                  height > 100 ? 1 : height / 300
                })`
              : `scale(${width > 100 ? 1 : width / 300},${
                  width > 100 ? 1 : width / 300
                })`
          }`,
        }}
        className="assetcrush-lds-roller"
      >
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
