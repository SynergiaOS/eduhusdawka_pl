"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, ...props }) {
        return (
          <Toast
            key={id}
            id={id}
            title={title}
            description={description}
            variant={props.variant}
            onDismiss={() => {}}
          />
        )
      })}
      <ToastViewport>{null}</ToastViewport>
    </ToastProvider>
  )
}
