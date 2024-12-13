import Image from "next/image";

import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I have created some mockups that showcase my graphics design
              creativity.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 cursor-pointer">
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assests/myproject/ROOHEEN STANDEE 03072890072.jpg"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Standee
                  </h2>

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    veiw project
                  </h1>

                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assests/myproject/billboard.jpg"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Billboard
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    veiw project
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assests/myproject/brucher.jpg"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Brucher
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    veiw project
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={"/assests/myproject/flyer.jpg"}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-700 mb-1">
                    Flyer
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    veiw project
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
