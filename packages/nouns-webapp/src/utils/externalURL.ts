export enum ExternalURL {
  twitter,
  notion,
  discourse,
  nounsCenter,
  discord,
}

export const externalURL = (externalURL: ExternalURL) => {
  switch (externalURL) {
    case ExternalURL.twitter:
      return 'https://twitter.com/nounsbowling';
    case ExternalURL.notion:
      return 'https://nouns.notion.site/Explore-Nouns-a2a9dceeb1d54e10b9cbf3f931c2266f';
    case ExternalURL.discourse:
      return 'https://discourse.nouns.wtf/';
    case ExternalURL.discord:
      return 'https://discord.gg/7BeTSg8D9M';
    case ExternalURL.nounsCenter:
      return 'https://nouns-bowling.notion.site/Nouns-Bowling-bringing-the-Nouns-together-for-a-lively-game-of-bowling-36fa0ca9593848f582d968180d7a0ffe';
  }
};
