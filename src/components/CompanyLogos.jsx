import { companyLogos } from "../constants";
import LogoCarousel from "./LogoCarousel";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-15 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <LogoCarousel/>
    </div>
  );
};

export default CompanyLogos;
