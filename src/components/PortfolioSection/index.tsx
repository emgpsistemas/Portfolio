import MobileSection from "../MobileSection";
import WebSection from "../WebSection";

function PortfolioSection() {
  return (
    <div className="flex flex-col items-center">
      <WebSection />
      <MobileSection />
    </div>
  );
}

export default PortfolioSection;
