// Root layout — placeholder. Global nav communicating the core loop
// (Decision -> Outcome -> Reflection -> Hindsight Memory -> Pattern ->
// Future Decision -> Intervention) belongs here once designed.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
