import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogImage?: string;
  faqs?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
  articleSchema?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
  };
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage = "https://res.cloudinary.com/dadfpmrat/image/upload/v1766126485/Artboard_10_maqdxl.png",
  faqs,
  breadcrumbs,
  articleSchema,
}: SEOHeadProps) => {
  const baseUrl = "https://dhanacharya.com";
  const fullUrl = `${baseUrl}${canonicalUrl}`;

  // FAQ Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  } : null;

  // Article Schema for SEO pages
  const articleSchemaData = articleSchema ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleSchema.headline,
    "datePublished": articleSchema.datePublished,
    "dateModified": articleSchema.dateModified,
    "author": {
      "@type": "Organization",
      "name": articleSchema.author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dhanacharya Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": ogImage
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  } : null;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Dhanacharya Advisors",
    "description": "Pre-IPO & Unlisted Shares Investment Advisory in India",
    "url": baseUrl,
    "logo": ogImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D-127, Second Floor, Sector 10",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "telephone": "+91-8285363331",
    "email": "contact@dhanacharya.com",
    "sameAs": [
      "https://www.facebook.com/share/1BqoZe2h8g/",
      "https://x.com/dhanacharyallp",
      "https://www.linkedin.com/company/dhanacharya-advisors-llp/",
      "https://www.instagram.com/dhanacharya_advisors"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dhanacharya Advisors" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Dhanacharya Advisors" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {articleSchemaData && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
