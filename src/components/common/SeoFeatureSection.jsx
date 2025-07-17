import { MEDIA_URL } from "../../config/urls";

export default function SeoFeatureSection({ pageData }) {

    return (
      <section className=" bg-gradient-to-b to-[#FEF2F2]">
        <div className="demanzo-container-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] px-3.5 gap-2 lg:px-3.5 lg:py-25 min-h-[80vh] mx-auto ">
            <div className="w-full flex items-center justify-center">
              <img
                src={MEDIA_URL + pageData?.images[0]?.src}
                alt={pageData?.images[0]?.alt}
                className="w-auto md:h-[500px]"
              />
            </div>
            <div className="w-full grid grid-cols-1 pt-22.5 lg:pr-10">
              {pageData?.list_items[0]?.map((data, index) => (
                <>
                  <div className="flex flex-row mb-7.5 border-b-2 border-dotted border-[#DCDCDC]">
                    <div
                      className="w-14 h-14 pr-10"
                      dangerouslySetInnerHTML={{ __html: data?.svg }}
                    />
                    <div className="flex flex-col">
                      <h5 className="demanzo-h2 mb-5">{data?.heading}</h5>
                      <p className="demanzo-p">{data?.para}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
