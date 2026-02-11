import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'
import { authMiddleware } from '@/server/functions/auth'

interface MyRouterContext {
  queryClient: QueryClient
}

const scripts: React.DetailedHTMLProps<
  React.ScriptHTMLAttributes<HTMLScriptElement>,
  HTMLScriptElement
>[] = []

if (import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC) {
  scripts.push({
    src: import.meta.env.VITE_INSTRUMENTATION_SCRIPT_SRC,
    type: 'module',
  })
}

const SITE_URL = 'https://www.jibragroup.com'
const SITE_NAME = 'Jibra Group of Companies'
const SITE_DESCRIPTION =
  'Jibra Group is a leading manufacturer of premium tobacco products, global trader of agricultural commodities, metals, spices, and grains, and provider of expert consultancy in tobacco product development, IT, and e-commerce solutions.'

export const Route = createRootRouteWithContext<MyRouterContext>()({
  loader: async () => {
    const { currentUser } = await authMiddleware()
    return { currentUser }
  },
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${SITE_NAME} | Premium Tobacco Manufacturing & Global Commodity Trading` },
      { name: 'description', content: SITE_DESCRIPTION },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: `${SITE_NAME} | Premium Tobacco Manufacturing & Global Commodity Trading` },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:image', content: `${SITE_URL}/og-image.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: 'en_US' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${SITE_NAME} | Premium Tobacco Manufacturing & Global Commodity Trading` },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.jpg` },
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: SITE_NAME },
      { name: 'keywords', content: 'Jibra Group, tobacco manufacturing, cigarette manufacturer, XMAN cigarettes, Robin cigarettes, global trading, commodity trading, agro products, spices trading, grains trading, metals trading, tobacco consultancy, IT consultancy, e-commerce solutions, Uganda, East Africa, Africa' },
      { name: 'theme-color', content: '#1A1A2E' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap' },
    ],
    scripts: [...scripts],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Jibra Group of Companies',
    alternateName: 'Jibra Group',
    url: 'https://www.jibragroup.com',
    logo: 'https://www.jibragroup.com/jibra-logo.png',
    description: SITE_DESCRIPTION,
    foundingDate: '1999',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 500 },
    address: { '@type': 'PostalAddress', addressLocality: 'Kampala', addressCountry: 'UG' },
    contactPoint: { '@type': 'ContactPoint', telephone: '+256-700-000000', contactType: 'customer service', email: 'info@jibragroup.com' },
    sameAs: ['https://www.linkedin.com/company/jibragroup', 'https://www.facebook.com/jibragroup', 'https://twitter.com/jibragroup'],
    areaServed: ['Africa', 'Middle East', 'South Asia', 'Southeast Asia'],
    knowsAbout: ['Tobacco Manufacturing', 'Commodity Trading', 'Agricultural Products', 'Tobacco Consultancy', 'E-Commerce Solutions'],
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
