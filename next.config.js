const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "d19fbfhz0hcvd2.cloudfront.net",
      "zakxqorxaxrohdzocisr.supabase.co",
      "supabase.co"
    ],
  }
};

module.exports = nextConfig;
