const config = {
  // Environment variables with defaults
  googleApiKey: process.env.NEXT_PUBLIC_KEY_GOOGLE_API || '',
  blacklistCountries: process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES || '',
  
  // Other development-specific configuration options
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;
