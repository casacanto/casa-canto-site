import Link from "next/link";

const WorkshopCard = ({ title, difficult, image, slug }) => {
	return (
		<div className="card">
			<Link href={`/talleres/${slug}`}>
				<a>
					<figure>
						<img src={image} alt={title} />
					</figure>
					<div className="textContainer">
						<h3 className="subtitle">{title}</h3>
						<p className="whiteBackgroundTextBody">{difficult}</p>
					</div>
				</a>
			</Link>
			<style jsx>{`
				.card {
					width: 100%;
					height: 100%;
					background: white;
				}

				a {
					display: block;
					width: 100%;
					height: 100%;
				}

				figure {
					width: 100%;
				}

				img {
					height: 100%;
					width: 100%;
					object-fit: contain;
				}

				.textContainer {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 2rem;
					gap: 2rem;
				}

				h3 {
					font-size: 1.2rem;
				}

				p {
					font-size: 1rem;
				}
			`}</style>
		</div>
	);
};

export default WorkshopCard;