import React from 'react';

export const wrapInsideSpan = (text: string, props?: React.HTMLAttributes<HTMLSpanElement>) => {
  return text.split('').map((char, index) => {
    return (
      <span
        key={index}
        {...props}
        // @ts-ignore
        style={{ '--index': index, ...props?.style }}>
      {char.trim() === '' ? <>&nbsp;</> : char}
    </span>
    );
  });
};
