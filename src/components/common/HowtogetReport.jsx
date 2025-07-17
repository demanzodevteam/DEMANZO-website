export default function HowtogetReport({ pageData, colVal }) {
    return (
      <section className="demanzo-container-auto">
        <div className="flex flex-col items-center justify-center p-8">
          <p className="demanzo-h1">How to Get Your Free Report?</p>
          <div
            className={`grid grid-cols-1 lg:grid-cols-${colVal[2].value} gap-8 lg:px-30 mt-10`}
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
                <p
                  className="demanzo-bold-p"
                  dangerouslySetInnerHTML={{ __html: card.para }}
                />
              </div>
            ))}
          </div>

          <p className="demanzo-p mt-8 text-center ">
            <span>{pageData?.paragraphs[0]}</span>
            <span>- {pageData?.paragraphs[1]}!</span>
          </p>
        </div>
      </section>
    );
}