import { Link } from "react-router-dom";

export default function ProjectDescription(props: {
  imgScr: string;
  imgAlt: string;
  title: string;
  desc: string;
  url: string;
}) {
  const { imgScr, imgAlt, title, desc, url } = props;

  return (
    <>
      <Link to={url} className="max-[640px]:w-11/12 sm:w-10/12 md:w-1/2">
        <img
          src={imgScr}
          alt={imgAlt}
          width={500}
          height={500}
          className="w-full max-[640px]:rounded-t-md sm:rounded-t-md md:rounded-r-full md:shadow-lg md:shadow-slate-700"
          loading="lazy"
        />
      </Link>
      <div className="border-slate-300 rounded-b-md pt-3 border-b-2 border-x-2 px-5 py-3 max-[640px]:max-w-11/12 sm:max-w-10/12 md:max-w-1/2 md:pt-0 md:border-0 md:px-0 md:py-0 md:pl-7 lg:pl-0 lg:max-w-2/5">
        <h1 className="font-medium text-2xl mb-2">{title}</h1>
        <p className="text-justify">{desc}</p>
      </div>
    </>
  );
}
