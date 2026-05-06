"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/actions/auth";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await loginAdmin(password);

    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Chyba při přihlašování");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-3xl shadow-xl ring-1 ring-gray-900/5">
        <div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 font-heading">
            Administrace
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 font-sans">
            Zadejte heslo pro přístup k formulářům
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Heslo
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-4"
              placeholder="Heslo"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center bg-red-50 py-2 rounded-lg">{error}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-white hover:bg-[#3ddc84] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 transition-all duration-300"
            >
              {isLoading ? "Ověřování..." : "Vstoupit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
