import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
const Employees = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold ml-6 tracking-tight dark:text-white text-slate-900">Users</h1>
      <div className="flex justify-between ml-7">
        <p className="mt-2 tracking-tight dark:text-white text-slate-900">Users List</p>
      </div>
      <div className=" flex justify-center">
        <div className=" mt-10 w-[60rem]">
          <GridComponent
            dataSource={employeesData}
            allowPaging
            allowSorting
            toolbar={["Search"]}
            width="auto"
          >
            <ColumnsDirective>
              {employeesGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Toolbar, Sort]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Employees;
