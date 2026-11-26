export default function sitemap() {
  return ['', '/about', '/services', '/become-agent', '/contact', '/faq'].map(path => ({
    url: `https://www.guemoni.com${path}`,
    changeFrequency: 'monthly',
    priority: path ? 0.8 : 1,
  }));
}
