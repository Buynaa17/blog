import { Logo } from "./icons/Logo";
import { Search } from "./icons/Search";
import Link from "next/link";

export function Header() {
  return (
    <div className=" flex  justify-around mr-[200px]">
      <div>
        <Logo />
      </div>
      <div className=" w-[627px]  text-center  ">
        <Link href="articles">Home</Link>
        <Link className="mr-10 ml-10" href="articles">
          Blog
        </Link>
        <Link href="articles">Contact</Link>
      </div>

      <div>
        <input
          className=" w-35 bg-slate-100 absolute  rounded"
          type="text"
        ></input>
        <div className="relative ml-3 mt-1">
          <Search />
        </div>
      </div>
    </div>
  );
}
