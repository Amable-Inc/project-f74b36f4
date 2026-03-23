"use client";

import { useState } from "react";
import { Plus, Search, User, Phone, Mail } from "lucide-react";

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const clients = [
    { id: 1, name: "Carlos Pérez", phone: "555-0101", email: "carlos@email.com", visits: 15, lastVisit: "2024-01-15" },
    { id: 2, name: "María González", phone: "555-0102", email: "maria@email.com", visits: 8, lastVisit: "2024-01-15" },
    { id: 3, name: "Juan Rodríguez", phone: "555-0103", email: "juan@email.com", visits: 22, lastVisit: "2024-01-15" },
    { id: 4, name: "Ana Martínez", phone: "555-0104", email: "ana@email.com", visits: 5, lastVisit: "2024-01-15" },
    { id: 5, name: "Pedro López", phone: "555-0105", email: "pedro@email.com", visits: 12, lastVisit: "2024-01-14" },
    { id: 6, name: "Sofía Ramírez", phone: "555-0106", email: "sofia@email.com", visits: 18, lastVisit: "2024-01-14" },
    { id: 7, name: "Diego Torres", phone: "555-0107", email: "diego@email.com", visits: 9, lastVisit: "2024-01-14" },
  ];

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
        <p className="text-gray-500 mt-1">Gestiona tu base de clientes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Total Clientes</p>
          <h3 className="text-3xl font-bold text-gray-900">{clients.length}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Clientes Activos</p>
          <h3 className="text-3xl font-bold text-green-600">{clients.filter(c => c.lastVisit === "2024-01-15").length}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Visitas Promedio</p>
          <h3 className="text-3xl font-bold text-blue-600">{Math.round(clients.reduce((sum, c) => sum + c.visits, 0) / clients.length)}</h3>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Agregar Cliente</span>
        </button>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.visits} visitas</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{client.email}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Última visita: <span className="font-medium text-gray-900">{new Date(client.lastVisit).toLocaleDateString('es-ES')}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
