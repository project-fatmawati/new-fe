import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="bg-background rounded-lg shadow-sm p-5 md:w-1/4 lg:w-1/5">
      <div>
        <h2 className="text-2xl font-bold py-5">Search</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow px-4 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-xl font-bold">Categories</h3>
          <div className="flex justify-start gap-3 p-2">
            <MdCheckBoxOutlineBlank />
            <h3 className="">Categories</h3>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
