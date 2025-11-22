import { Link } from "react-router-dom";
import GlobalLayout from "../../../layouts/globalLayout/content";
import type { nextEditState } from "../../../types/editPortfolio";
import { Button } from "../../ui/button";
import ProjectDescription from "../../projectDesc/content";

export default function EditProject({ setNextEdit }: any) {
  return (
    <GlobalLayout>
      <div>
        <h1 className="text-3xl font-semibold my-7">Edit Project</h1>
        <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
        <div className="mt-7 flex flex-col gap-y-7">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <Link to="#" className="w-11/12 sm:w-10/12 md:w-1/2">
              <img
                src="/img/project.jpg"
                alt="Project"
                width={500}
                height={500}
                className="w-full rounded-t-md md:rounded-r-full md:shadow-lg md:shadow-slate-700"
                loading="lazy"
              />
            </Link>
            <ProjectDescription
              title="lorem amet amit"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magni provident autem in suscipit error sint, odio
                temporibus ducimus Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Delectus voluptatem dolor perferendis."
            />
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row-reverse">
            <Link to="#" className="w-11/12 sm:w-10/12 md:w-1/2">
              <img
                src="/img/project.jpg"
                alt="Project"
                width={500}
                height={500}
                className="w-full rounded-t-md md:rounded-l-full md:shadow-lg md:shadow-slate-700"
                loading="lazy"
              />
            </Link>
            <ProjectDescription
              title="lorem amet amit"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magni provident autem in suscipit error sint, odio
                temporibus ducimus"
            />
          </div>
          <div className="flex items-center justify-between flex-col md:flex-row">
            <Link to="#" className="w-11/12 sm:w-10/12 md:w-1/2">
              <img
                src="/img/project.jpg"
                alt="Project"
                width={500}
                height={500}
                className="w-full rounded-t-md md:rounded-r-full md:shadow-lg md:shadow-slate-700"
                loading="lazy"
              />
            </Link>
            <ProjectDescription
              title="lorem amet amit"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti magni provident autem in suscipit error sint, odio
                temporibus ducimus Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Delectus voluptatem dolor perferendis. Sed,
                esse."
            />
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="flex items-center justify-center"
        onClick={() => {
          setNextEdit((prev: nextEditState) => ({
            ...prev,
            editProject: false,
            editContact: true,
            editAbout: false,
          }));
        }}
      >
        <span>Next and Save</span>
        <img
          src="/img/editPortfolio/next.png"
          alt="Next"
          height={200}
          width={200}
          className="size-5"
        />
      </Button>
    </GlobalLayout>
  );
}
