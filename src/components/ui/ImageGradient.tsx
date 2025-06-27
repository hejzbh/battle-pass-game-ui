interface ImageGradientProps {
  className?: string;
  imageSrc: string;
  children?: React.ReactNode;
}
const ImageGradient = ({
  className = "",
  imageSrc,
  children,
}: ImageGradientProps) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden ${className}`}
    >
      <img
        src={imageSrc}
        width={1920}
        height={1080}
        alt="Background"
        loading="eager"
        className="w-full h-full object-cover absolute top-0 left-0 w-full h-full z-[-2]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-standard-gradient  z-[-1]"></div>
      {children}
    </div>
  );
};

export default ImageGradient;
