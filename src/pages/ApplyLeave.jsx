export default function ApplyLeave() {
   return (
      <div className="space-y-6">
         <div>
            <h1 className="text-2xl font-semibold tracking-tight">
               Apply Leave
            </h1>
            <p className="mt-1 text-sm text-gray-600">
               Submit a new leave request.
            </p>
         </div>

         <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form className="space-y-6">
               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Leave Type
                     </label>
                     <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Annual Leave</option>
                        <option>Sick Leave</option>
                        <option>Personal Leave</option>
                        <option>Emergency Leave</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date
                     </label>
                     <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                     Reason
                  </label>
                  <textarea
                     rows={4}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="Please provide a reason for your leave request..."
                  />
               </div>

               <div className="flex justify-end">
                  <button
                     type="submit"
                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Submit Request
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
