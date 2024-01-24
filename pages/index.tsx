import Head from "next/head";

// Components
import Hero from "../components/pages/home/hero";
import Layout from "../components/global/layout";
import FeaturesSection from "../components/pages/home/features";
import FeaturesOverviewSection from "../components/pages/home/features-overview";
import ContentStructureSection from "../components/pages/home/content-structure";

// Content Json's
import heroContent from "../contentrain/homehero/homehero.json";
import featuresContent from "../contentrain/homefeatures/homefeatures.json";
import featuresOverviewContent from "../contentrain/homefeaturesoverview/homefeaturesoverview.json";
import featuresOverviewItems from "../contentrain/homefeaturesoverviewitems/homefeaturesoverviewitems.json";
import contentStructureContent from "../contentrain/homecontentstructure/homecontentstructure.json";
import collaborateTeamsContent from "../contentrain/homecollaborateteams/homecollaborateteams.json";

import {
  IHomeHero,
  IHomeFeatures,
  IHomeFeaturesOverview,
  IHomeFeaturesOverviewItem,
  IHomeContentStructure,
  IHomeCollaborateTeam,
} from "../interfaces/contentrain";

type Props = {
  heroData: IHomeHero;
  featuresData: IHomeFeatures[];
  featuresOverviewData: IHomeFeaturesOverview;
  featuresOverviewItemsData: IHomeFeaturesOverviewItem[];
  contentStructureData: IHomeContentStructure;
  collaborateTeamsData: IHomeCollaborateTeam;
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

