"use client";

import { DollarSign, Package, Users, TrendingUp, AlertCircle, Calendar } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Ventas Hoy",
      value: "$2,450",
      change: "+12.5%",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      label: "Clientes Atendidos",
      value: "24",
      change: "+8.3%",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Productos en Stock",
      value: "156",
      change: "-3 alertas",
      icon: Package,
      color: "bg-purple-500",
    },
    {
      label: "Ingresos Mensuales",
      value: "$45,680",
      change: "+18.2%",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  const recentSales = [
    { id: 1, client: "Carlos Pérez", service: "Corte + Barba", amount: "$450", time: "10:30 AM" },
    { id: 2, client: "María González", service: "Shampoo Premium", amount: "$280", time: "11:15 AM" },
    { id: 3, client: "Juan Rodríguez", service: "Corte Caballero", amount: "$350", time: "12:00 PM" },
    { id: 4, client: "Ana Martínez", service: "Producto Capilar", amount: "$890", time: "1:45 PM" },
  ];

  const lowStock = [
    { name: "Cera para Cabello Premium", stock: 3, min: 10 },
    { name: "Aceite para Barba", stock: 5, min: 15 },
    { name: "Shampoo Anticaspa", stock: 2, min: 8 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Resumen general de tu negocio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Ventas Recientes</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{sale.client}</p>
                  <p className="text-sm text-gray-500">{sale.service}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{sale.amount}</p>
                  <p className="text-xs text-gray-500">{sale.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Alertas de Stock</h2>
            <AlertCircle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-4">
            {lowStock.map((item, index) => (
              <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 flex-1">{item.name}</h3>
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">Bajo</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Stock: <span className="font-bold text-orange-600">{item.stock}</span></span>
                  <span>•</span>
                  <span>Mínimo: {item.min}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
