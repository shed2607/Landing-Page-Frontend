import "./globals.css";

export const metadata = {
  title: "Frontend Task",
  description: "Frontend Task for tech force",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
