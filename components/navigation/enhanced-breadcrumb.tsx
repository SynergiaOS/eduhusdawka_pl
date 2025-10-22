import * as React from "react"
import Link from "next/link"
import Script from "next/script"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface EnhancedBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
  separator?: React.ReactNode
}

const EnhancedBreadcrumb = React.forwardRef<HTMLElement, EnhancedBreadcrumbProps>(
  ({ items, className, showHome = true, separator, ...props }, ref) => {
    const allItems = showHome
      ? [{ label: "Strona główna", href: "/", icon: <Home className="h-4 w-4" /> }, ...items]
      : items

    // Generate breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": allItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `https://eduhustawka.pl${item.href}` : undefined
      }))
    }

    return (
      <>
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <nav
          ref={ref}
          aria-label="Breadcrumb"
          className={cn("flex items-center space-x-2 text-sm text-gray-600 mb-6", className)}
          {...props}
      >
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  {separator || <ChevronRight className="h-4 w-4" />}
                </span>
              )}
              
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 hover:text-eduhus-accent transition-colors duration-200",
                    "focus-enhanced rounded px-1 py-0.5",
                    index === 0 && "text-eduhus-accent"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="flex items-center gap-1 text-gray-800 font-medium"
                  aria-current="page"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      </>
    )
  }
)
EnhancedBreadcrumb.displayName = "EnhancedBreadcrumb"

// Utility function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  // Map of paths to readable labels
  const pathLabels: Record<string, string> = {
    'uslugi': 'Usługi',

    'terapia-reki': 'Terapia ręki',
    'terapia-pedagogiczna': 'Terapia pedagogiczna',
    'trening-umiejetnosci-spolecznych': 'Trening Umiejętności Społecznych',
    'trening-sluchowy-johansena': 'IAS Johansena',
    'trening-neuroflow': 'NEUROFLOW',
    'wczesna-nauka-czytania': 'Wczesna nauka czytania',
    'kontakt': 'Kontakt',
    'o-mnie': 'O mnie',
    'blog': 'Blog',
    'polityka-prywatnosci': 'Polityka prywatności',
    'polityka-cookies': 'Polityka cookies',
    'mapa-strony': 'Mapa strony'
  }

  let currentPath = ''
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const label = pathLabels[segment] || segment.replace(/-/g, ' ')
    
    // Don't add href for the last item (current page)
    const isLast = index === segments.length - 1
    
    breadcrumbs.push({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      href: isLast ? undefined : currentPath
    })
  })

  return breadcrumbs
}

export { EnhancedBreadcrumb }
