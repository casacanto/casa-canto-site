import Head from "next/head";
import { MenuContextProvider } from "../../contexts/MenuContext";

import Footer from "./Footer";
import Header from "./Header";

const AppLayout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Casa Canto</title>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="title" content="Casa Canto" />
				<meta
					name="keywords"
					content="casa, canto, escuela, cordoba, taller, talleres, musical, musicales, guitarra, piano, ukelele, niños, iniciacion, bajo, charango, bateria, percusion, profesor, profesora, profesores, maestro, maestros, maestra, maestras"
				/>
				<link rel="canonical" href="https://www.casacanto.com.ar/" />

				{/* Open Graphs */}
				<meta property="og:title" content="Casa Canto" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.casacanto.com.ar/" />
				<meta
					property="og:description"
					content="Casa Canto propone una experiencia de aprendizaje al mismo tiempo que te permite pasar un buen momento, despejar la mente y sentir la música."
				/>
				<meta
					property="og:image"
					content="https://casacanto.com.ar/assets/images/logo.png"
				/>

				{/* Twitter */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://casacanto.com.ar/" />
				<meta name="twitter:title" content="Casa Canto" />
				<meta name="twitter:site" content="@casacanto" />
				<meta
					name="twitter:description"
					content="Casa Canto propone una experiencia de aprendizaje al mismo tiempo que te permite pasar un buen momento, despejar la mente y sentir la música."
				/>
				<meta
					name="twitter:image"
					content="https://casacanto.com.ar/assets/images/logo.png"
				/>
				<meta
					name="description"
					content="Casa Canto propone una experiencia de aprendizaje al mismo tiempo que te permite pasar un buen momento, despejar la mente y sentir la música."
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/assets/icons/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/assets/icons/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/assets/icons/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/assets/icons/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/assets/icons/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/assets/icons/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/assets/icons/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/assets/icons/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/icons/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/assets/icons/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/assets/icons/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/icons/favicon/manifest.json" />
				<link
					rel="sitemap"
					type="application/xml"
					title="Sitemap"
					href="/sitemap.xml"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
				<script type="application/ld+json">
					{`{
						"@context": "http://schema.org",
						"@type" : "Article",
						"name" : "Casa Canto",
						"articleSection" : [ "[Taller de Canto] Taller de Canto", "[Taller de Guitarra y Bajo] Taller de Guitarra y Bajo", "[Taller de Charango y Ukelele] Taller de Charango y Ukelele", "[Taller de Piano] Taller de Piano", "[Taller de Batería y Precusión] Taller de Batería y Precusión", "[Iniciación Musical para niños] Iniciación Musical para niños"],
						"image": "https://casacanto.com.ar/assets/images/logo.svg",
						"description": "Casa Canto propone una experiencia de aprendizaje al mismo tiempo que te permite pasar un buen momento, despejar la mente y sentir la música.",
						"url": "https://casacanto.com.ar/",
						"brand": {
							"@type": "Brand",
							"name": "Casa Canto",
							"logo": "https://casacanto.com.ar/assets/images/logo.png"
						},
						"sameAs" : [
							"https://twitter.com/casacanto",
							"https://www.facebook.com/CasaCantoTalleresMusicales/",
							"https://www.youtube.com/channel/UCofTWHiX5aIdin2AJ8UaO6w",
							"https://www.instagram.com/casa.canto/"
						]
					}`}
				</script>
				<script
					type="text/javascript"
					defer
					src="https://www.google-analytics.com/analytics.js"
				></script>
				<script defer src="//www.google-analytics.com/analytics.js"></script>
			</Head>
			<MenuContextProvider>
				<Header />
				<main>{children}</main>
				<Footer />
			</MenuContextProvider>
		</>
	);
};

export default AppLayout;
