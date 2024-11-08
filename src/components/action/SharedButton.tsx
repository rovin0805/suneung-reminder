interface SharedButtonProps {
  text: string;
  onClick: () => void;
  isColor?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}

const SharedButton = ({
  text,
  onClick,
  buttonProps,
  isColor,
  className,
}: SharedButtonProps) => {
  return (
    <button
      {...buttonProps}
      onClick={onClick}
      className={`w-[250px] rounded-[100px] items-center justify-center py-[10.5px] ${
        buttonProps?.disabled
          ? "bg-primary-100"
          : isColor
          ? "bg-primary-500"
          : "bg-white"
      }`}
    >
      <p
        className={`font-pretendard800 leading-[24px] text-[20px] ${
          buttonProps?.disabled
            ? "text-primary-200"
            : isColor
            ? "text-white"
            : "text-primary-500"
        } ${className || ""}`}
      >
        {text}
      </p>
    </button>
  );
};

export default SharedButton;
