# Portfolio

Personal programming portfolio built with bun, Astro, Tailwind v4, and shadcn/ui
primitives.

## Commands

```bash
bun i
bun run dev
bun run check
bun run build
bun run preview
bun run resume:preview
```

## Updating the resume

The resume is served from this site at `/resume.pdf`. To update it, replace
`public/resume.pdf` and then run:

```bash
bun run resume:preview
```

This regenerates `src/assets/images/resume-preview.jpg` from page 1 of the PDF.
(on phones that can't show the PDF inline on `/resume` this picture is shown
instead).

## Environment

The contact form uses Resend through an Astro Action.

```bash
RESEND_API_KEY=...
CONTACT_EMAIL=...
```

`CONTACT_EMAIL` is optional and defaults to the current portfolio inbox.
