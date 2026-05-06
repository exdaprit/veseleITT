"use client";

import { logoutAdmin } from "@/app/actions/auth";
import { deleteContactRequest } from "@/app/actions/contact";
import { LogOut, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  return (
    <button
      onClick={() => logoutAdmin()}
      className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      Odhlásit se
    </button>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Opravdu chcete tento kontakt smazat?")) return;
    
    setIsDeleting(true);
    const result = await deleteContactRequest(id);
    
    if (result.success) {
      router.refresh();
    } else {
      alert("Chyba při mazání: " + result.error);
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
      {isDeleting ? "Mažu..." : "Smazat"}
    </button>
  );
}
