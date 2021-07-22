import React, { Component } from 'react';
import ColorPicker from 'react-color-picker';
 
export default class CustomizedColorPicker extends Component {
 
    renderHandle = ({ onHandleDown, cx, cy, handleRadius }) => {
        return(
            <svg x={cx-10} y={cy-10} width={20} height={20} > 
            <polygon points={'10,0 0,20 20,20'} fill="#fff" />
            </svg>
        );
    }
 
    renderRect = ({ color, x, y }) => {
        return (
            <circle
                cx={x + 14}
                cy={y + 14}
                r="14"
                fill={color}
            />
        );
    }
 
    render() {
        return (
            <ColorPicker
                renderRect={this.renderRect}
                centerRect={true}
                renderHandle={this.renderHandle}                
            />
        );
    }
}