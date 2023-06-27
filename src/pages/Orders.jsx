import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Link } from "react-router-dom";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
const Orders = () => {
  const { currentMode } = useStateContext();
  return (

    <>
      <h1 className="text-4xl font-extrabold ml-6 tracking-tight dark:text-white text-slate-900">Orders</h1>
      <div className="flex justify-between ml-7">
        <p className="mt-2 tracking-tight dark:text-white text-slate-900">Order History</p>
        <Link to={"/product/product delete"} className="tracking-tight dark:text-white text-slate-900 text-center mr-5  p-2 w-36 rounded-xl bg-black text-white">Add Order</Link>
      </div>
      <div className=" flex justify-center">
        <div className=" mt-10 w-[60rem]">
          <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            
            editSettings={{ allowDeleting: true, allowEditing: true }}
          >
            <ColumnsDirective>
              {ordersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                Page,
                ExcelExport,
                Edit,
                PdfExport,
              ]}
            />
          </GridComponent>
        </div>

      </div >
    </>
  );
};

export default Orders;
