import React from 'react';

const Text = ({ children }) => {
    return children.map((child, index) => {
        if(child instanceof Array) {
            return (
                <ul key={index}>
                    {child.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        }
        else {
            return (
                <p key={index}>
                    {child}
                </p>
            );
        }
    });
};

export default Text;