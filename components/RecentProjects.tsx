"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data"; // projects'ı içeren dosya
import { PinContainer } from "./ui/Pin";
import Image from "next/image"; // next/image'ı içe aktar

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-6 mt-10">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={`${item.id}-${index}`} // Benzersiz key için id ve indeksi birleştirdik
          >
            <PinContainer
              title="fiartaks"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="Background image"
                    className="object-cover"
                    fill // Kapsayıcıya göre ölçeklenir
                  />
                </div>
                <Image
                  src={item.img}
                  alt={item.title || "Project cover"}
                  className="z-10 absolute bottom-0 object-contain"
                  fill // Kapsayıcıya göre ölçeklenir
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, iconIndex) => (
                    <div
                      key={iconIndex} // İkonlar için indeks kullanılabilir
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * iconIndex + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`Tech icon ${iconIndex + 1}`}
                        className="p-2 object-contain"
                        width={244} // Sabit boyut (lg:w-10 için uygun)
                        height={244} // Sabit boyut (lg:h-10 için uygun)
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                  >
                    Check Live Site
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
