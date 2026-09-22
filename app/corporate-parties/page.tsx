import { CorporateHero } from '@/views/CorporateHero';
import { CorporateInviteGame } from '@/views/CorporateInviteGame';
import { CorporatePresenters } from '@/views/CorporatePresenters';
import { CorporatePricing } from '@/views/CorporatePricing';

const CorporateParties = () => {
  return (
    <div className="common-bg-corporate">
      <CorporateHero />
      <CorporatePresenters />
      <CorporatePricing />
      <CorporateInviteGame />
    </div>
  );
};

export default CorporateParties;
