import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="flex bg-slate-700 rounded-lg mt-7 text-slate-200 max-[640px]:w-full max-[640px]:mt-2 max-[640px]:flex-col max-[640px]:py-5">
      <h1 className="basis-1/3 flex items-center justify-center max-[640px]:text-xl max-[640px]:mb-4">
        Lorem Ipsum Dolor
      </h1>
      <ul className="flex basis-2/3 px-5 h-16 items-center justify-evenly text-lg">
        <li className="cursor-pointer hover:text-amber-600">
          <Link className="font-semibold" to="#intro">
            Introduction
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-600">
          <Link className="font-semibold" to="#about">
            About
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-600">
          <Link className="font-semibold" to="#project">
            Project
          </Link>
        </li>
        <li className="cursor-pointer hover:text-amber-600">
          <Link className="font-semibold" to="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
