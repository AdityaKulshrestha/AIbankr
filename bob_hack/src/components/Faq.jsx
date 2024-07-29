import React from "react";

function FAQ() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-bob-pri mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">
              What is the purpose of this service?
            </h3>
            <p className="mt-2">
              Our service helps you manage your finances by providing
              personalized financial reports and AI investment insights based on
              your spending habits.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">
              How can I schedule a call with an agent?
            </h3>
            <p className="mt-2">
              You can schedule a call with our agent by clicking on the
              "Schedule a call" button in your account dashboard.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">
              Can I change my preferences?
            </h3>
            <p className="mt-2">
              Yes, you can change your preferences at any time by going to the
              settings page in your account.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">How can I give feedback?</h3>
            <p className="mt-2">
              We value your feedback! You can provide feedback by clicking on
              the "Give feedback" button in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
