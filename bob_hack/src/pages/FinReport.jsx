import React, { useState } from "react";
import CurvedGraph from "../components/CurveGraph";
import Dropdown from "../components/Dropdown";

function FinReport() {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecommendation = async () => {
    setLoading(true);
    try {
      const response = await fetch("api-endpoint"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setRecommendation(data.recommendation);
      console.log(data.recommendation);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation(`Error fetching recommendation: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-bob-pri text-3xl font-bold mx-auto text-center m-6">
        Your Personalized Financial Report
      </div>
      <div className="flex justify-between m-6">
        <CurvedGraph />
        <div className="flex-col w-1/3 mr-10">
          <div className="p-2 font-semibold text-lg w-full">
            <Dropdown />
          </div>
          <div class="bg-white rounded-lg shadow p-4 border-2 border-bob-pri mr-6">
            <div class="mb-4">
              <h2 class="text-base font-semibold mb-2">Expenses This Month</h2>
              <div className="flex justify-between">
                <div className="text-green-600">Total save:</div>
                <div>₹11500</div>
              </div>
              <div className="flex justify-between">
                <div className="text-red-600">Total spent:</div>
                <div>₹25000</div>
              </div>
            </div>
            <div>
              <h2 class="text-base font-semibold">Major Expenses This Month</h2>
              <div className="text-sm mb-2">
                <p>₹8500 Transferred to AC XXXX XXXX XX09</p>
                <p>₹12000 Transferred to AC XXXX XXXX XX08</p>
              </div>
            </div>
            <div class="mb-4">
              <h2 class="text-base font-semibold mb-2">Expenses Last Month</h2>
              <div className="flex justify-between">
                <div className="text-green-600">Total save:</div>
                <div>₹10000</div>
              </div>
              <div className="flex justify-between">
                <div className="text-red-600">Total spent:</div>
                <div>₹26500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold mx-auto text-center m-8">
        AI Investment insights according <br />
        to your weekly or monthly expenses
      </div>
      <div className="flex justify-between m-6">
        <div className="p-8 w-2/5">
          AI can provide valuable investment insights by analyzing your weekly
          or monthly expenses. By tracking your spending habits, AI can identify
          patterns and suggest areas where a can save money. It can also
          recommend investment opportunities tailored to your financial
          situation. For instance, if you consistently have surplus funds, AI
          might suggest investing in stocks, mutual funds, or other assets.
          Additionally, AI can help you set realistic financial goals and create
          a budget that aligns with your investment strategy, ensuring you make
          informed decisions to grow your wealth efficiently.
        </div>
        <div className="p-8 w-3/5">
          <span className="font-bold">Example: </span>
          <br />
          <span className="font-bold">Savings: </span> You are saving 20% of
          your income, which is a good practice. Consider increasing this to 25%
          for better financial security.
          <br />
          <span className="font-bold">Increase Investments:</span> Allocate an
          additional ₹2,000 from your entertainment budget to investments.{" "}
          <br />
          Emergency Fund: Ensure you have an emergency fund that covers at least
          3-6 months of expenses.
          <br />
          <span className="font-bold">Review Subscriptions:</span> Check for any
          unused subscriptions in the miscellaneous category and cancel them to
          save more. <br />
          <span className="font-bold">Entertainment: </span>Spending 8% on
          entertainment is reasonable, but you could reduce this to increase
          savings or investments.
        </div>
      </div>
      <button
        onClick={fetchRecommendation}
        className="flex bg-bob-pri text-white py-2 px-4 mx-auto mb-8"
      >
        {loading ? "Loading..." : "Analyse your Finances using AI"}
      </button>
      {recommendation && (
        <div className="m-6 p-4 bg-gray-200 shadow-md rounded-lg">
          <p className="text-lg font-semibold">{recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default FinReport;
