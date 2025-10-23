import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const enhancedButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eduhus-secondary/80 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 overflow-hidden group focus-enhanced hover:brightness-[1.05] active:translate-y-[1px]",

  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-eduhus-accent to-eduhus-accent text-white",
          "hover:from-eduhus-accent hover:to-eduhus-accent",
          "active:from-eduhus-accent active:to-eduhus-accent",
          "shadow-lg hover:shadow-xl active:shadow-md",
          "contrast-more:from-eduhus-accent contrast-more:to-eduhus-accent contrast-more:text-white",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]"
        ],
        secondary: [
          "bg-gradient-to-r from-eduhus-accent to-eduhus-accent text-white",
          "hover:from-eduhus-accent hover:to-eduhus-accent",
          "active:from-eduhus-accent active:to-eduhus-accent",
          "shadow-lg hover:shadow-xl active:shadow-md",
          "contrast-more:from-eduhus-accent contrast-more:to-eduhus-accent contrast-more:text-white",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]"
        ],
        outline: [
          "border-2 border-eduhus-secondary text-eduhus-secondary bg-white/90 backdrop-blur-sm",
          "hover:bg-eduhus-bg-light hover:border-eduhus-secondary hover:text-eduhus-secondary",
          "active:bg-eduhus-bg-light",
          "shadow-lg hover:shadow-xl active:shadow-md",
          "contrast-more:border-eduhus-secondary contrast-more:text-eduhus-secondary",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-eduhus-bg-light/40 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]"
        ],
        ghost: [
          "text-eduhus-accent hover:bg-eduhus-bg-light",
          "contrast-more:text-eduhus-secondary",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-eduhus-bg-light/30 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]"
        ],
        destructive: [
          "bg-gradient-to-r from-red-600 to-red-700 text-white",
          "hover:from-red-700 hover:to-red-800",
          "shadow-lg hover:shadow-xl",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-100%] before:transition-transform before:duration-700",
          "hover:before:translate-x-[100%]"
        ]
      },
      size: {
        default: "h-11 px-5 py-3",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg",
        xl: "h-14 rounded-lg px-10 py-4 text-xl",
        icon: "h-12 w-12",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]",
        strong: "hover:shadow-[0_0_30px_rgba(13,148,136,0.4)]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      glow: "subtle"
    },
  }
)

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean
  loading?: boolean
  pulse?: boolean
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, glow, asChild = false, loading = false, pulse = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          enhancedButtonVariants({ variant, size, glow, className }),
          loading && "opacity-70 cursor-not-allowed",
          pulse && "animate-pulse"
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <span className={cn("relative z-10 inline-flex items-center", loading && "opacity-0")}>
          {children}
        </span>
      </Comp>
    )
  }
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, enhancedButtonVariants }
