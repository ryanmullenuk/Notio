const navigation = [
  { label: "Assisted living", href: "/assisted-living" },
  { label: "Door entry", href: "/door-entry-systems" },
  { label: "Digital 2027", href: "/digital-switchover-2027" },
  { label: "Fire safety", href: "/smoke-detection-systems" },
];

export function SiteHeader() {
  return (
    <>
      <a
        className="fact-find-bar"
        href="mailto:hello@notio.uk?subject=Free%2030-minute%20fact-find%20call"
      >
        <span>Free 30-minute fact-find call</span>
        <strong>Arrange a conversation&nbsp; ↗</strong>
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="/" aria-label="Notio Consulting home">
            <img
              className="brand-logo"
              src="/assets/logo_top_left.png"
              alt="Notio Consulting"
            />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-contact" href="/#contact">
            Contact <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-menu-panel">
              <a href="/">Home</a>
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="/#contact">Contact</a>
              <a href="/privacy-policy">Privacy</a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand brand-footer" href="/" aria-label="Notio Consulting home">
            <img
              className="brand-logo"
              src="/assets/logo_top_left.png"
              alt="Notio Consulting"
            />
          </a>
          <p>
            Independent consultancy for life safety, connected homes and
            housing compliance.
          </p>
        </div>
        <div>
          <p className="footer-label">Services</p>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:hello@notio.uk">hello@notio.uk</a>
          <a href="/#contact">Enquiry form</a>
          <a href="/privacy-policy">Privacy policy</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Notio Consulting</span>
        <span>Life safety for residents. Compliance for organisations.</span>
      </div>
    </footer>
  );
}
