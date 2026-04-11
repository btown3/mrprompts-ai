export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MrPrompts",
    url: "https://www.mrprompts.ai",
    description:
      "Frameworks, tools, and step-by-step guides for smart professionals who want to build with AI, not just read about it.",
    founder: {
      "@type": "Person",
      name: "Wayne Cederholm",
      url: "https://www.mrprompts.ai/about",
      sameAs: ["https://x.com/MrPrompts", "https://mrprompts.substack.com"],
    },
    sameAs: [
      "https://x.com/MrPrompts",
      "https://mrprompts.substack.com",
      "https://github.com/btown3",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "wayne@mrprompts.ai",
      url: "https://www.mrprompts.ai",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "AI Training",
      "AI Adoption",
      "Knowledge Base Architecture",
      "AI Agents",
      "Change Management with AI",
    ],
    areaServed: "Worldwide",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MrPrompts",
    url: "https://www.mrprompts.ai",
    description:
      "Frameworks, tools, and step-by-step guides for smart professionals who want to build with AI, not just read about it.",
    publisher: {
      "@type": "Organization",
      name: "MrPrompts",
      url: "https://www.mrprompts.ai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wayne Cederholm",
    url: "https://www.mrprompts.ai/about",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "MrPrompts",
      url: "https://www.mrprompts.ai",
    },
    description:
      "AI educator helping non-technical leaders and professionals build with AI through frameworks, tools, and step-by-step guides.",
    sameAs: ["https://x.com/MrPrompts", "https://mrprompts.substack.com", "https://www.linkedin.com/in/waynecederholm/"],
    knowsAbout: [
      "Prompt Engineering",
      "AI Agents",
      "Knowledge Base Architecture",
      "AI Adoption Strategy",
      "Change Management with AI",
      "AI Workflow Design",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({
  name,
  description,
  price,
  duration,
  teaches,
}: {
  name: string;
  description: string;
  price: string;
  duration: string;
  teaches: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "MrPrompts",
      url: "https://www.mrprompts.ai",
    },
    instructor: {
      "@type": "Person",
      name: "Wayne Cederholm",
      url: "https://www.mrprompts.ai/about",
    },
    url: "https://www.mrprompts.ai/workshops",
    courseMode: "online",
    duration,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.mrprompts.ai/workshops",
    },
    teaches,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MrPrompts Enterprise AI Training",
    description:
      "Custom AI training for teams and organizations. Workshops, adoption roadmaps, executive briefings, and guided rollouts.",
    provider: {
      "@type": "Organization",
      name: "MrPrompts",
      url: "https://www.mrprompts.ai",
    },
    url: "https://www.mrprompts.ai/enterprise",
    serviceType: "AI Training and Consulting",
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Business professionals and enterprise teams",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
