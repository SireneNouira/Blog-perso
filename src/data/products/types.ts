export interface ProductSpec {
  label: string;
  value: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  originalPrice?: string;
  affiliateLink: string;
  images: {
    main: string;
    gallery: string[];
  };
  rating: number;
  pros: string[];
  cons: string[];
  specs: ProductSpec[];
  dates: {
    publish: string;
    update: string;
    readTime: string;
  };
  affiliateBox: {
    title: string;
    badge?: string;
    features: string[];
  };
  heroFacts: Array<{
    icon: string;
    label: string;
    value: string;
  }>;
  highlight: string;
  content: {
    intro: string[];
    featureCards: FeatureCard[];
    ctaMid: {
      title: string;
      text: string;
      buttonText: string;
    };
    performance: {
      aspiration: string[];
      autonomyIntro: string;
      autonomyRanges: Array<{ label: string; value: string }>;
      autonomyConclusion: string;
      hair: string[];
      noise: string[];
    };
    station: {
      paragraphs: string[];
      steps: string[];
      benefits: string[];
      note: string;
    };
    reviews: {
      stats: StatItem[];
      positives: string[];
      negatives: string[];
      conclusion: string;
    };
    targetAudience: {
      recommended: string[];
      notRecommended: string[];
    };
    galleryNote: string;
    ctaPreFaq: {
      title: string;
      text: string;
      buttonText: string;
      subtext: string;
    };
    faq: FaqItem[];
    verdict: {
      paragraphs: string[];
      recommendation: string;
    };
    ctaFinal: {
      title: string;
      text: string;
      subtext: string[];
      buttonText: string;
    };
  };
  legalNotice: {
    transparency: string;
    update: string;
  };
}
