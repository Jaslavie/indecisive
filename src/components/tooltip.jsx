import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

// dynamically control hover controls over tooltip in relation to mouse
export const Tooltip = ({handleMouseOver, handleMouseOut}) => {
    return (
        // onMouseOver and onMouseOut are preset react event handlers in relation to the mouse state
        <div onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}>
             <div className="tooltip-contain">
                <FontAwesomeIcon icon={faCircleInfo} />
             </div>
             
        </div>
    );
};

// modal when tooltip hovered
export const TooltipDiv = () => {
    return(
        <>
            <div className="tooltip-div">
                <h3>Study spots include...</h3>
                <div className="tooltip-element-contain">
                    <div className="icon-contain">
                        🔌
                    </div>
                    <p>outlets</p>
                </div>
                <div className="tooltip-element-contain">
                    <div className="icon-contain">
                        🌙
                    </div>
                    <p>open past 8pm</p>
                </div>
                <div className="tooltip-element-contain">
                    <div className="icon-contain">
                        ☕️
                    </div>
                    <p>much needed coffee</p>
                </div>
            </div>
        </>
    );
};

export const HoverTooltip = () => {
    // set initial state of hovering to false
    const [isHovering, setIsHovering] = useState(false);
    // set state of hovering when mouse function is activated
    const handleMouseOver = () => {
        setIsHovering(true);
        console.log('Mouse over');
    };
    // set state of hovering when mouse out function is activated
    const handleMouseOut = () => {
        setIsHovering(false);
        console.log('Mouse out');
    };

    return (
        <>
            <Tooltip 
            // set the states of the mouse to the state of user interaction
             handleMouseOver = {handleMouseOver}
             handleMouseOut = {handleMouseOut}
            />
            {/* if isHovering is set to true, then show the ToolTip Div */}
            {isHovering && <TooltipDiv />}
        </>
    );
};



export default HoverTooltip