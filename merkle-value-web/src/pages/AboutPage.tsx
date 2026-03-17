import React from 'react';
import { AboutHeroSection } from '../components/AboutHeroSection';
import { AboutWhatIsSection } from '../components/AboutWhatIsSection';
import { AboutWhyStructureMattersSection } from '../components/AboutWhyStructureMattersSection';
import { AboutGovernanceSection } from '../components/AboutGovernanceSection';
import { AboutHowItWorksSection } from '../components/AboutHowItWorksSection';
import { AboutWhoIsThisForSection } from '../components/AboutWhoIsThisForSection';
import { TeamSection } from '../components/TeamSection';

export const AboutPage = () => {
    return (
        <React.Fragment>
            <AboutHeroSection />
            <AboutWhatIsSection />
            <AboutWhyStructureMattersSection />
            <AboutGovernanceSection />
            <AboutHowItWorksSection />
            <AboutWhoIsThisForSection />
            <TeamSection />
        </React.Fragment>
    );
};
