import React from "react";

const RightTopNav = () => {
  return (
    <div className="p-5 shadow w-full
    flex items-center justify-between">
      <h1 className="font-bold">My Saved</h1>
      <div className="flex gap-3">
        <button className="text-sm bg-green-200 py-1 px-3 rounded-full">Advert (1)</button>
        <button className="text-sm bg-gray-100 py-1 px-3 rounded-full">Search (0)</button>
      </div>
    </div>
  );
};

export default RightTopNav;
