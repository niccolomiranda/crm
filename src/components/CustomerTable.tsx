import Image from 'next/image';
import { Customer } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CustomerTableProps {
  customers: Customer[];
}

export default function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-card w-full overflow-hidden">
      {/* Table Header */}
      <div className="bg-background-grayBlue grid grid-cols-4 gap-4 py-4 px-6">
        <div className="font-semibold text-dark">Partner Name</div>
        <div className="font-semibold text-dark">Email address</div>
        <div className="font-semibold text-dark">Phone Number</div>
        <div className="font-semibold text-dark">Status</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-background-blue">
        {customers.map((customer, index) => (
          <div 
            key={customer.id}
            className={cn(
              "grid grid-cols-4 gap-4 py-4 px-6",
              index % 2 === 1 ? "bg-background-blueMuted" : "bg-background-lightBlue"
            )}
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                {customer.avatarSrc ? (
                  <Image 
                    src={customer.avatarSrc}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                ) : (
                  <div 
                    className="h-full w-full flex items-center justify-center text-white"
                    style={{ backgroundColor: customer.avatarColor }}
                  >
                    {customer.name.charAt(0)}
                  </div>
                )}
              </div>
              <span className="font-medium text-dark">{customer.name}</span>
            </div>
            <div className="text-dark-muted flex items-center">{customer.email}</div>
            <div className="text-dark-muted flex items-center">{customer.phone}</div>
            <div className="flex items-center">
              <span className="badge badge-active">
                {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 