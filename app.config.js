import "dotenv/config";

export default {
  expo: {
    name: "Surf Seeker",
    slug: "surfseeker",
    owner: "kushenthimira",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.1.2-alpha",
    orientation: "portrait",
    icon: "./assets/logo.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#008cff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.cipher.posify",
    },
    android: {
      package: "npc.cipher.surfseeker",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff",
      },
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
    },
  },
};
