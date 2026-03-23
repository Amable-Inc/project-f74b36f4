"use client";

import { useState } from "react";
import { Plus, Search, UserCog, Mail, Phone, Award } from "lucide-react";

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const employees = [
    { id: 1, name: "Roberto Silva", role: "Barbero Senior", phone: "555-0201", email: "roberto@barberia.com", status: "active", clients: 45 },
    { id: 2, name: "Laura Fernández", role: "Estilista", phone: "555-0202", email: "laura@barberia.com", status: "active", clients: 38 },
    { id: 3, name: "Miguel Ángel", role: "Barbero", phone: "555-0203", email: "miguel@barberia.com", status: "active", clients: 32 },
    { id: 4, name: "Carla Méndez", role: "Colorista", phone: "555-0204", email: "carla@barberia.com", status: "active", clients: 28 },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Empleados</h1>
        <p className="text-gray-500 mt-1">Gestiona tu equipo de trabajo</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Total Empleados</p>
          <h3 className="text-3xl font-bold text-gray-900">{employees.length}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Activos Hoy</p>
          <h3 className="text-3xl font-bold text-green-600">{employees.filter(e => e.status === "active").length}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Clientes Atendidos</p>
          <h3 className="text-3xl font-bold text-blue-600">{employees.reduce((sum, e) => sum + e.clients, 0)}</h3>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Promedio por Empleado</p>
          <h3 className="text-3xl font-bold text-purple-600">{Math.round(employees.reduce((sum, e) => sum + e.clients, 0) / employees.length)}</h3>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar empleados..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Agregar Empleado</span>
        </button>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center">
                <UserCog className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
                <p className="text-sm text-gray-500">{employee.role}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Activo
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{employee.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{employee.email}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">Clientes atendidos</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{employee.clients}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
