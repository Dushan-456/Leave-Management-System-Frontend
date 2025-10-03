export default function Settings() {
   return (
      <div className="space-y-6">
         <div>
            <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
            <p className="mt-1 text-sm text-gray-600">
               Manage your application preferences.
            </p>
         </div>

         <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="space-y-6">
               <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                     Notifications
                  </h3>
                  <div className="space-y-3">
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                           defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-700">
                           Email notifications for leave approvals
                        </span>
                     </label>
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                           defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-700">
                           SMS notifications for urgent requests
                        </span>
                     </label>
                     <label className="flex items-center">
                        <input
                           type="checkbox"
                           className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                           Weekly leave summary reports
                        </span>
                     </label>
                  </div>
               </div>

               <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                     Preferences
                  </h3>
                  <div className="space-y-3">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           Default Leave Type
                        </label>
                        <select className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                           <option>Annual Leave</option>
                           <option>Sick Leave</option>
                           <option>Personal Leave</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Save Settings
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
