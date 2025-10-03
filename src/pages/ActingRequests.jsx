export default function ActingRequests() {
   return (
      <div className="space-y-6">
         <div>
            <h1 className="text-2xl font-semibold tracking-tight">
               Acting Requests
            </h1>
            <p className="mt-1 text-sm text-gray-600">
               Manage acting position requests and approvals.
            </p>
         </div>

         <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center py-12">
               <div className="text-4xl mb-4">🔄</div>
               <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No acting requests
               </h3>
               <p className="text-gray-500">
                  You don't have any acting position requests at the moment.
               </p>
            </div>
         </div>
      </div>
   );
}
