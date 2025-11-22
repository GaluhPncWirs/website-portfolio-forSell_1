import { useState } from "react";
import EditProject from "../../components/editPortfolio/project/content";
import EditContact from "../../components/editPortfolio/contact/content";
import EditAbout from "../../components/editPortfolio/about/content";
import type { nextEditState } from "../../types/editPortfolio";

export default function DashboardEditPortfolio() {
  const [nextEdit, setNextEdit] = useState<nextEditState>({
    editProject: false,
    editContact: false,
    editAbout: true,
  });

  return (
    <div>
      <div className="bg-slate-700 w-full pb-5 pt-10">
        <ul className="flex justify-evenly items-center h-full">
          <div className="h-1 bg-slate-100 w-1/2 rounded-md absolute" />
          <li className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-lg font-bold z-20">
            <h1 className="text-slate-100 absolute top-2">About</h1>
            <span>1</span>
          </li>
          <li className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold z-20">
            <h1 className="text-slate-100 absolute top-2">Project</h1>
            <span>2</span>
          </li>
          <li className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-lg font-bold z-20">
            <h1 className="text-slate-100 absolute top-2">Contact</h1>
            <span>3</span>
          </li>
        </ul>
      </div>
      {nextEdit.editProject === true ? (
        <EditProject setNextEdit={setNextEdit} />
      ) : nextEdit.editContact === true ? (
        <EditContact />
      ) : (
        <EditAbout setNextEdit={setNextEdit} />
      )}
    </div>
  );
}
