import CustomerTable from "@/components/CustomerTable";
import { customers } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Customer Management</h1>
        <p className="text-dark-muted">Manage your customers and their information</p>
      </div>
      
      <CustomerTable customers={customers} />
    </main>
  );
}
