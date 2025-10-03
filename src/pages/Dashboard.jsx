export default function Dashboard() {
   return (
      <div className="dashboard">
         <h1>Dashboard</h1>
         <p>Welcome to the Leave Management System.</p>
         <div className="dashboard-grid">
            <div className="tile">
               <h2>Pending Requests</h2>
               <p>0</p>
            </div>
            <div className="tile">
               <h2>Approved Leaves</h2>
               <p>0</p>
            </div>
            <div className="tile">
               <h2>Rejected Leaves</h2>
               <p>0</p>
            </div>
         </div>
      </div>
   );
}
