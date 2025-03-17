import SectionHero from "../section-hero/SectionHero";
import SectionFeatured from "../section-featured/SectionFeatured";
import SectionExplore from "../section-explore/SectionExplore";
import SectionTimeline from "../section-timeline/SectionTimeline";
import SectionFaq from "../section-faq/SectionFaq";
import SectionContacts from "../section-contacts/SectionContacts";

export default function Home() {

    return (
        <>
            <SectionHero />
            <SectionFeatured />
            <SectionExplore />
            <SectionTimeline />
            <SectionFaq />
            <SectionContacts />
        </>
    )

}