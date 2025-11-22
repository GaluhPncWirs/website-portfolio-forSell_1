import React, { useState } from "react";
import GlobalLayout from "../../../layouts/globalLayout/content";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { aboutDescription, mySkills } from "../../../data/aboutSection/data";
import type { nextEditState } from "../../../types/editPortfolio";
import { Textarea } from "../../ui/textarea";

export default function EditAbout({ setNextEdit }: any) {
  const [editAboutDescription, setEditAboutDescription] =
    useState<string>(aboutDescription);
  const [editSkill, setEditSkill] = useState<object[]>(mySkills);

  function handleAddSkill(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputForm = event.currentTarget as HTMLFormElement;

    const inputSkill = inputForm.skill.value;
    const inputIconSkill = inputForm.iconSkill.files?.[0];

    if (!inputIconSkill) return;

    const fileIconUrl = URL.createObjectURL(inputIconSkill);

    setEditSkill((prev) => [
      ...prev,
      {
        skill: inputSkill,
        iconSkill: fileIconUrl,
      },
    ]);
  }
  return (
    <GlobalLayout>
      <h1 className="text-3xl font-semibold mt-7">Edit About</h1>
      <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />

      <div className="mt-7 flex items-center justify-between mb-5">
        <div className="w-1/3">
          <div className="flex flex-col gap-y-4 mb-4">
            <div>
              <Label>About Description</Label>
              <Textarea
                placeholder="A brief description of yourself"
                className="h-28 w-full"
                onChange={(e) => setEditAboutDescription(e.target.value)}
                defaultValue={editAboutDescription}
              />
            </div>
            <form
              onSubmit={(e) => handleAddSkill(e)}
              className="flex flex-col gap-y-4"
            >
              <div>
                <Label>Skills</Label>
                <Input type="text" id="skill" placeholder="Your Skills" />
              </div>
              <div className="my-3">
                <Label>Icon Skills</Label>
                <Input
                  type="file"
                  accept=".png"
                  id="iconSkill"
                  name="iconSkill"
                />
              </div>
              <Button type="submit" className="max-w-24">
                Confirm
              </Button>
            </form>
          </div>
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
                {editSkill.map((item: any, i: number) => (
                  <li
                    className="flex flex-col items-center justify-center"
                    key={i}
                  >
                    <img
                      src={item.iconSkill}
                      alt="Research"
                      width={200}
                      height={200}
                      className="size-9"
                    />
                    <span>{item.skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="flex items-center justify-center"
        onClick={() => {
          setNextEdit((prev: nextEditState) => ({
            ...prev,
            editProject: true,
            editContact: false,
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
