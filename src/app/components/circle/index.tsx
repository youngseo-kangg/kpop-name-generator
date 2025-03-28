type LoadingProps = {
  text?: string;
  color?: keyof typeof colors;
};

const colors = {
  gray: {
    border: "border-gray-300",
    borderTop: "border-t-gray-500",
    text: "text-gray-600",
  },
  red: {
    border: "border-red-300",
    borderTop: "border-t-red-500",
    text: "text-red-600",
  },
  blue: {
    border: "border-blue-300",
    borderTop: "border-t-blue-500",
    text: "text-blue-600",
  },
};

function Circle({ text = "Loading...", color = "gray" }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center h-32">
      <div
        className={`w-10 h-10 border-4 ${colors[color].border} ${colors[color].borderTop} rounded-full animate-spin`}
      />
      <p className={`mt-2 ${colors[color].text}`}>{text}</p>
    </div>
  );
}

export default Circle;
