export default function Dashboardcard(props) {
  const {totalCustomers,data}=props
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="relative p-5 overflow-hidden border border-b-3 border-b-primary rounded-xl">
        <div className="flex items-center justify-center mb-5 border rounded-full shadow size-12 bg-blue-100 text-blue-500">
          <i className="fa-solid fa-users"></i>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{totalCustomers}</h1>
          <h3 className="text-sm">No of Customers</h3>
        </div>
      </div>
      <div className="relative p-5 overflow-hidden border border-b-3 border-b-primary rounded-xl">
        <div className="flex items-center justify-center mb-5 border rounded-full shadow size-12 bg-green-100 text-green-500">
          <i className="fa-solid fa-bag-shopping lg:fa-2xl"></i>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{data[0]?.Order_Count}</h1>
          <h3 className="text-sm">Orders Received</h3>
        </div>
      </div>
      <div className="relative p-5 overflow-hidden border border-b-3 border-b-primary rounded-xl">
        <div className="flex items-center justify-center mb-5 border rounded-full shadow size-12 bg-yellow-100 text-yellow-500">
          <i className="fa-solid fa-recycle lg:fa-2xl"></i>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{data[0]?.Order_Processsing}</h1>
          <h3 className="text-sm">Order Processing</h3>
        </div>
      </div>
      <div className="relative p-5 overflow-hidden border border-b-3 border-b-primary rounded-xl">
        <div className="flex items-center justify-center mb-5 border rounded-full shadow size-12 bg-red-100 text-red-500">
          <i className="fa-solid fa-truck-fast lg:fa-2xl"></i>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{data[0]?.Order_Delivered}</h1>
          <h3 className="text-sm">Total Delivery</h3>
        </div>
      </div>
    </div>
  )
}
