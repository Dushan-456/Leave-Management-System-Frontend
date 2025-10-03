import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const sidebarItems = [
   { path: "/", label: "Dashboard", icon: "📊" },
   { path: "/my-leaves", label: "My Leaves", icon: "📋" },
   { path: "/apply-leave", label: "Apply Leave", icon: "📝" },
   { path: "/acting-requests", label: "Acting Requests", icon: "🔄" },
   { path: "/settings", label: "Settings", icon: "⚙️" },
   { path: "/profile", label: "My Profile", icon: "👤" },
];

export default function MainLayout() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const location = useLocation();

   return (
      <div className="min-h-screen bg-gray-50">
         {/* Mobile sidebar backdrop */}
         {sidebarOpen && (
            <div
               className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
               onClick={() => setSidebarOpen(false)}
            />
         )}

         {/* Sidebar */}
         <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
               sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
               <h1 className="text-xl font-bold text-gray-900">LeaveMS</h1>
               <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700">
                  ✕
               </button>
            </div>

            <nav className="mt-6">
               <div className="px-3 space-y-1">
                  {sidebarItems.map((item) => (
                     <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                           location.pathname === item.path
                              ? "bg-blue-100 text-blue-700 border-r-2 border-blue-700"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                        onClick={() => setSidebarOpen(false)}>
                        <span className="mr-3 text-lg">{item.icon}</span>
                        {item.label}
                     </Link>
                  ))}
               </div>
            </nav>
         </div>

         {/* Main content */}
         <div className="lg:pl-64">
            {/* Top bar */}
            <div className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 lg:hidden">
               <button
                  onClick={() => setSidebarOpen(true)}
                  className="text-gray-500 hover:text-gray-700">
                  ☰
               </button>
               <h1 className="text-lg font-semibold text-gray-900">LeaveMS</h1>
               <div className="w-6" /> {/* Spacer for centering */}
            </div>

            {/* Page content */}
            <main className="p-6">
               <Outlet />
            </main>
         </div>
      </div>
   );
}
