import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        ['@victorandree/graphql-codegen-client-preset-swc-plugin', { artifactDirectory: './src/gql', gqlTagName: 'graphql' }],
      ],
    }),
    splitVendorChunkPlugin(),
  ],
})
