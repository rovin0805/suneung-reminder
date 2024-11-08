import React, { PropsWithChildren } from "react";

interface RowProps {
  className?: string;
  style?: React.CSSProperties;
  spacing?: number;
}

const Row = ({
  children,
  className,
  style,
  spacing = 0,
}: PropsWithChildren<RowProps>) => {
  const childrenWithSpacing = React.Children.map(children, (child, index) => {
    if (!child) return null;

    const marginStyle = {
      marginRight: index === React.Children.count(children) - 1 ? 0 : spacing,
    };

    return <div style={marginStyle}>{child}</div>;
  });

  return (
    <div
      className={`flex flex-row items-center ${className || ""}`}
      style={style}
    >
      {spacing ? childrenWithSpacing : children}
    </div>
  );
};

export default Row;
