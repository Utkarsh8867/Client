import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//   },
// });


export default defineConfig({
   plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the server
    port: 5173,       // Change if needed
      allowedHosts: ['client-s2tr.onrender.com'],
  },
});

