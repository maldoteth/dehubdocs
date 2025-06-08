
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-scroll-area', '@radix-ui/react-tabs', 'lucide-react'],
          'query-vendor': ['@tanstack/react-query'],
          // Page chunks
          'docs-pages': [
            './src/pages/docs/DocsHome',
            './src/pages/docs/Overview',
            './src/pages/docs/QuickStart'
          ],
          'token-pages': [
            './src/pages/docs/TokenEconomics',
            './src/pages/docs/TokenUtility', 
            './src/pages/docs/TokenWhereToBuy',
            './src/pages/docs/TokenGovernance',
            './src/pages/docs/TokenStake'
          ],
          'other-pages': [
            './src/pages/docs/Team',
            './src/pages/docs/Contact',
            './src/pages/docs/Terms',
            './src/pages/docs/TermsOfService',
            './src/pages/docs/PrivacyPolicy'
          ]
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ],
  },
}));
