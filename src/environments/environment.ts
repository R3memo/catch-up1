//https://newsapi.org/v2/top-headlines/sources?apiKey=120ec880748949cfbded458e4f37899d
export const environment = {
  production: true,
  /** API for the news provider */
  newsProviderApiBaseUrl: 'https://newsapi.org/v2/',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProvidedSourcesEndpointPath: '/sources',
  newsProviderApiKey: '120ec880748949cfbded458e4f37899d',

  /** API for the logo provider */
  logoProviderApiBaseUrl: 'https://img.logo.dev/',
  logoProviderPublishableKey: 'pk_D3myozbFTgOUv6GFrq3EVw',
}

