import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Toggle button (mobile only) */}
      <button
        className="md:hidden bg-blue-600 text-white px-4 py-2 m-2 rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Menu" : "Show Menu"}
      </button>

      <aside
        className={`bg-white border-r border-gray-200 p-4 space-y-3 shadow-md fixed md:static top-16 left-0 h-full md:h-auto z-20 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:block w-64`}
      >
        <h2 className="text-gray-600 font-semibold mb-2">Dashboard Menu</h2>
        <ul className="space-y-2">
          {["Dashboard", "Projects", "Analytics", "Settings"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block p-2 rounded hover:bg-red-100 hover:text-red-600 font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;