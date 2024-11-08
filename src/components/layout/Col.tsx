import React, { PropsWithChildren } from "react";

interface ColProps {
  className?: string;
  style?: React.CSSProperties;
  spacing?: number;
}

const Col = ({
  children,
  className,
  style,
  spacing = 0,
}: PropsWithChildren<ColProps>) => {
  const childrenWithSpacing = React.Children.map(children, (child, index) => {
    if (!child) return null;

    const marginStyle = {
      marginBottom: index === React.Children.count(children) - 1 ? 0 : spacing,
    };

    return <div style={marginStyle}>{child}</div>;
  });

  return (
    <div
      className={`flex flex-col items-center ${className || ""}`}
      style={style}
    >
      {spacing ? childrenWithSpacing : children}
    </div>
  );
};

export default Col;
