"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, ChevronLeft, ChevronRight } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// 50 sample users
const initialUsers: User[] = [
  { id: 1, name: "Govinda Prasad", email: "govinda@example.com", role: "Admin" },
  { id: 2, name: "Sonam Wangchuk", email: "sonam@example.com", role: "User" },
  { id: 3, name: "Pema Choden", email: "pema@example.com", role: "User" },
  { id: 4, name: "Tashi Dorji", email: "tashi@example.com", role: "Manager" },
  { id: 5, name: "Karma Tshering", email: "karma@example.com", role: "User" },
  { id: 6, name: "Dawa Sangay", email: "dawa@example.com", role: "Admin" },
  { id: 7, name: "Choden Wangmo", email: "choden@example.com", role: "User" },
  { id: 8, name: "Thinley Dorji", email: "thinley@example.com", role: "User" },
  { id: 9, name: "Sangay Namgyel", email: "sangay@example.com", role: "Manager" },
  { id: 10, name: "Tshering Lhamo", email: "tshering@example.com", role: "User" },
  { id: 11, name: "Dorji Wangchuk", email: "dorji@example.com", role: "User" },
  { id: 12, name: "Phuntsho Choden", email: "phuntsho@example.com", role: "Admin" },
  { id: 13, name: "Tashi Choden", email: "tashi.choden@example.com", role: "User" },
  { id: 14, name: "Kinzang Wangdi", email: "kinzang@example.com", role: "User" },
  { id: 15, name: "Pema Tshering", email: "pema.tshering@example.com", role: "Manager" },
  { id: 16, name: "Sonam Choden", email: "sonam.choden@example.com", role: "User" },
  { id: 17, name: "Lhamo Dema", email: "lhamo@example.com", role: "User" },
  { id: 18, name: "Tenzin Dorji", email: "tenzin@example.com", role: "Admin" },
  { id: 19, name: "Chhimi Wangmo", email: "chhimi@example.com", role: "User" },
  { id: 20, name: "Phuntsho Dorji", email: "phuntsho.dorji@example.com", role: "User" },
  { id: 21, name: "Karma Choden", email: "karma.choden@example.com", role: "Manager" },
  { id: 22, name: "Tashi Wangchuk", email: "tashi.wangchuk@example.com", role: "User" },
  { id: 23, name: "Sonam Dorji", email: "sonam.dorji@example.com", role: "User" },
  { id: 24, name: "Pema Wangmo", email: "pema.wangmo@example.com", role: "User" },
  { id: 25, name: "Chhimi Dorji", email: "chhimi.dorji@example.com", role: "Admin" },
  { id: 26, name: "Dorji Tshering", email: "dorji.tshering@example.com", role: "User" },
  { id: 27, name: "Tenzin Wangmo", email: "tenzin.wangmo@example.com", role: "User" },
  { id: 28, name: "Karma Dorji", email: "karma.dorji@example.com", role: "Manager" },
  { id: 29, name: "Sonam Tshering", email: "sonam.tshering@example.com", role: "User" },
  { id: 30, name: "Pema Dema", email: "pema.dema@example.com", role: "User" },
  { id: 31, name: "Choden Dorji", email: "choden.dorji@example.com", role: "User" },
  { id: 32, name: "Tashi Tshering", email: "tashi.tshering@example.com", role: "Admin" },
  { id: 33, name: "Dorji Wangmo", email: "dorji.wangmo@example.com", role: "User" },
  { id: 34, name: "Sonam Lhamo", email: "sonam.lhamo@example.com", role: "User" },
  { id: 35, name: "Phuntsho Wangchuk", email: "phuntsho.wangchuk@example.com", role: "Manager" },
  { id: 36, name: "Kinzang Dorji", email: "kinzang.dorji@example.com", role: "User" },
  { id: 37, name: "Pema Chhimi", email: "pema.chhimi@example.com", role: "User" },
  { id: 38, name: "Tashi Dema", email: "tashi.dema@example.com", role: "User" },
  { id: 39, name: "Sonam Wangmo", email: "sonam.wangmo@example.com", role: "Admin" },
  { id: 40, name: "Dorji Choden", email: "dorji.choden@example.com", role: "User" },
  { id: 41, name: "Tenzin Chhimi", email: "tenzin.chhimi@example.com", role: "User" },
  { id: 42, name: "Karma Wangchuk", email: "karma.wangchuk@example.com", role: "Manager" },
  { id: 43, name: "Phuntsho Chhimi", email: "phuntsho.chhimi@example.com", role: "User" },
  { id: 44, name: "Pema Tshering", email: "pema.tshering2@example.com", role: "User" },
  { id: 45, name: "Sonam Dema", email: "sonam.dema@example.com", role: "User" },
  { id: 46, name: "Tashi Wangdi", email: "tashi.wangdi@example.com", role: "Admin" },
  { id: 47, name: "Dorji Tshering", email: "dorji.tshering2@example.com", role: "User" },
  { id: 48, name: "Chhimi Wangchuk", email: "chhimi.wangchuk@example.com", role: "User" },
  { id: 49, name: "Karma Lhamo", email: "karma.lhamo@example.com", role: "Manager" },
  { id: 50, name: "Pema Wangdi", email: "pema.wangdi@example.com", role: "User" },
];

export default function UserCard() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset page on search
          }}
          className="max-w-sm"
        />
        <Button>Add User</Button>
      </div>

      <Table>
        <TableCaption>A list of all users with actions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Edit size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(user.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
