import "./styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-[100vh] bg-gradient-to-t from-[#000000] to-[#141414] overscroll-none overflow-auto">
      <body className="">
        {children}
      </body>
    </html>
  );
}
