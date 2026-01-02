
import AssetClasses from '../components/home/AssetClasses';
import ComplianceSection from '../components/home/ComplianceSection';
import EcosystemCollaboration from '../components/home/EcosystemCollaboration';
import Hero from '../components/home/Hero';
import RoleBasedCTA from '../components/home/RoleBasedCTA';
import TechArch from '../components/home/TechArch';
import TransparencySection from '../components/home/TransparencySection';
import WhyTrusted from '../components/home/WhyTrusted';
import StatsSection from '../components/shared/StatsSection';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <StatsSection />
      <AssetClasses />
      <ComplianceSection />
      <TechArch />
      <TransparencySection />
      <WhyTrusted />
      <EcosystemCollaboration />
      <RoleBasedCTA onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;
