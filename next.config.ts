import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination:
          "https://docs.google.com/document/d/1MTTYgJFkjOFN6FDDXUeY_f6AOAjKHeGOzYxxiM2sJ9E/export?format=pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
