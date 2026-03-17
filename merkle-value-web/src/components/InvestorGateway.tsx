import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InvestorGatewayProps {
  onAccept: () => void;
}

export const InvestorGateway: React.FC<InvestorGatewayProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Show gateway every time. No localStorage check.
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    if (!isChecked) return;
    setIsVisible(false);
    setTimeout(onAccept, 600); // Wait for exit animation
  };

  const handleDecline = () => {
    // Redirect to a neutral safe page if declined
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-off-white/95 p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="w-full max-w-4xl bg-white border border-merkle-purple/10 p-8 md:p-12 shadow-2xl relative my-auto h-auto max-h-[90vh] flex flex-col"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-merkle-purple" />
            
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-merkle-purple-dark">
              IMPORTANT NOTICE – INVESTOR CERTIFICATION, DISCLAIMER & TERMS ACCEPTANCE
            </h2>
            
            <div className="font-sans text-slate-700 space-y-4 mb-8 text-sm md:text-base leading-relaxed overflow-y-auto pr-4 custom-scrollbar flex-1">
              <p className="font-medium">Please read this notice carefully before accessing this website.</p>
              
              <p>This website contains information relating to a private investment fund established as a Category III Alternative Investment Fund (Non-Retail Scheme) under the International Financial Services Centres Authority (Fund Management) Regulations, 2022.</p>
              
              <p className="font-bold">Access is restricted.</p>
              
              <p>By selecting “Agree & Proceed,” you represent, warrant, and acknowledge that:</p>
              
              <div className="space-y-4 pl-4 border-l-2 border-merkle-purple/20">
                  <div>
                      <strong className="block text-merkle-purple-dark">1. Non-Retail Investor Status</strong>
                      You are not a retail investor and qualify as an eligible Non-Retail Investor under applicable IFSCA regulations, including as an Accredited Investor, institutional investor, corporate body, family office, High Net Worth Individual, or other eligible person.
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">2. Minimum Investment Capacity</strong>
                      You are capable of making a minimum investment of USD 150,000 (or such other minimum amount as may be prescribed under applicable regulations).
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">3. Jurisdiction Confirmation</strong>
                      You are accessing this website from a jurisdiction where it is lawful to receive information about private investment funds and where such access does not violate any applicable securities, financial promotion, or digital asset laws.
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">4. No Offer or Solicitation</strong>
                      You understand that:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>The information contained on this website is for informational purposes only;</li>
                          <li>It does not constitute an offer, solicitation, or recommendation to invest;</li>
                          <li>Any investment may only be made pursuant to the applicable Private Placement Memorandum and subscription documents;</li>
                          <li>Interests in the Fund are offered strictly on a private placement basis.</li>
                      </ul>
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">5. Investment Risk Acknowledgement</strong>
                      You acknowledge that investment in the Fund involves substantial risk, including the potential loss of the entire invested capital.
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">6. Digital Assets Risk Acknowledgement</strong>
                      You understand that the Fund may invest in digital assets (including cryptocurrencies, tokens, or blockchain-based instruments), which involve additional risks including but not limited to:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Extreme price volatility;</li>
                          <li>Regulatory uncertainty and changes in law;</li>
                          <li>Cybersecurity and hacking risks;</li>
                          <li>Custody and private key risks;</li>
                          <li>Technological failure, forks, or protocol changes;</li>
                          <li>Liquidity constraints and valuation uncertainty.</li>
                      </ul>
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">7. No Advice</strong>
                      You acknowledge that nothing on this website constitutes legal, tax, regulatory, financial, or investment advice, and you agree to consult your own professional advisers before making any investment decision.
                  </div>
                  <div>
                      <strong className="block text-merkle-purple-dark">8. Acceptance of Terms</strong>
                      You agree to be bound by the website’s Disclaimer, Terms & Conditions, and Privacy Policy, and confirm that you have read and understood them.
                  </div>
              </div>

            </div>

            {/* Checkbox */}
            <div className="mb-8 pt-4 border-t border-slate-200">
                <label className="flex items-start cursor-pointer hover:text-merkle-purple-dark transition-colors group">
                    <div className="relative flex items-center h-5 mt-0.5">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="w-5 h-5 cursor-pointer accent-merkle-purple rounded border-slate-300 text-merkle-purple focus:ring-merkle-purple/50"
                        />
                    </div>
                    <div className="ml-3 text-sm font-semibold select-none group-hover:text-merkle-purple-dark">
                        I confirm that I have read, understood, and agree to the above representations and acknowledgements.
                    </div>
                </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0">
              <button 
                onClick={handleDecline}
                className="px-8 py-3.5 w-full sm:w-auto border border-merkle-purple/20 text-slate-600 hover:bg-slate-50 transition-colors font-sans font-medium tracking-wide text-sm rounded-sm"
              >
                Decline & Exit
              </button>
              <button 
                onClick={handleAccept}
                disabled={!isChecked}
                className={`px-8 py-3.5 w-full sm:w-auto font-sans font-bold tracking-wide text-sm shadow-md transition-all rounded-sm
                    ${isChecked 
                        ? 'bg-merkle-purple text-white hover:bg-merkle-purple-dark hover:shadow-lg' 
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                    }`}
              >
                Agree & Proceed
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
