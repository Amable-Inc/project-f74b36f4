"use client";

import { useState } from "react";
import { Plus, Search, Calendar, DollarSign } from "lucide-react";

export default function Sales() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const sales = [
    { id: 1, date: "2024-01-15", client: "Carlos Pérez", items: "Corte + Barba", amount: 450, payment: "Efectivo" },
    { id: 2, date: "2024-01-15", client: "María González", items: "Shampoo Premium x2", amount: 560, payment: "Tarjeta" },
    { id: 3, date: "2024-01-15", client: "Juan Rodríguez", items: "Corte Caballero", amount: 350, payment: "Transferencia" },
    { id: 4, date: "2024-01-15", client: "Ana Martínez", items: "Aceite Barba, Cera Premium", amount: 630, payment: "Efectivo" },
    { id: 5, date: "2024-01-14", client: "Pedro López", items: "Corte + Afeitado", amount: 520, payment: "Tarjeta" },
    { id: 6, date: "2024-01-14", client: "Sofía Ramírez", items: "Productos Capilares", amount: 890, payment: "Transferencia" },
    { id: 7, date: "2024-01-14", client: "Diego Torres", items: "Corte + Barba + Productos", amount: 780, payment: "Efectivo" },
  ];

  const filteredSales = sales.filter((sale) =>
    sale.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.items.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSales = filteredSales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ventas</h1>
        <p className="text-gray-500 mt-1">Registra y consulta tus ventas</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-500">Total Ventas</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">${totalSales.toLocaleString()}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-500">Ventas Hoy</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{sales.filter(s => s.date === "2024-01-15").length}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-500">Ticket Promedio</p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">${Math.round(totalSales / filteredSales.length)}</h3>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar ventas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Nueva Venta</span>
        </button>
      </div>

      {/* Sales Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pago</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-600">{new Date(sale.date).toLocaleDateString('es-ES')}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{sale.client}</td>
                  <td className="px-6 py-4 text-gray-600">{sale.items}</td>
                  <td className="px-6 py-4 font-bold text-green-600">${sale.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {sale.payment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
