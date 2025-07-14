import CaptchaImg from '../../assets/Captcha.png';
import BackGroundImg from '../../assets/Background-SEO-Traffic.jpg';
import rocketImg from '../../assets/rocket.png';
import skyImg from '../../assets/sky2.png'

const SalesContactSection = ({ SectionData }) => {

  return (
    <div
      className="flex items-center justify-center lg:px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGroundImg.src})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full overflow-hidden p-8 lg:p-14">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center text-center gap-6 px-4">
          <img
            src={rocketImg.src}
            alt="Rocket"
            className="hover:-translate-y-4 transition-all duration-500"
          />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#ffffff]">
            {SectionData?.headings}
          </h2>

          {SectionData?.list_items[0].map((item, index) => (
            <p key={index} className="text-[#979ba3] leading-8">
              {item.para}
            </p>
          ))}

          <img
            src={skyImg.src}
            alt="Sky"
            className="hover:-translate-y-4 transition-all duration-500 mt-6"
          />
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-10">
          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
              />
            </div>

            {/* Number & Website */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="Your Number"
                required
                className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
              />
              <input
                type="url"
                placeholder="Your Website"
                required
                className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
              />
            </div>

            {/* Dropdown */}
            <div>
              <label
                htmlFor="messageType"
                className="block mb-1 text-[#050607] text-[16px]"
              >
                Reason To Contact
              </label>
              <select
                id="messageType"
                defaultValue=""
                className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
              >
                <option value="" disabled>
                  I'm interested in
                </option>
                <option value="inquiry">Digital Marketing</option>
                <option value="support">Social Media Management</option>
                <option value="feedback">Website Development</option>
                <option value="design">Graphic Design</option>
                <option value="white-label">
                  White Label Digital Marketing
                </option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607] resize-none"
            ></textarea>

            {/* Extra Text Input */}
            <input
              type="text"
              placeholder="Anything else?"
              className="w-full border border-[#e7e7e7] hover:border-black focus:border-black focus:outline-none px-4 py-3 text-[16px] text-[#050607]"
            />

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="w-full lg:w-auto text-white bg-[#0A6AAD] px-6 py-3 rounded-full hover:bg-[#f5a31c] transition"
              >
                Request a demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesContactSection;
