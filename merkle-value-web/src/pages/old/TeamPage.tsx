import React from 'react';
import { LeadershipSection } from '../components/LeadershipSection';
import { motion } from 'framer-motion';

export const TeamPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <LeadershipSection />
        </motion.div>
    );
};
