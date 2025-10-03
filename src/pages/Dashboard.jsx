export default function Dashboard() {
   return (
      <div className="space-y-6">
         <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">
               Welcome to the Leave Management System.
            </p>
         </div>

         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
               <h2 className="text-sm font-medium text-gray-500">
                  Pending Requests
               </h2>
               <p className="mt-2 text-3xl font-bold">0</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
               <h2 className="text-sm font-medium text-gray-500">
                  Approved Leaves
               </h2>
               <p className="mt-2 text-3xl font-bold">0</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
               <h2 className="text-sm font-medium text-gray-500">
                  Rejected Leaves
               </h2>
               <p className="mt-2 text-3xl font-bold">0</p>
            </div>
         </section>
      </div>
   );
}
