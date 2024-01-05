import Image from "next/image";
import { BrandLogo, DeveloperImage } from "../../public/assets/images";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import ImageBackground from "./ImageBackground";
import { CourseList } from "@/pages/static/Course";
import { CourseStatic } from "@/pages/utils/course";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const handleActiveTab = (value: string): void => {
    console.log(value);

    setActiveTab(value);
  };

  return (
    <div className="fixed top-0 bg-brand-white w-full">
      <div className="flex justify-between py-5 px-10 w-full">
        {/* section 1 */}
        <div className="flex justify-start gap-2">
          <Image src={BrandLogo} alt="logo" className="w-12 h-12" />
          <div className="flex flex-col">
            <Typography
              className="font-poppins font-extrabold text-xl text-neutral-medium"
              placeholder={"text"}
            >
              Code With Teten
            </Typography>
            <Typography
              className="font-poppins font-normal text-sm text-neutral-medium"
              placeholder={"text"}
            >
              Upgrade Your Tech Skills
            </Typography>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex justify-start items-center gap-8">
          {/* navbar 1 */}
          <Typography
            className="font-poppins font-medium text-base text-neutral-medium cursor-pointer"
            placeholder={"text"}
          >
            Flash Sale
          </Typography>
          {/* navbar 2 */}
          <div className="flex items-center">
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => {
                if (activeTab === "class") {
                  handleActiveTab("");
                } else {
                  handleActiveTab("class");
                }
              }}
            >
              <Typography
                className={`${
                  activeTab === "class"
                    ? "font-semibold text-neutral-medium"
                    : "text-neutral-medium font-medium hover:text-brand-blue-3"
                } font-poppins text-base`}
                placeholder={"text"}
              >
                Class
              </Typography>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <Menu placement="bottom" open={activeTab === "class"}>
              <MenuHandler>
                <div className="mt-10"></div>
              </MenuHandler>
              <MenuList
                placeholder={"list"}
                className="rounded-2xl"
                onClick={() => {
                  if (activeTab === "class") {
                    handleActiveTab("");
                  } else {
                    handleActiveTab("class");
                  }
                }}
              >
                <div className="flex flex-col max-w-2/3 rounded-2xl bg-white shadow-xl">
                  <div className="flex justify-start">
                    <ImageBackground
                      className="w-[270px] h-[350px] rounded-s-2xl"
                      imageUrl={DeveloperImage.src}
                    >
                      <div className="h-full w-full bg-gradient-to-b from-black/90 to-black/25 rounded-s-2xl">
                        <div className="flex justify-center pt-10">
                          <Typography
                            className="font-semibold text-sm font-poppins text-[#3AC4A0]"
                            placeholder={"text"}
                          >
                            Trusted By 900k+ Students
                          </Typography>
                        </div>
                        <div className="flex justify-center pt-2">
                          <div className="flex flex-col">
                            <Typography
                              className="font-semibold text-2xl font-poppins text-white text-center"
                              placeholder={"text"}
                            >
                              {`Build Your`}
                            </Typography>
                            <Typography
                              className="font-semibold text-2xl font-poppins text-white text-center"
                              placeholder={"text"}
                            >
                              {`Future Career`}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </ImageBackground>
                    <div className="flex flex-col bg-white py-10 px-10 rounded-e-2xl">
                      <div className="grid grid-cols-3 gap-4">
                        {CourseList.map((el: CourseStatic, i: number) => {
                          return (
                            <Typography
                              className="font-medium text-base lg:text-lg font-poppins text-black hover:text-brand-blue-3 cursor-pointer w-fit"
                              placeholder={"text"}
                              key={i}
                            >
                              {el.name}
                            </Typography>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </MenuList>
            </Menu>
          </div>
          {/* navbar 3 */}
          <div className="flex items-center">
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => {
                if (activeTab === "learning") {
                  handleActiveTab("");
                } else {
                  handleActiveTab("learning");
                }
              }}
            >
              <Typography
                className={`${
                  activeTab === "learning"
                    ? "font-semibold text-neutral-medium"
                    : "text-neutral-medium font-medium hover:text-brand-blue-3"
                } font-poppins text-base`}
                placeholder={"text"}
              >
                Learning Path
              </Typography>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <Menu placement="bottom" open={activeTab === "learning"}>
              <MenuHandler>
                <div className="mt-10"></div>
              </MenuHandler>
              <MenuList
                placeholder={"list"}
                onClick={() => {
                  if (activeTab === "learning") {
                    handleActiveTab("");
                  } else {
                    handleActiveTab("learning");
                  }
                }}
              >
                <div className="flex flex-col p-2 max-w-2/3">
                  <div className="flex justify-between">
                    <Typography
                      className="font-semibold text-xs font-poppins text-[#3AC4A0]"
                      placeholder={"text"}
                    >
                      Info
                    </Typography>
                  </div>
                  <Typography
                    className="font-normal text-xs font-poppins text-[#262626] mt-2"
                    placeholder={"text"}
                  >
                    All the transaction with real money{" "}
                    <span className="font-semibold">
                      (Pay and Claim Reward)
                    </span>{" "}
                    will be using IDR.
                  </Typography>
                </div>
              </MenuList>
            </Menu>
          </div>
          {/* navbar 4 */}
          <Typography
            className="font-poppins font-medium text-base text-neutral-medium"
            placeholder={"text"}
          >
            Challange
          </Typography>
        </div>
        {/* section 3 */}
        <div className="flex justify-start gap-2 items-center">
          <Button
            variant="filled"
            className="flex items-center px-5 py-3 bg-brand-blue-3 rounded-full h-fit"
            placeholder={"Button"}
          >
            <Typography
              className="font-poppins font-semibold text-sm text-neutral-medium"
              placeholder={"text"}
            >
              Sign Up
            </Typography>
          </Button>
          <Button
            variant="filled"
            className="flex items-center px-5 py-3 bg-brand-blue-3 rounded-full h-fit"
            placeholder={"Button"}
          >
            <Typography
              className="font-poppins font-semibold text-sm text-neutral-medium"
              placeholder={"text"}
            >
              Sign In
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
