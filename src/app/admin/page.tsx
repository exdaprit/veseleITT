import prisma from "@/lib/prisma";
import { LogoutButton, DeleteButton } from "./components/AdminActions";
import { Inbox } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const contacts = await prisma.contactRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-heading">
            Doručené poptávky
          </h1>
          <p className="mt-2 text-sm text-gray-600 font-sans">
            Seznam všech odeslaných kontaktních formulářů z webu.
          </p>
        </div>
        <LogoutButton />
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl ring-1 ring-gray-200 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
            <Inbox className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Žádné nové poptávky</h3>
          <p className="mt-1 text-sm text-gray-500">
            Zatím tu nic není. Až někdo vyplní formulář, objeví se to tady.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden"
            >
              <div className="px-6 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg uppercase">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 font-heading">
                        {contact.name}
                      </h3>
                      <div className="text-sm text-gray-500 font-sans flex items-center gap-3 mt-1">
                        <span>{new Date(contact.createdAt).toLocaleString("cs-CZ")}</span>
                        {contact.company && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="font-medium text-gray-700">{contact.company}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <DeleteButton id={contact.id} />
                </div>

                <div className="bg-gray-50 rounded-xl p-5 mb-4 text-gray-700 font-sans leading-relaxed whitespace-pre-wrap">
                  {contact.message}
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <span className="text-gray-500">E-mail:</span>
                    <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                      <span className="text-gray-500">Telefon:</span>
                      <a href={`tel:${contact.phone}`} className="font-medium text-primary hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
