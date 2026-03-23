"use client";

import { BarChart3, TrendingUp, Users, Package, DollarSign, Calendar } from "lucide-react";

export default function Reports() {
  const monthlyData = [
    { month: "Ene", sales: 45680, clients: 156, products: 89 },
    { month: "Feb", sales: 52340, clients: 178, products: 102 },
    { month: "Mar", sales: 48920, clients: 165, products: 95 },
    { month: "Abr", sales: 56780, clients: 192, products: 115 },
  ];

  const topProducts = [
    { name: "Cera Premium", sales: 145, revenue: 50750 },
    { name: "Aceite para Barba", sales: 128, revenue: 35840 },
    { name: "Gel Fijador", sales: 112, revenue: 20160 },
    { name: "Shampoo Anticaspa", sales: 98, revenue: 21560 },
  ];

  const topClients = [
    { name: "Carlos Pérez", visits: 15, spent: 6750 },
    { name: "Juan Rodríguez", visits: 22, spent: 9680 },
    { name: "Sofía Ramírez", visits: 18, spent: 8100 },
    { name: "Pedro López", visits: 12, spent: 5400 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reportes</h1>
        <p className="text-gray-500 mt-1">Análisis y estadísticas de tu negocio</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Venta Promedio</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">$485</h3>
          <p className="text-sm text-green-600 mt-1">+12% vs mes anterior</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-500">Crecimiento</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">+24%</h3>
          <p className="text-sm text-green-600 mt-1">Último trimestre</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-500">Retención</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">78%</h3>
          <p className="text-sm text-green-600 mt-1">Clientes recurrentes</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-gray-500">Productos Vendidos</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">483</h3>
          <p className="text-sm text-green-600 mt-1">Este mes</p>
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Rendimiento Mensual</h2>
          <Calendar className="w-5 h-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mes</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ventas</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Clientes</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Productos</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Promedio/Cliente</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {monthlyData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{data.month}</td>
                  <td className="px-6 py-4 text-gray-600">${data.sales.toLocaleString()}</td>
                  <td className="px-6 py-4 text-gray-600">{data.clients}</td>
                  <td className="px-6 py-4 text-gray-600">{data.products}</td>
                  <td className="px-6 py-4 font-bold text-blue-600">${Math.round(data.sales / data.clients)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Productos Más Vendidos</h2>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} unidades vendidas</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${product.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Clients */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-bold text-gray-900">Mejores Clientes</h2>
          </div>
          <div className="space-y-4">
            {topClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.visits} visitas</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${client.spent.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
