import parse, { domToReact, Element } from "html-react-parser";
import { useState } from "react";
import { MEDIA_URL,SOURCE_BASE_URL } from "../../config/urls";

export default function WpContentParser({ content }) {
  return (
    <div className="container mx-auto mt-8">
      <div className="mb-10">
        {parse(content, {
          replace: (node) => {

            if (node instanceof Element) {

              const { name, attribs, children } = node;


  // Detect the Table of Contents (TOC) <nav> block
if (name === "nav") {
  // Clean links inside TOC children before passing
  const cleanedChildren = domToReact(children, {
    replace: (node) => {
      if (node instanceof Element && node.name === "a") {
        let cleanHref = node.attribs?.href || "#";
        if (cleanHref.startsWith(SOURCE_BASE_URL)) {
          cleanHref = cleanHref.replace(SOURCE_BASE_URL, "/");
        }

        return (
          <a
            href={cleanHref}
            className="text-blue-800 underline hover:text-blue-600 transition-colors duration-200"
          >
            {domToReact(node.children)}
          </a>
        );
      }
    },
  });

  return <TableOfContents>{cleanedChildren}</TableOfContents>;
}


              // Detect the Quick-summary div
              if (
                name === "div" &&
                attribs?.class?.includes("Quick-summary")
              ) {
                return (
                  <div className="border border-gray-200 rounded-lg bg-gray-50 p-5 my-6">
                    {domToReact(children)}
                  </div>
                );
              }
              // const { name, children, attribs } = node;

              // --- Handle Accordion Component ---
              if (attribs?.class?.includes("ea-card")) {
                return <Accordion node={node} />;
              }

              switch (name) {
                case "a":
  let cleanHref = attribs.href || "#";

  // Strip SOURCE_BASE_URL from href if present
  if (cleanHref.startsWith(SOURCE_BASE_URL)) {
    cleanHref = cleanHref.replace(SOURCE_BASE_URL, "/");
  }

  return (
    <a
      href={cleanHref}
      className="text-blue-800 underline hover:text-blue-600 transition-colors duration-200"
    >
      {domToReact(children)}
    </a>
  );

  case "p":
    return (
      <p className="text-gray-800 leading-relaxed text-base mb-5">
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
                      className="rounded-xl shadow-xl w-full max-w-3xl mx-auto my-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
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
  );
}


export function Accordion({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  // const headerNode = node.children.find(
  //   (n) =>
  //     n.name === "h3" &&
  //     n.attribs?.class?.includes("text-xl") &&
  //     n.children.some((c) => c.name === "a")
  // );

  const bodyNode = node.children.find((n) => n.attribs?.class?.includes("spcollapse"));

  // Get the header <a> node and remove <i>
  const headerNode = node.children.find((child) => child.name === "h3");
  const aNode =
    headerNode?.children?.find((el) => el.name === "a") ?? headerNode;

  const headerContent = domToReact(
    aNode.children?.filter((n) => !(n.name === "i"))
  );

  const title = headerNode
    ? domToReact(headerNode.children.filter((c) => c.name === "a"))
    : "Toggle";

  const bodyContent = bodyNode ? domToReact(bodyNode.children) : null;

  return (
    <div className="border border-gray-300 rounded-lg my-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-t-lg flex items-center justify-between"
      >
        <span className="font-semibold text-gray-800">{headerContent}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          {bodyContent}
        </div>
      )}
    </div>
  );
}



export function TableOfContents({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-3 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
      >
        {isOpen ? "Hide Table of Contents" : "Show Table of Contents"}
      </button>

      {isOpen && (
        <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}
