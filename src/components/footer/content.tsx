import { useRef } from "react";

export default function FooterCompenent() {
  const dateNow = useRef(new Date(Date.now()).getFullYear());
  return (
    <footer className="mt-16 pb-7 bg-slate-700">
      <div className="mx-auto text-slate-200 max-[640px]:w-11/12 sm:w-11/12 lg:container">
        <div className="pt-10">
          <h1 className="text-4xl mb-7">Lorem Ipsum Dolor</h1>
          <div className="flex flex-col gap-y-5">
            <div>
              <h1 className="text-lg">My Email</h1>
              <p>loremipsum@gmail.com</p>
            </div>
            <div>
              <h1 className="text-lg">My Location</h1>
              <p>lorem ipsum dolor amet</p>
            </div>
          </div>
        </div>
        <div className="rounded-md h-1 w-full bg-slate-300 mt-5 mb-3" />
        <h1>
          <span>&copy;</span> Copyright{" "}
          <span className="text-blue-400 font-semibold">
            {dateNow.current}{" "}
          </span>
          | <span className="font-bold">Created By lorem ipsum</span>
        </h1>
      </div>
    </footer>
  );
}
