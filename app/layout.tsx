import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {metadataBase:new URL("https://awambaye.com"),title:{default:"Awa Mbaye | R&D Engineer · AI · Data Science",template:"%s | Awa Mbaye"},description:"Portfolio of Awa Mbaye, R&D engineer in Nantes, France. AI, medical imaging, Python, data science and applied research.",openGraph:{type:"website",siteName:"Awa Mbaye",title:"Awa Mbaye | R&D Engineer",description:"AI · Data Science · Python · Applied Research",url:"https://awambaye.com"},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body className="antialiased">{children}</body></html>}
