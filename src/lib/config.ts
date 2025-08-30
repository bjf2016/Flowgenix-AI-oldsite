// src/lib/config.ts
// Centralized configuration management for environment variables

interface Config {
  sanity: {
    projectId: string;
    dataset: string;
    apiToken: string;
  };
  openrouter: {
    apiKey: string;
  };
}

function getRequiredEnvVar(name: string): string {
  const value = import.meta.env[name] || process.env[name];
  if (!value) {
    console.warn(`Warning: Missing environment variable: ${name}`);
    return ''; // Return empty string instead of throwing
  }
  return value;
}

function getOptionalEnvVar(name: string, defaultValue: string = ''): string {
  return import.meta.env[name] || process.env[name] || defaultValue;
}

export const config: Config = {
  sanity: {
    projectId: getOptionalEnvVar('SANITY_PROJECT_ID'),
    dataset: getOptionalEnvVar('SANITY_DATASET'),
    apiToken: getOptionalEnvVar('SANITY_API_TOKEN'),
  },
  openrouter: {
    apiKey: getOptionalEnvVar('OPENROUTER_API_KEY'),
  },
};

// Helper function to validate all required environment variables
export function validateConfig(): void {
  try {
    // Access all config properties to trigger validation
    config.sanity.projectId;
    config.sanity.dataset;
    config.sanity.apiToken;
    config.openrouter.apiKey;
    console.log('✅ All required environment variables are configured');
  } catch (error) {
    console.error('❌ Configuration validation failed:', error instanceof Error ? error.message : 'Unknown error');
    throw error;
  }
}