import { Link } from "react-router-dom";
import GlobalLayout from "../../../layouts/globalLayout/content";
import type { nextEditState } from "../../../types/editPortfolio";
import { Button } from "../../ui/button";
import ProjectDescription from "../../projectDesc/content";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import type React from "react";
import { useState } from "react";
import { dataProject } from "../../../data/projectSection/data";

export default function EditProject({ setNextEdit }: any) {
  const [editProject, setEditPorject] = useState<object[]>(dataProject);

  function handleEditProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputForm = event.currentTarget as HTMLFormElement;

    const valueInputTitleProject = inputForm.titleProject.value;
    const valueInputDescProject = inputForm.descProject.value;
    const valueInputimgProject = inputForm.imgProject.files?.[0];
    const valueInputUrlProject = inputForm.urlProject.value;

    if (!valueInputimgProject) return;

    const fileImgUrl = URL.createObjectURL(valueInputimgProject);

    setEditPorject((prev) => [
      ...prev,
      {
        titleProject: valueInputTitleProject,
        descProject: valueInputDescProject,
        imgProject: fileImgUrl,
        href: valueInputUrlProject || "#",
      },
    ]);
  }

  console.log(editProject);
  return (
    <GlobalLayout>
      <div className="my-10">
        <h1 className="text-3xl font-semibold">Edit Project</h1>
        <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
        <div className="mt-7 flex flex-col gap-y-10">
          <form
            className="flex flex-col gap-y-4"
            onSubmit={(e) => handleEditProject(e)}
          >
            <div>
              <Label>Title Project</Label>
              <Input type="text" placeholder="Project one" id="titleProject" />
            </div>
            <div>
              <Label>Description Project</Label>
              <Textarea
                placeholder="Type your description here"
                id="descProject"
              />
            </div>
            <div>
              <Label>Image Project</Label>
              <Input
                type="file"
                accept=".jpg"
                id="imgProject"
                name="imgProject"
              />
            </div>
            <div>
              <Label>Link Project (if any)</Label>
              <Input type="text" placeholder="Url website" id="urlProject" />
            </div>
            <Button type="submit" className="max-w-24">
              Confirm
            </Button>
          </form>
          <div className="flex flex-col gap-y-7">
            {dataProject.map((item: any, i: number) => (
              <div
                className={`flex items-center justify-between flex-col ${
                  (i + 1) % 2 === 0 ? `md:flex-row-reverse` : `md:flex-row`
                }`}
                key={i}
              >
                <Link
                  to={item.href}
                  className="w-11/12 sm:w-10/12 md:w-1/2 transition-all hover:scale-105 hover:opacity-80"
                >
                  <img
                    src={item.imgProject}
                    alt="Project"
                    width={500}
                    height={500}
                    className={`w-full rounded-t-md md:shadow-lg md:shadow-slate-700 ${
                      (i + 1) % 2 === 0
                        ? `md:rounded-l-full`
                        : `md:rounded-r-full`
                    }`}
                    loading="lazy"
                  />
                </Link>
                <ProjectDescription
                  title={item.titleProject}
                  desc={item.descProject}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          className="flex items-center justify-center"
          onClick={() => {
            setNextEdit((prev: nextEditState) => ({
              ...prev,
              editProject: false,
              editContact: false,
              editAbout: true,
            }));
          }}
        >
          <img
            src="/img/editPortfolio/back.png"
            alt="Next"
            height={200}
            width={200}
            className="size-5"
          />
          <span>Back</span>
        </Button>
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
      </div>
    </GlobalLayout>
  );
}
