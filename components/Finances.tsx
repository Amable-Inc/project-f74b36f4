"use client";

import { useState } from "react";
import { Plus, TrendingUp, TrendingDown, Wallet, DollarSign } from "lucide-react";

export default function Finances() {
  const [activeTab, setActiveTab] = useState<"overview" | "income" | "expenses">("overview");
  
  const income = [
    { id: 1, date: "2024-01-15", concept: "Ventas del día", amount: 2450, category: "Servicios" },
    { id: 2, date: "2024-01-15", concept: "Productos vendidos", amount: 1890, category: "Productos" },
    { id: 3, date: "2024-01-14", concept: "Ventas del día", amount: 2180, category: "Servicios" },
    { id: 4, date: "2024-01-14", concept: "Productos vendidos", amount: 1560, category: "Productos" },
  ];

  const expenses = [
    { id: 1, date: "2024-01-15", concept: "Compra de productos", amount: 850, category: "Inventario" },
    { id: 2, date: "2024-01-15", concept: "Servicios públicos", amount: 320, category: "Servicios" },
    { id: 3, date: "2024-01-13", concept: "Salarios", amount: 4500, category: "Nómina" },
    { id: 4, date: "2024-01-12", concept: "Alquiler", amount: 2500, category: "Local" },
  ];

  const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Finanzas</h1>
        <p className="text-gray-500 mt-1">Control de gastos e ingresos</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6" />
            <p className="text-sm opacity-90">Ingresos Totales</p>
          </div>
          <h3 className="text-3xl font-bold">${totalIncome.toLocaleString()}</h3>
        </div>
        
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-6 h-6" />
            <p className="text-sm opacity-90">Gastos Totales</p>
          </div>
          <h3 className="text-3xl font-bold">${totalExpenses.toLocaleString()}</h3>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="w-6 h-6" />
            <p className="text-sm opacity-90">Balance</p>
          </div>
          <h3 className="text-3xl font-bold">${balance.toLocaleString()}</h3>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "overview"
              ? "bg-slate-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          Resumen
        </button>
        <button
          onClick={() => setActiveTab("income")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "income"
              ? "bg-slate-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          Ingresos
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === "expenses"
              ? "bg-slate-800 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          Gastos
        </button>
      </div>

      {/* Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Income */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Ingresos Recientes</h2>
            <div className="space-y-3">
              {income.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.concept}</p>
                    <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('es-ES')}</p>
                  </div>
                  <span className="font-bold text-green-600">+${item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Expenses */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Gastos Recientes</h2>
            <div className="space-y-3">
              {expenses.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.concept}</p>
                    <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('es-ES')}</p>
                  </div>
                  <span className="font-bold text-red-600">-${item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "income" && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Todos los Ingresos</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Agregar Ingreso</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fecha</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Concepto</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Categoría</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {income.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">{new Date(item.date).toLocaleDateString('es-ES')}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.concept}</td>
                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 font-bold text-green-600">+${item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "expenses" && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Todos los Gastos</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Agregar Gasto</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fecha</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Concepto</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Categoría</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expenses.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">{new Date(item.date).toLocaleDateString('es-ES')}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.concept}</td>
                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 font-bold text-red-600">-${item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
