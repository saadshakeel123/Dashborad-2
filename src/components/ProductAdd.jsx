import React from 'react';

import { Link } from 'react-router-dom';

function AddProduct() {
  return (
    <>
      <h1 className="text-4xl font-extrabold ml-6 tracking-tight dark:text-white text-slate-900">Add Products</h1>
      <div className="flex justify-between ml-7 ">
        <p className="mt-2 tracking-tight dark:text-white text-slate-900">Products</p>
        <Link to={"/product/product list"} className="tracking-tight dark:text-white text-slate-900 text-center mr-5  p-2 w-36 rounded-xl bg-black hover:drop-shadow-xl text-white">Veiw Product</Link>
      </div>
      <div className="container mx-auto py-8 ">
        
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-lg shadow-md mx-3 ">
          <div className="text-center mt-2">
            {/* <h2>Form</h2> */}
          </div>
          <div className="px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inputEmail4" className="block mb-1">Product name</label>
                <input type="text" required className="form-control rounded border-2 slug-title w-56" id="inputEmail4" />
              </div>
              <div>
                <label className="block mb-1">Select Categories</label>
                <select name="categories" id="Categories" required className="form-select text-black rounded w-40 border-2">
                  <optgroup label="Fashion">
                    <option value="t-shirt">Shoes</option>
                    <option value="dress">Glasses</option>
                  </optgroup>
                  <optgroup label="Food">
                    <option value="table">Tomato</option>
                    <option value="sofa">Ice cream</option>
                  </optgroup>
                  <optgroup label="Electronic">
                    <option value="phone">Smart watch</option>
                    <option value="laptop">health care</option>
                  </optgroup>
                </select>
              </div>
              <div>
                <label htmlFor="slug" className="block mb-1">Cost Price</label>
                <div className="w-full">
                  <input required id="slug" name="slug" className="form-control rounded border-2 here set-slug" type="number" />
                </div>
              </div>
              <div style={{ marginTop: "5px" }}>
                <label className="block mb-1">Sales Price</label>
                <input required type="number" className="form-control rounded border-2" id="price1" />
              </div>
              <div>
                <label className="block mb-1">Quantity</label>
                <input required type="number" className="form-control rounded border-2 " id="quantity1" />
              </div>
              <div>
                <button className="font-bold mt-6 text-white hover:drop-shadow-xl bg-cyan-400 p-2 rounded-2xl w-28">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;