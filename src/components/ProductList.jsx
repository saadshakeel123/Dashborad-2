import React from "react";
import { Link } from "react-router-dom";
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

import { productsData, contextMenuItems, productsGrid } from "../data/dummy";
function ProductList() {


    return (

        <>
            <h1 className="text-4xl font-extrabold ml-6 tracking-tight dark:text-white text-slate-900">Products</h1>
            <div className="flex justify-between ml-7">
                <p className="mt-2 tracking-tight dark:text-white text-slate-900">Product List</p>
                <Link to={"/product/add product"} className="tracking-tight dark:text-white text-slate-900 text-center mr-5  p-2 w-36 rounded-xl hover:drop-shadow-xl bg-black text-white">Add Product</Link>
            </div>
            <div className=" flex justify-center">
                <div className=" mt-10 w-[60rem]">
                    <GridComponent
                        id="gridcomp"
                        dataSource={productsData}
                        allowPaging
                        allowSorting
                        allowExcelExport
                        allowPdfExport
                        contextMenuItems={contextMenuItems}
                      
                        editSettings={{ allowDeleting: true, allowEditing: true }}
                    >
                        <ColumnsDirective>
                            {productsGrid.map((item, index) => (
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
    )
}

export default ProductList