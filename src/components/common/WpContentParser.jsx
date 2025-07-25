import parse, { domToReact, Element } from "html-react-parser";
import { useState, useEffect } from "react";
import { CURRENT_DOMAIN, BASE_URL, SOURCE_BASE_URL } from "../../config/urls";
import { motion, AnimatePresence } from "framer-motion";
import { ListTree, ChevronDown, ChevronUp } from "lucide-react";

export default function WpContentParser({ content }) {
  // Place this in a useEffect or after page load


  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div class="px-4 py-25` relative">
        {parse(content, {
          replace: (node) => {

            if (node instanceof Element) {

              const { name, attribs, children } = node;

   // Remove span containing the two TOC icons
    if (
      name === "span" &&
      attribs?.class?.includes("ez-toc-icon-toggle-span")
    ) {
      return null;
    }

              const getTextContent = (children) =>
                children
                  ?.map((child) => {
                    if (child.type === "text") return child.data?.trim();
                    if (child instanceof Element) return getTextContent(child.children);
                    return "";
                  })
                  .join("")
                  .trim()
                  .toLowerCase();

              // Remove any element with visible "table of contents" text
              const innerText = getTextContent(children);
              if (innerText.includes("table of contents")) {
                return null;
              }
              

              
              
   
              // Detect the Table of Contents (TOC) <nav> block
              if (name === "nav") {
                // Clean links inside TOC children before passing
                const cleanedChildren = domToReact(children, {
                  replace: (node) => {
                     // --- Remove <div class="widget ez-toc-widget-sticky"> blocks ---
    if (
      name === "div" &&
      attribs?.class?.includes("ez-toc-container") &&
      attribs?.class?.includes("ez-toc-title-container") 
    ) {
      return null;
    }

                    if (node instanceof Element && node.name === "a") {
                      let cleanHref = node.attribs?.href || "#";
                      if (cleanHref.startsWith(SOURCE_BASE_URL)) {
                        cleanHref = cleanHref.replace(SOURCE_BASE_URL, "");
                      }

                      return (
                        <a
                          href={CURRENT_DOMAIN + cleanHref}
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
                  <div className="border border-gray-200 rounded-lg bg-gray-50 p-10 my-6">
                    {domToReact(children, {
                      replace: (node) => {
                        if (node instanceof Element && (node.name === "ul" || node.name === "p" || node.name === "ol")) {
                          return (
                            <div className="pl-6">
                              {domToReact([node])}
                            </div>
                          );
                        }
                      }
                    })}
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
    </section>
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
        aria-label="submit"
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


  const handleClick = (e) => {
    const anchor = e.target.closest("a[href^='#']");
    if (!anchor) return;

    const hash = anchor.getAttribute("href");
    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    // Check if target is inside a collapsible/accordion
    const accordion = target.closest(".accordion-container"); // or whatever class you use

    if (accordion) {
      // Find the toggle button inside the accordion
      const toggleBtn = accordion.querySelector("button");

      // If it's not already open, click to open it
      const isOpen = accordion.classList.contains("open"); // optional if you track state via class
      if (!isOpen && toggleBtn) toggleBtn.click();

      // Wait for the accordion to expand
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        history.pushState(null, "", hash);
      }, 300); // wait for your accordion animation duration
    } else {
      // Not inside accordion, scroll immediately
      setTimeout(() => {
        scrollToCenter(target);
        history.pushState(null, "", hash);
      }, 300); // Adjust delay based on any animation

    }
  };



  return (
    <div className="mb-8 border border-gray-200 rounded-xl shadow-sm bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ListTree className="text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            Table of Contents
          </h2>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="show or hide"
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-[linear-gradient(to_right,_#ff8c00,_#f12500)] hover:bg-[linear-gradient(to_right,_#ff8c00,_#f12500)] rounded-md transition"
        >
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden text-sm text-gray-700 space-y-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function scrollToCenter(el) {
  const rect = el.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const offsetTop = rect.top + scrollTop;

  const elementHeight = rect.height;
  const viewportHeight = window.innerHeight;

  const scrollTo = offsetTop - (viewportHeight / 10) + (elementHeight / 100);

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth"
  });
}
