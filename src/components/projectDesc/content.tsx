export default function ProjectDescription(props: {
  title: string;
  desc: string;
}) {
  const { title, desc } = props;

  return (
    <div className="border-slate-300 rounded-b-md pt-3 border-b-2 border-x-2 px-5 py-3 max-[640px]:max-w-11/12 sm:max-w-10/12 md:max-w-1/2 md:pt-0 md:border-0 md:p-0 md:pl-7 lg:pl-0 lg:max-w-2/5">
      <h1 className="font-medium text-2xl mb-2">{title}</h1>
      <p className="text-justify">{desc}</p>
    </div>
  );
}
