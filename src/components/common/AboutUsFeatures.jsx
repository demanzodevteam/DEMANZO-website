import { MEDIA_URL } from "../../config/urls";

export default function AboutUsFeatures({ pageData }) {
  return (
   <section>
     <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-2 gap-2 lg:px-14 lg:py-10 bg-no-repeat bg-bottom bg-cover min-h-[80vh] bg-gradient-to-t from-[#fef1ee] "
    >
      <div className="col-span-2 px-4 lg:px-15">
        <p class="demanzo-bold-p leading-9">{pageData?.paragraphs[0]}</p>
      </div>
      <div class=" col-span-2 lg:col-span-1 flex items-center justify-center pt-8 pb-12 lg:pt-0 lg:pb-0 ">
        <img
          src={MEDIA_URL + pageData.images?.[1]?.src}
          alt={pageData.images?.[1]?.alt}
          className="w-[500px] md:mx-auto mx-0 md:transition-transform duration-400 hover:-translate-x-4 rounded-sm"
        />
      </div>

      <div class="flex flex-col justify-center gap-4 py-8 lg:py-10">
        <p class="demanzo-bold-p  !text-[20px] mb-[40px]">
          {pageData?.paragraphs[1]}
        </p>

        <div class="inline-block relative mx-auto lg:mx-0 ">
          <h2 class="demanzo-h1">{pageData.headings[0]}</h2>
        </div>
        <p class="demanzo-bold-p leading-6">{pageData?.paragraphs[2]}</p>
        <p class="demanzo-bold-p leading-6">{pageData?.paragraphs[3]}</p>
      </div>

      <div
        className={`col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-30 my-10`}
      >
        {pageData?.list_items[0]?.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white md:gap-4 shadow-md rounded-xl px-8 py-8 md:py-10  items-center space-y-4 transition"
          >
            <div
              className="w-14 h-14"
              dangerouslySetInnerHTML={{ __html: card.svg }}
            />
            <div className="flex flex-col gap-3">
              <h5
                className="demanzo-h2 leading-8"
                dangerouslySetInnerHTML={{ __html: card.heading }}
              />
              <p
                className="demanzo-bold-p text-center md:text-left "
                dangerouslySetInnerHTML={{ __html: card.para }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
}
