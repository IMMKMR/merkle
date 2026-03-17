import React from 'react';
import { InsightsHeroSection } from '../components/InsightsHeroSection';
import { AboutPhilosophySection } from '../components/AboutPhilosophySection';
import { InsightsPartnersSection } from '../components/InsightsPartnersSection';
import { InsightsTransparencySection } from '../components/InsightsTransparencySection';
import { InsightsEligibilitySection } from '../components/InsightsEligibilitySection';
import { InsightsMinimumInvestmentSection } from '../components/InsightsMinimumInvestmentSection';

export const InsightsPage = () => {
    return (
        <React.Fragment>
            <InsightsHeroSection />
            <AboutPhilosophySection />
            <InsightsPartnersSection />
            <InsightsTransparencySection />
            <InsightsEligibilitySection />
            <InsightsMinimumInvestmentSection />
        </React.Fragment>
    );
};
