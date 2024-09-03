const BASE_URL = 'https://d1n7d4xz7fr8b4.cloudfront.net/';

export const LANGUAGES_LOGOS = {
  java: `${BASE_URL}java.png`,
  go: `${BASE_URL}go.png`,
  javascript: `${BASE_URL}nodejs.png`,
  python: `${BASE_URL}python.png`,
  dotnet: `${BASE_URL}dotnet.png`,
  default: `${BASE_URL}default.png`,
  mysql: `${BASE_URL}mysql.png`,
  unknown: `${BASE_URL}default.svg`, // TODO: good icon
  processing: `${BASE_URL}default.svg`, // TODO: good icon
  'no containers': `${BASE_URL}default.svg`, // TODO: good icon
  'no running pods': `${BASE_URL}default.svg`, // TODO: good icon
  nginx: `${BASE_URL}nginx.svg`, // TODO: good icon
};

export const LANGUAGES_COLORS = {
  java: '#B07219',
  go: '#00ADD8',
  javascript: '#F7DF1E',
  python: '#306998',
  dotnet: '#512BD4',
  mysql: '#00758F',
  unknown: '#8b92a6',
  processing: '#3367d9',
  'no containers': '#111111',
  'no running pods': '#666666',
  nginx: '#009237',
};
