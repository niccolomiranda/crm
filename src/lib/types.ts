export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  avatarColor: string;
  avatarSrc?: string;
}

export type NavItem = {
  title: string;
  href: string;
  isActive?: boolean;
}; 