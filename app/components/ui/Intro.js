"use client"
import Button from "./Button";
const Intro = () => {


  return (
    <div className="flex flex-col items-start justify-center" id="about">
      <h1 className="text-2xl font-bold mb-4">
        Hi, I&apos;m{" "}
        <span className="text-4xl md:text-7xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent hover:text-white">
          AKSHAY
        </span>
        <br />
        <span className="text-4xl md:text-7xl hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text">
          Full-Stack Developer
        </span>
      </h1>
      <p className="text-sm text-start md:text-lg text-slate-100 w-full md:max-w-4xl py-6">
        Welcome to my portfolio! I&apos;m a passionate full stack developer with
        skills in various technologies. Let&apos;s connect and explore opportunities
        together!
      </p>
      <div className="flex gap-5 justify-start w-full md:max-w-4xl">
        <Button link={"#contact"} label={"Contact Me"} />
        <Button link={'https://drive.google.com/file/d/1fMB3yeZGT5j9LllsC4Uw16kpMB2SLxWs/view?usp=drive_link'} label={"Download Resume"} />
      </div>
    </div>
  );
};

export default Intro;
