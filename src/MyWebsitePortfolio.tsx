import { Link } from "react-router-dom";
import NavigationBar from "./components/navigationBar/content";
import GlobalLayout from "./layouts/globalLayout/content";
import SectionContent from "./layouts/sectionLayout/content";
import ProjectDescription from "./components/projectDesc/content";
import SocialMedia from "./components/socialMedia/content";

export default function MyWebsitePortfolio() {
  return (
    <GlobalLayout>
      <NavigationBar />

      {/* introduce sections */}
      <section id="intro">
        <div className="flex justify-between mt-10 flex-col-reverse md:flex-row">
          <div>
            <h3 className="text-xl font-semibold mb-3">Hi, I`m</h3>
            <h1 className="text-6xl font-bold">Lorem Ipsum Dolor</h1>
            <h2 className="text-lg font-semibold mt-5">
              Expert in Marketing and Creative Strategist
            </h2>
            <div className="mt-7 flex gap-x-5">
              <Link
                to="#project"
                className="px-5 bg-[#1C1C1E] text-slate-200 font-medium py-2 rounded-md cursor-pointer hover:bg-slate-500"
              >
                View My Work
              </Link>
              <Link
                to="#contact"
                className="px-5 text-slate-800 font-medium py-2 rounded-md border border-black cursor-pointer hover:bg-slate-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/img/blob.png"
              alt="Blob"
              height={500}
              width={500}
              className="w-md absolute -z-10"
            />
            <img
              src="/img/userProfile.png"
              alt="Profile User"
              height={500}
              width={500}
              className="w-80"
            />
          </div>
        </div>
      </section>
      {/* introduce sections end*/}

      <div className="h-1 w-full bg-slate-700 rounded-md my-10" />

      {/* about sections */}
      <SectionContent idSection="about">
        <div className="flex items-center justify-between flex-col gap-8 lg:flex-row">
          <div className="lg:basis-2/5">
            <h1 className="text-3xl font-semibold">About</h1>
            <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
            <p className="text-justify mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis,
              quaerat eligendi et natus dicta sequi, eius maiores voluptas
              facilis tempore, doloribus illum ipsa ullam impedit dolorem
              expedita tempora.
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
      </SectionContent>
      {/* about sections end*/}

      {/* project sections */}
      <SectionContent idSection="project">
        <h1 className="text-3xl font-semibold">Project</h1>
        <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
        <div className="mt-7 flex flex-col gap-y-7">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <Link to="#" className="w-11/12 sm:w-10/12 md:w-1/2">
              <img
                src="/img/project.jpg"
                alt="Project"
                width={500}
                height={500}
                className="w-full rounded-t-md md:rounded-r-full md:shadow-lg md:shadow-slate-700 transition-all hover:scale-105 hover:opacity-80"
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
                className="w-full rounded-t-md md:rounded-l-full md:shadow-lg md:shadow-slate-700 transition-all hover:scale-105 hover:opacity-80"
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
                className="w-full rounded-t-md md:rounded-r-full md:shadow-lg md:shadow-slate-700 transition-all hover:scale-105 hover:opacity-80"
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
      </SectionContent>
      {/* project sections end */}

      {/* contact sections */}
      <SectionContent idSection="contact">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <div className="h-1 w-14 bg-amber-400 rounded-md mt-2" />
        <div className="flex flex-col gap-y-7 mt-7 md:flex-row md:gap-y-0">
          <form className="basis-1/2 flex flex-col gap-2 items-baseline">
            <div className="flex flex-col w-10/12 sm:w-2/3">
              <label className="mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Jhon"
                className="border border-slate-800 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col w-10/12 sm:w-2/3">
              <label className="mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="jhon@gmail.com"
                className="border border-slate-800 rounded-md px-3 py-2"
              />
            </div>
            <div className="flex flex-col w-10/12 sm:w-2/3">
              <label className="mb-1 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                className="border border-slate-800 rounded-md px-3 py-2 h-24"
              />
            </div>
            <button
              type="submit"
              className="mt-3 border flex items-center gap-x-3 border-slate-800 rounded-md px-5 py-1.5 cursor-pointer font-semibold hover:bg-slate-200"
            >
              <img src="/img/send.png" alt="Send" className="size-6" />
              <span className="text-lg">Send</span>
            </button>
          </form>
          <div className="basis-1/2">
            <h1 className="text-2xl font-semibold">My Social Media</h1>
            <div className="grid grid-cols-2 gap-5 mt-7">
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/instagram.png"
                imgAlt="Instagram"
                title="Instagram"
              />
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/tiktok.png"
                imgAlt="Tiktok"
                title="Tiktok"
              />
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/facebook.png"
                imgAlt="Facebook"
                title="Facebook"
              />
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/x.png"
                imgAlt="X"
                title="X"
              />
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/linkedin.png"
                imgAlt="Linkedin"
                title="Linkedin"
              />
              <SocialMedia
                urlSocialMedia="#"
                imgSrc="/img/github.png"
                imgAlt="Github"
                title="Github"
              />
            </div>
          </div>
        </div>
      </SectionContent>
      {/* contact sections end*/}
    </GlobalLayout>
  );
}
