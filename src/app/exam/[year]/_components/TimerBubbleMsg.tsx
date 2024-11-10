import colors from "@/styles/colors";

interface TimerBubbleMsgProps {
  message: string;
  bubblePosition: React.CSSProperties;
}

const TimerBUbbleMsg = ({ message, bubblePosition }: TimerBubbleMsgProps) => {
  return (
    <div className="absolute top-[17px]" style={bubblePosition}>
      <div className="relative px-[10px] py-[6px] rounded-[5px] bg-primary-700 w-fit">
        <p className="text-white font-pretendard600 text-[13px]">{message}</p>
        <div
          style={{
            position: "absolute",
            borderStyle: "solid",
            borderWidth: "0 8px 8px",
            borderColor: `${colors.primary[700]} transparent`,
            display: "block",
            width: "0",
            zIndex: 1,
            top: "-7px",
            right: "10%",
          }}
        />
      </div>
    </div>
  );
};

export default TimerBUbbleMsg;
