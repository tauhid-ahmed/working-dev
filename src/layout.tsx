interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background">
      <div className="min-h-screen flex flex-col">{children}</div>
    </div>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className="py-4 h-16">{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="text-center py-4 mt-auto h-16 flex items-center justify-center text-orange-100 bg-neutral-900">
      {children}
    </footer>
  );
}

Layout.displayName = "Root Layout";
Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
