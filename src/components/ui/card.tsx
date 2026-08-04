import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        accent: "border-border shadow-none",
        terminal: "gap-0 overflow-hidden border-border py-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Card({
  children,
  className,
  variant = "default",
  cornerAccent = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    cornerAccent?: boolean;
  }) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(
        cardVariants({ variant }),
        cornerAccent && "group/card relative",
        className,
      )}
      {...props}
    >
      {children}
      {cornerAccent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-focus-within/card:opacity-100 group-hover/card:opacity-100 motion-reduce:transition-none"
        >
          <span className="absolute top-0 left-0 size-4 rounded-tl-xl border-t-2 border-l-2 border-primary" />
          <span className="absolute top-0 right-0 size-4 rounded-tr-xl border-t-2 border-r-2 border-primary" />
          <span className="absolute bottom-0 left-0 size-4 rounded-bl-xl border-b-2 border-l-2 border-primary" />
          <span className="absolute right-0 bottom-0 size-4 rounded-br-xl border-r-2 border-b-2 border-primary" />
        </div>
      )}
    </div>
  );
}

function CardBar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-bar"
      className={cn(
        "flex items-center justify-between border-b bg-card-bar px-3.5 py-2 font-mono text-[11px] text-faint",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  cardVariants,
  CardBar,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
