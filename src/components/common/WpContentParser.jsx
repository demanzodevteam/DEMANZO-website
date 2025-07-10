import parse, { domToReact, Element } from "html-react-parser";
import { useEffect } from "react";
import { MEDIA_URL } from "../../config/urls";

export default function WpContentParser({ content }) {

  return (
    <>
      {/* <div class="bg-[#e6f8ff] px-[15px] py-[90px] relative">
        <div
          class="relative mx-auto lg:mx-0 text-center flex items-center justify-center"
        >
          <h1 class="text-[45px] md:text-[50px] font-semibold relative z-10">
            {content?.title?.rendered}<br />
          </h1>
        </div>
      </div>

      */}
      <div className="container mx-auto mt-8">

        <div className="mb-10">
          {parse(content, {
            replace: (node) => {
              if (node instanceof Element) {
                const { name, children, attribs } = node;

                switch (name) {
                  case "a":
                    return (
                      <p className="text-blue-800 leading-relaxed text-base">
                        {domToReact(children)}
                      </p>
                    );

                  case "p":
                    return (
                      <p className="text-gray-800 leading-relaxed text-base">
                        {domToReact(children)}
                      </p>
                    );

                  case "strong":
                    return (
                      <strong className="text-gray-800 font-semibold">
                        {domToReact(children)}
                      </strong>
                    );

                  case "img":
                    return (
                      <img
                        src={attribs.src}
                        alt={attribs.alt || ""}
                        className="rounded-lg shadow-md w-full max-w-2xl mx-auto my-6"
                        loading="lazy"
                      />
                    );

                  case "h2":
                    return (
                      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                        {domToReact(children)}
                      </h2>
                    );

                  case "h3":
                    return (
                      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                        {domToReact(children)}
                      </h3>
                    );

                  case "br":
                    return <br />;
                }
              }
            },
          })}
        </div>
      </div>
    </>


  );
}
