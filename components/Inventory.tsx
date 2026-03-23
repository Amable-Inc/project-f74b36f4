"use client";

import { useState } from "react";
import { Plus, Search, Package, AlertCircle } from "lucide-react";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const products = [
    { id: 1, name: "Cera para Cabello Premium", category: "Estilizado", stock: 3, price: 350, status: "low" },
    { id: 2, name: "Aceite para Barba", category: "Barba", stock: 5, price: 280, status: "low" },
    { id: 3, name: "Shampoo Anticaspa", category: "Cuidado Capilar", stock: 2, price: 220, status: "low" },
    { id: 4, name: "Gel Fijador Fuerte", category: "Estilizado", stock: 25, price: 180, status: "ok" },
    { id: 5, name: "Cera Mate", category: "Estilizado", stock: 18, price: 320, status: "ok" },
    { id: 6, name: "Pomada Brillante", category: "Estilizado", stock: 22, price: 290, status: "ok" },
    { id: 7, name: "Aceite Pre-Afeitado", category: "Afeitado", stock: 15, price: 250, status: "ok" },
    { id: 8, name: "Bálsamo Post-Afeitado", category: "Afeitado", stock: 30, price: 270, status: "ok" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inventario</h1>
        <p className="text-gray-500 mt-1">Gestiona tus productos y stock</p>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Agregar Producto</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Producto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Categoría</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Precio</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${product.status === "low" ? "text-orange-600" : "text-gray-900"}`}>
                      {product.stock} unidades
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">${product.price}</td>
                  <td className="px-6 py-4">
                    {product.status === "low" ? (
                      <div className="flex items-center gap-2 text-orange-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Stock Bajo</span>
                      </div>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        En Stock
                      </span>
                    )}
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
