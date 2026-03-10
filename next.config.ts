import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [ 
      { source: "/", destination: "/workflows", permanent: false, } // set permanent to false to this affect to other nextJS projects
    ];
  },
};

export default nextConfig;
