export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    products: string;
    about: string;
    services: string;
    technology: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    switchTheme: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    exploreProducts: string;
    contactUs: string;
    floatingCards: {
      ai: string;
      automation: string;
      cloud: string;
    };
    stats: {
      ai: string;
      cloud: string;
      automation: string;
      workflow: string;
    };
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonDesc: string;
    learnMore: string;
    visit: string;
    items: {
      paperflow: {
        title: string;
        tagline: string;
        description: string;
        features: string[];
      };
      eventflow: {
        title: string;
        tagline: string;
        description: string;
        features: string[];
      };
      feedflow: {
        title: string;
        tagline: string;
        description: string;
        features: string[];
      };
    };
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      customSoftware: { title: string; description: string };
      artificialIntelligence: { title: string; description: string };
      businessAutomation: { title: string; description: string };
      cloudSolutions: { title: string; description: string };
      apiIntegrations: { title: string; description: string };
      enterpriseSystems: { title: string; description: string };
      digitalTransformation: { title: string; description: string };
      workflowAutomation: { title: string; description: string };
    };
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      ai: { title: string; description: string };
      openai: { title: string; description: string };
      cloud: { title: string; description: string };
      automation: { title: string; description: string };
      apis: { title: string; description: string };
      security: { title: string; description: string };
      scalable: { title: string; description: string };
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    companyLabel: string;
    registeredOffice: string;
    stats: {
      products: { value: string; label: string };
      focus: { value: string; label: string };
      markets: { value: string; label: string };
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    managingDirector: string;
    address: string;
    phone: string;
    email: string;
    companyName: string;
    registeredOffice: string;
    sendMessage: string;
    getInTouch: string;
    mapLabel: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    products: string;
    services: string;
    languages: string;
    contact: string;
    rights: string;
  };
};
