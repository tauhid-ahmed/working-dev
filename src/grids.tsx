export function TwoColumnGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-8 md:gap-12">{children}</div>;
}
