import InfiniteLogoWall from '../components/layout/InfiniteLogoWall';
import EcosystemCollaboration from '../components/sections/EcosystemCollaboration';
import Hero from '../components/sections/Hero';
import HomeOverview from '../components/sections/HomeOverview';
import RoleBasedCTA from '../components/sections/RoleBasedCTA';
import WhyTrusted from '../components/sections/WhyTrusted';
import FadeIn from '../components/ui/FadeIn';

const HomePage = ({ onNavigate, t }) => {
  return (
    <FadeIn>
      <Hero onNavigate={onNavigate} t={t} />
      <InfiniteLogoWall t={t} />
      <HomeOverview t={t} />
      <WhyTrusted t={t} />
      <EcosystemCollaboration t={t} />
      <RoleBasedCTA onNavigate={onNavigate} t={t} />
    </FadeIn>
  );
};

export default HomePage;
