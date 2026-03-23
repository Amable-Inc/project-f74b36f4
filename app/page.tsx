"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Inventory from "@/components/Inventory";
import Sales from "@/components/Sales";
import Clients from "@/components/Clients";
import Employees from "@/components/Employees";
import Finances from "@/components/Finances";
import Reports from "@/components/Reports";

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "inventory":
        return <Inventory />;
      case "sales":
        return <Sales />;
      case "clients":
        return <Clients />;
      case "employees":
        return <Employees />;
      case "finances":
        return <Finances />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}
