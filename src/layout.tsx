interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col px-4 max-w-6xl mx-auto bg-background">
      {children}
    </div>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return <div className="py-4">{children}</div>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <main className="">{children}</main>;
}

function Footer({ children }: { children: React.ReactNode }) {
  return <div className="text-center py-4 mt-auto">{children}</div>;
}

Layout.displayName = "Root Layout";
Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
