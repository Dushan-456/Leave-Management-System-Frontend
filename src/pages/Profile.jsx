export default function Profile() {
   return (
      <div className="space-y-6">
         <div>
            <h1 className="text-2xl font-semibold tracking-tight">
               My Profile
            </h1>
            <p className="mt-1 text-sm text-gray-600">
               Manage your personal information and account settings.
            </p>
         </div>

         <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="space-y-6">
               <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                     <span className="text-2xl">👤</span>
                  </div>
                  <div>
                     <h3 className="text-lg font-medium text-gray-900">
                        John Doe
                     </h3>
                     <p className="text-sm text-gray-500">
                        john.doe@company.com
                     </p>
                     <p className="text-sm text-gray-500">
                        Employee ID: EMP001
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                     </label>
                     <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                     </label>
                     <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                     </label>
                     <input
                        type="email"
                        defaultValue="john.doe@company.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                     </label>
                     <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                     </label>
                     <input
                        type="text"
                        defaultValue="Engineering"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position
                     </label>
                     <input
                        type="text"
                        defaultValue="Senior Developer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
               </div>

               <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                     Save Changes
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
