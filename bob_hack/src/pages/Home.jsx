import React from "react";
import girl from "../assets/girl1.png";
import FAQ from "../components/Faq";
import Chatbot from "../components/Chatbot";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative min-h-screen overflow-auto">
      <div className="h-1 bg-gray-200"></div>
      <div className="h-40 bg-gradient-to-r from-bob-pri to-bob-pri2 flex items-center justify-between relative">
        <h1 className="text-4xl text-white pl-36 leading-extra-loose">
          When you spend differently every month,
          <br /> why save/invest same?
        </h1>
        <img
          src={girl}
          alt="Shocking girl image"
          className="absolute top-12 right-12 h-56 w-auto -mt-12 z-0"
        />
        <div className="absolute top-48 right-20 w-64 h-72 rounded-xl bg-gradient-to-r from-bob-pri to-bob-pri2 mt-4 mr-4  px-6 py-6 text-white leading-extra-loose border border-white box-border">
          <div className="flex flex-col m-2">
            <h3 className="text-white text-2xl font-bold">Contact Us</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                className="p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="rounded-full bg-bob-pri text-white px-4 py-2 text-center my-1 ml-auto text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid sm:grid-cols-2 grid-cols-1 mr-auto py-4 pl-4">
          <div className="flex flex-col m-4 col-start-1 sm:col-end-2 pl-6">
            <div className="text-bob-pri text-3xl font-bold">
              Analyse your Finances
            </div>
            <div className="py-2">
              Personalized financial reports
              <br />
              AI Investment insights according to your weekly or monthly
              expenses
            </div>
            <button
              onClick={() => navigate("/fin-report")}
              className="rounded-full bg-bob-pri text-white px-4 py-2 text-center my-1 ml-auto text-sm"
            >
              Click here
            </button>
          </div>
          <div></div>
          <div></div>
          <div className="flex flex-col m-4 sm:col-start-2 ">
            <div className="text-bob-pri text-3xl font-bold">
              Understand Finance
            </div>
            <div className="py-2">
              Reduce your knowledge gap
              <br />
              Personalized content such as articles, tutorials and interactive
              conte
            </div>
            <button
              onClick={() => navigate("/fin-course")}
              className="rounded-full bg-bob-pri text-white px-4 py-2 text-center my-1 ml-auto text-sm"
            >
              Click here
            </button>
          </div>
          <div className="flex flex-col m-4 sm:col-start-1 sm:col-end-2 pl-6">
            <div className="text-bob-pri text-3xl font-bold">
              Make new Goals
            </div>
            <div className="py-2">
              Let AI help you to complete you goal
              <br />
              Get personalized roadmap to reach to your goal
            </div>
            <button className="rounded-full bg-bob-pri text-white px-4 py-2 text-center my-1 ml-auto text-sm">
              Click here
            </button>
          </div>
        </div>
      </div>
      <FAQ />
      <Chatbot />
    </div>
  );
}

export default Home;
