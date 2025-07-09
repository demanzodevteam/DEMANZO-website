import parse, { domToReact, Element } from "html-react-parser";
import { useEffect } from "react";

export default function WpContentParser({ content }) {
  useEffect(()=>{
    console.log(content);
  })
  return (
    <div className="space-y-6">
      {parse(content, {
        replace: (node) => {
          if (node instanceof Element) {
            const { name, children, attribs } = node;

            switch (name) {
              case "p":
                return (
                  <p className="text-gray-800 leading-relaxed text-base">
                    {domToReact(children)}
                  </p>
                );

              case "strong":
                return (
                  <strong className="text-blue-600 font-semibold">
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
                  <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">
                    {domToReact(children)}
                  </h2>
                );

              case "h3":
                return (
                  <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">
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
  );
}
