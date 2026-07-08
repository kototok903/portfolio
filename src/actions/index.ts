import { ActionError, defineAction } from "astro:actions"
import { z } from "astro/zod"
import { Resend } from "resend"

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Must be at least 2 characters." }),
  email: z.string().min(1, { message: "Email is required." }).pipe(z.email("Invalid email.")),
  message: z.string().min(1, { message: "Message is required." }),
  website: z.string().optional(),
})

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const server = {
  sendContact: defineAction({
    accept: "form",
    input: contactSchema,
    handler: async ({ name, email, message, website }) => {
      if (website) {
        return { ok: true }
      }

      if (!import.meta.env.RESEND_API_KEY) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Email service is not configured.",
        })
      }

      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: import.meta.env.CONTACT_EMAIL ?? "kototok903@gmail.com",
        subject: "Contact form submission",
        text: [
          "A contact form submission from Stas' Portfolio website.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Message: ${message}`,
        ].join("\n"),
        html: `
          <h1>Contact form submission</h1>
          <p>From <strong>${escapeHtml(name)}</strong> at ${escapeHtml(email)}</p>
          <h2>Message:</h2>
          <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
        `,
      })

      if (!data || error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message.",
        })
      }

      return { ok: true }
    },
  }),
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
