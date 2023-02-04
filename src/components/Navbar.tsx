import Link from "next/link";
import { FunctionComponent } from "react";

interface IProps {}

const Navbar: FunctionComponent<IProps> = ({}) => {
  return (
    <div className="flex justify-evenly gap-12 bg-black text-2xl font-bold text-white">
      <Link href="/home"> Home </Link>
      <Link href="/about"> About </Link>
      <Link href="/"> Index </Link>
    </div>
  );
};

export default Navbar;
