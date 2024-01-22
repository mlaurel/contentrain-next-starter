import Head from "next/head";

// Components
import Hero, { HeroDataInterface } from "../components/pages/home/hero";
import Layout from "../components/global/layout";
import FeaturesSection, {
  FeautersSectionDataInterface,
} from "../components/pages/home/features";
import FeaturesOverviewSection, {
  FeaturesOverviewData,
  FeaturesOverviewItemsData,
} from "../components/pages/home/features-overview";
import ContentStructureSection, {
  ContentStructureSectionDataInterface,
} from "../components/pages/home/content-structure";

// Content Json's
import heroContent from "../contentrain/homehero/homehero.json";
import featuresContent from "../contentrain/homefeatures/homefeatures.json";
import featuresOverviewContent from "../contentrain/homefeaturesoverview/homefeaturesoverview.json";
import featuresOverviewItems from "../contentrain/homefeaturesoverviewitems/homefeaturesoverviewitems.json";
import contentStructureContent from "../contentrain/homecontentstructure/homecontentstructure.json";
import collaborateTeamsContent from "../contentrain/homecollaborateteams/homecollaborateteams.json";

type Props = {
  heroData: HeroDataInterface;
  featuresData: FeautersSectionDataInterface[];
  featuresOverviewData: FeaturesOverviewData;
  featuresOverviewItemsData: FeaturesOverviewItemsData[];
  contentStructureData: ContentStructureSectionDataInterface;
  collaborateTeamsData: ContentStructureSectionDataInterface;
};
export default function Index({
  heroData,
  featuresData,
  featuresOverviewData,
  featuresOverviewItemsData,
  contentStructureData,
  collaborateTeamsData,
}: Props) {
  return (
    <>
      <Head>
        <title>{`Contentrain Next.js starter template`}</title>
      </Head>
      <div>
        <Layout>
          <Hero heroData={heroData} />
          <FeaturesSection featuresData={featuresData} />
          <ContentStructureSection contentStructure={contentStructureData} />
          <FeaturesOverviewSection
            featuresOverview={featuresOverviewData}
            featuresOverviewItems={featuresOverviewItemsData}
          />
          <ContentStructureSection contentStructure={collaborateTeamsData} />
        </Layout>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      featuresData: featuresContent,
      heroData: heroContent[0],
      featuresOverviewData: featuresOverviewContent[0],
      featuresOverviewItemsData: featuresOverviewItems,
      contentStructureData: contentStructureContent[0],
      collaborateTeamsData: collaborateTeamsContent[0],
    },
  };
};

