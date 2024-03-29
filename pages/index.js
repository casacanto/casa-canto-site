import Head from "next/head";

import Banner from "../components/general/Banner";
import Teachers from "../components/home/Teachers";
import Why from "../components/home/Why";
import Workshops from "../components/home/Workshops";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";

import { CarouselContextProvider } from "../contexts/CarouselContext";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Casa Canto - Talleres musicales</title>
			</Head>
			<Banner
				title="Hacé música y sentite como en casa"
				message="Hola! Quisiera más información de los talleres por favor!"
				slug="home-banner"
			/>
			<Why />
			<CarouselContextProvider>
				<Teachers />
			</CarouselContextProvider>
			<Workshops />
			<Experience />
			<Contact />
			<style jsx>{`
				div {
					width: 100%;
				}
			`}</style>
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
			`}</style>
		</div>
	);
}
