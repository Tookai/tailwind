import Image from "next/image";
import { FunctionComponent } from "react";

interface IProps {
  image?: any;
  size?: string;
  random?: number;
}

const Figure: FunctionComponent<IProps> = ({
  image,
  size = "320/180",
  random = 1,
}) => {
  return (
    <div className="relative flex h-[180px] w-[320px] items-center justify-center rounded-md">
      <Image
        src={`https://picsum.photos/320/180?random=${random}`}
        alt="Figma"
        fill={true}
        placeholder="blur"
        blurDataURL={`https://picsum.photos/320/180?random=${random}`}
      />
    </div>
  );
};

export default Figure;
