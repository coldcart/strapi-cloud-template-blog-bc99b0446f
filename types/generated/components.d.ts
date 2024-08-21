import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'shared.header', true>;
    images: Attribute.Media;
    CTA: Attribute.Component<'shared.link', true>;
  };
}

export interface SharedFaq extends Schema.Component {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Blocks;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Text Section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    illustration: Attribute.Media;
  };
}

export interface SharedIllustration extends Schema.Component {
  collectionName: 'components_shared_illustrations';
  info: {
    displayName: 'Illustration';
    icon: 'picture';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedPortalIllustrations extends Schema.Component {
  collectionName: 'components_shared_portal_illustrations';
  info: {
    displayName: 'Portal Illustrations';
    icon: 'picture';
  };
  attributes: {
    Header: Attribute.Component<'shared.header'>;
    Screenshots: Attribute.Component<'shared.illustration', true>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTeamMember extends Schema.Component {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    Name: Attribute.String;
    Title: Attribute.String;
    Bio: Attribute.Text;
    Photo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.card': SharedCard;
      'shared.faq': SharedFaq;
      'shared.header': SharedHeader;
      'shared.illustration': SharedIllustration;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.portal-illustrations': SharedPortalIllustrations;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team-member': SharedTeamMember;
    }
  }
}
