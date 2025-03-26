import SearchForm from "../search-form/SearchForm";

export default function SectionHero() {

	return (
		<section
			className="hero-section d-flex justify-content-center align-items-center"
			id="section_1"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-12 mx-auto">
						<h1 className="text-white text-center">Discover. Offer. Move</h1>
						<h6 className="text-center">
							platform for home seekers around the world
						</h6>

						<SearchForm />

					</div>
				</div>
			</div>
		</section>
	)

}