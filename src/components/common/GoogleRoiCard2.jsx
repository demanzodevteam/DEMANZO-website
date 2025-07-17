import React, { useState } from "react";
import { motion } from "framer-motion";

const GoogleRoiCard2 = () => {
  const [adSpend, setAdSpend] = useState("");
  const [totalClicks, setTotalClicks] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const [avgRevenue, setAvgRevenue] = useState("");

  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adSpendNum = parseFloat(adSpend || "0");
    const totalClicksNum = parseInt(totalClicks || "0");
    const conversionRateNum = parseFloat(conversionRate || "0");
    const avgRevenueNum = parseFloat(avgRevenue || "0");

    const conversions = totalClicksNum * (conversionRateNum / 100);
    const totalRevenue = conversions * avgRevenueNum;

    const roi =
      adSpendNum === 0 ? 0 : ((totalRevenue - adSpendNum) / adSpendNum) * 100;

    setResults({
      revenue: totalRevenue.toFixed(2),
      roi: roi.toFixed(2),
    });
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}  className="absolute top-[240px] md:top-[250px] lg:top-[200px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[320px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] bg-white border border-gray-300 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg z-10">
      <div className="w-full flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-2 text-gray-700">
                Total Ad Spend ($)
              </label>
              <input
                type="number"
                value={adSpend}
                onChange={(e) => setAdSpend(e.target.value)}
                placeholder="Enter Ad Spent"
                className="p-3 border border-[#ccc] rounded w-full focus:outline-none focus:border-blue-800"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Total Clicks</label>
              <input
                type="number"
                value={totalClicks}
                onChange={(e) => setTotalClicks(e.target.value)}
                placeholder="Enter Total Clicks"
                className="p-3 border border-[#ccc] rounded w-full focus:outline-none focus:border-blue-800"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-2 text-gray-700">
                Conversion Rate (%)
              </label>
              <input
                type="number"
                value={conversionRate}
                onChange={(e) => setConversionRate(e.target.value)}
                placeholder="Enter Conversion Rate"
                className="p-3 border border-[#ccc] rounded w-full focus:outline-none focus:border-blue-800"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">
                Average Revenue per Conversion ($)
              </label>
              <input
                type="number"
                value={avgRevenue}
                onChange={(e) => setAvgRevenue(e.target.value)}
                placeholder="Enter Revenue per Conversion"
                className="p-3 border border-[#ccc] rounded w-full focus:outline-none focus:border-blue-800"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#28a745] text-white rounded px-6 py-2 mt-4 hover:bg-green-600 transition-all"
          >
            Calculate ROI
          </button>

          {results && (
            <div className="mt-6 text-[18px] font-bold text-[#616670]">
              <p>
                <strong>Total Revenue:</strong> ${results.revenue}
              </p>
              <p>
                <strong>ROI:</strong> {results.roi}%
              </p>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default GoogleRoiCard2;
