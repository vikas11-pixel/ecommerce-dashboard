import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Home, Package, ShoppingCart, Users, Moon, Sun, Menu } from 'lucide-react'

const salesData = [
  { month: 'Jan', sales: 4000 }, { month: 'Feb', sales: 3000 }, { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 }, { month: 'May', sales: 6000 }, { month: 'Jun', sales: 5500 }
]

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6 flex justify-between items-center`}>
        <div className="flex items-center gap-4">
          <Menu className="text-2xl cursor-pointer" />
          <h1 className="text-3xl font-bold text-blue-600">ShopDash</h1>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </header>

      {/* Stats */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Revenue", value: "₹2,45,800", change: "+12.5%" },
          { title: "Total Orders", value: "1,428", change: "+8.2%" },
          { title: "New Customers", value: "285", change: "+23.1%" },
          { title: "Products Sold", value: "892", change: "+15.7%" }
        ].map(stat => (
          <div key={stat.title} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-6`}>
            <p className="text-sm opacity-70">{stat.title}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <p className="text-green-500 text-sm mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-6`}>
          <h3 className="text-xl font-bold mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow p-6`}>
          <h3 className="text-xl font-bold mb-4">Top Products</h3>
          <div className="space-y-4">
            {["Wireless Headphones", "Smart Watch", "Cotton T-Shirt", "Running Shoes"].map((p, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-3">
                <span>{p}</span>
                <span className="text-green-500 font-bold">₹{2999 + i*2000}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
