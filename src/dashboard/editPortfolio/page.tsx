import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import GlobalLayout from "../../layouts/globalLayout/content";
import { aboutDescription } from "../../data/aboutSection/data";

export default function DashboardEditPortfolio() {
  const [editAboutDescription, setEditAboutDescription] =
    useState<string>(aboutDescription);
  const [editSkills, setEditSkills] = useState<string>("");
  const [addSkill, setAddSkill] = useState<number>(1);
  return (
    <GlobalLayout>
      <div className="bg-slate-700 w-full pb-5 pt-10 rounded-b-md">
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
      <div className="my-10 flex items-center justify-between">
        <div className="w-1/3">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-y-4 mb-4">
              <div>
                <Label>About Description</Label>
                <textarea
                  placeholder="A brief description of yourself"
                  className="border border-slate-800 rounded-md p-3 h-24 w-full"
                  onChange={(e) => setEditAboutDescription(e.target.value)}
                  defaultValue={editAboutDescription}
                />
              </div>
              <div>
                {Array.from({ length: addSkill }).map((_: any, i: number) => (
                  <div key={i} className="mb-4 bg-slate-100 p-5 rounded-lg">
                    <div className="mb-3">
                      <Label>Skills</Label>
                      <Input
                        type="text"
                        onChange={(e) => setEditSkills(e.target.value)}
                        placeholder="Your Skills"
                      />
                    </div>
                    <div>
                      <Label>Icon Skills</Label>
                      <Input type="file" accept=".png" />
                    </div>
                  </div>
                ))}
                <Button
                  onClick={() => setAddSkill((prev: number) => prev + 1)}
                  className="mt-3"
                >
                  Add Skills
                </Button>
              </div>
            </div>
            <Button
              variant="outline"
              className="flex items-center justify-center"
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
          </form>
        </div>
        <div className="w-3/5">
          <div className="flex items-center justify-between flex-col gap-8">
            <div className="lg:basis-2/5 lg:max-w-full">
              <h1 className="text-3xl font-semibold">About</h1>
              <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
              <p className="text-justify mt-3 whitespace-pre-wrap wrap-break-word">
                {editAboutDescription}
              </p>
            </div>
            <div className="w-full lg:basis-1/2">
              <h1 className="text-2xl font-semibold mb-7">My Skills</h1>
              <ul className="flex justify-evenly font-semibold text-base sm:text-lg">
                <li className="flex flex-col items-center justify-center">
                  <img
                    src="/img/research.png"
                    alt="Research"
                    width={200}
                    height={200}
                    className="size-9"
                  />
                  <span>Marketing Research</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <img
                    src="/img/comunication.png"
                    alt="Communication"
                    width={200}
                    height={200}
                    className="size-9"
                  />
                  <span>Communication</span>
                </li>
                <li className="flex flex-col items-center justify-center">
                  <img
                    src="/img/based-onData.png"
                    alt="Based on Data"
                    width={200}
                    height={200}
                    className="size-9"
                  />
                  <span>Based on Data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
