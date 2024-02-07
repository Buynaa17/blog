import { Logo } from "./icons/Logo";
import { Search } from "./icons/Search";
import Link from "next/link";

export function Header() {
  return (
    <div className=" flex  justify-around mr-[200px] w-[1200px] m-autov ">
      <div>
        <Logo />
      </div>
      <div className=" w-[627px]  text-center  ">
        <Link href="/">Home</Link>
        <Link className="mr-10 ml-10" href="/articles/blog">
          Blog
        </Link>
        <Link href="/articles/contact">Contact</Link>
        <Link className="mr-10 ml-10" href="/static">
          Static
        </Link>
      </div>

      <div>
        <input
          className=" w-35 bg-slate-100 absolute rounded "
          type="text"
          placeholder="Search"
        ></input>
        <div className="relative ml-14 mt-1">
          <Search />
        </div>
      </div>
    </div>
  );
}
