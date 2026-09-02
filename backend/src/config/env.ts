import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 4000),
  frontendUrl: process.env.FRONTEND_URL ?? "http://localhost:5173",
  backendUrl: process.env.BACKEND_URL ?? "http://localhost:4000",

  mongodbUri: required("MONGODB_URI", "mongodb://localhost:27017/leadfinder"),

  jwtSecret: required("JWT_SECRET", "dev-only-insecure-secret-change-me"),

  googleClientId: process.env.GOOGLE_CLIENT_ID ?? "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

  leadsApiUrl: process.env.LEADS_API_URL ?? "",
  leadsApiKey: process.env.LEADS_API_KEY ?? "",
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",

  razorpayKeyId: process.env.RAZORPAY_KEY_ID ?? "",
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET ?? "",
  razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET ?? "",

  anthropicApiKey: process.env.ANTHROPIC_API_KEY ?? "",
  aiModel: process.env.AI_MODEL ?? "claude-sonnet-5",
} as const;

export const isGoogleOAuthConfigured = Boolean(env.googleClientId && env.googleClientSecret);
export const isRazorpayConfigured = Boolean(env.razorpayKeyId && env.razorpayKeySecret);
export const isAiConfigured = Boolean(env.anthropicApiKey);
