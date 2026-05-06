"use server";

import prisma from "@/lib/prisma";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string | null;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string | null;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "Chybí povinná pole." };
    }

    await prisma.contactRequest.create({
      data: {
        name,
        company,
        email,
        phone,
        message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving contact request:", error);
    return { success: false, error: "Nastala chyba při odesílání formuláře." };
  }
}

export async function deleteContactRequest(id: string) {
  try {
    await prisma.contactRequest.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact request:", error);
    return { success: false, error: "Nepodařilo se smazat kontakt." };
  }
}
