import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"

type LinkButtonProps = Omit<
  ComponentProps<typeof Button>,
  "asChild" | "type"
> &
  ComponentProps<"a">

export function LinkButton({
  children,
  className,
  size,
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <Button className={className} size={size} variant={variant} asChild>
      <a {...props}>{children}</a>
    </Button>
  )
}
