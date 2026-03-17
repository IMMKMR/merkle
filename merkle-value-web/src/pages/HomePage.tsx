import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AccessBitcoinSection } from '../components/AccessBitcoinSection';
import { TheBitcoinShiftSection } from '../components/TheBitcoinShiftSection';
import { WhyBitcoinSection } from '../components/WhyBitcoinSection';
import { CuttingThroughTheNoiseSection } from '../components/CuttingThroughTheNoiseSection';
import { ClosingCTASection } from '../components/ClosingCTASection';

export const HomePage = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <AccessBitcoinSection />
            <TheBitcoinShiftSection />
            <WhyBitcoinSection />
            <CuttingThroughTheNoiseSection />
            <ClosingCTASection />
        </React.Fragment>
    );
};
