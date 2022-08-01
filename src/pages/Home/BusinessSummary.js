import React from "react";

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl rounded-xl mx-auto text-center">
        <h2 className="text-3xl font-bold pb-5 pt-5">Business summary </h2>

        <p className="text-lg pb-3">Whether in need of quality replacement parts for modern branded motorcycles or sourcing for affordable aftermarket parts, CBF has you covered.</p>
        <div className=" grid sm:grid-cols-1 lg:grid-cols-4 gap-5 text-center ml-4 mr-4">
        
        <div className="card p-10 bg-base-200 shadow-xl">
          <div>
           <img src="https://i.ibb.co/mbg2329/imgbin-computer-icons-share-icon-wildomar-icon-country-png.png" alt=""  className="w-20"/>
          </div>
          <div className="stat-value">85+ </div>
          <div className="text-blue-500">Total Countries</div>
        </div>
        <div className="card p-10 bg-base-200 shadow-xl">
          <div>
           <img src="https://i.ibb.co/zsBcbDL/delivery-truck.png" alt=""  className="w-20"/>
          </div>
          <div className="stat-value">4500+ </div>
          <div className="text-blue-500">Complete Delivery</div>
        </div>
  
        <div className="card p-10 bg-base-200 shadow-xl">
        <div>
           <img src="https://i.ibb.co/pP32ZrQ/Nice-Png-customer-icon-png-1395477.png" alt=""  className="w-20"/>
          </div>
          <div className="stat-value">4,200+</div>
          <div className="text-blue-500">Happy clients</div>
        </div>
  
        <div className="card p-10 bg-base-200 shadow-xl">
        <div>
           <img src="https://i.ibb.co/WWjFjm0/pngaaa-com-2269073.png" alt=""  className="w-20"/>
          </div>
          <div className="stat-value">1700+</div>
          <div className="text-blue-500">Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
