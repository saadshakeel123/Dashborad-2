import React from "react";
// import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { pieChartData } from "../data/dummy"
import { Pie as PieChart } from "../components"
import Customers from "./Customers";

import { Stacked, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  // ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex mx-6 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-2 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl  opacity-0.9 rounded-full p-4    hover:drop-shadow-2xl "
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg  font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue Update */}
      <div className="flex flex-wrap text-center justify-center">
        <div className="flex  flex-wrap justify-start ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mt-5 mr-3  rounded-2xl md:w-80">
            <p className={`font-semibold text-xl text-cyan-400 mt-5 ml-5  `}>Revenue Updates</p>
            <div className="mt-10 flex  flex-wrap justify-center">
              <div className="border-r-1 border-color ">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400 ml-3">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$48,475</span>
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="">
                  <div className="">
                    <SparkLine
                      currentColor="{currentColor}"
                      id="line-sparkLine"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      color={currentColor}
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex  flex-wrap " >
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mt-5  rounded-2xl md:w-80">
            <div className="flex justify-center">
              <div className="flex items-center mt-5 gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expenses</span>
                </p>{" "}
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-7 ml-5 mb-2">
              <Stacked width="280px" height="360px" />
            </div>
          </div>
        </div>
        <div className="flex  flex-wrap justify-start ml-3">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mt-5  rounded-2xl md:w-[18rem]">

            <p className="text-center dark:text-cyan-400 text-xl mb-2 mt-5">Project Cost Breakdown</p>
            <div className="mt-5">
              <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Customers/>
      </div>

    </div>
  );
};

export default Ecommerce;
