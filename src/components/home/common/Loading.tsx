type LoadingProps = {
  size?: number;
  text?: string;
  fullScreen?: boolean;
};

const Loading = ({
  size = 50,
  text = "Loading...",
  fullScreen = false,
}: LoadingProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${
        fullScreen ? "min-h-screen w-full" : "py-10"
      }`}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderColor: "#014162",
            borderTopColor: "transparent",
          }}
        />
        <div
          className="absolute inset-2 rounded-full opacity-20"
          style={{ backgroundColor: "#014162" }}
        />
      </div>

      <p
        className="text-sm font-medium tracking-wide animate-pulse"
        style={{ color: "#014162" }}
      >
        {text}
      </p>
    </div>
  );
};

export default Loading;
