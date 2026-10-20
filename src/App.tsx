import React, { useState } from 'react';
import { BootSequence } from './components/sections/BootSequence';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { SystemOverview } from './components/sections/SystemOverview';
import { SmartProtocolSection } from './components/sections/SmartProtocolSection';
import { HistoricalArchive } from './components/sections/HistoricalArchive';
import { GoalHackerSection } from './components/sections/GoalHackerSection';
import { NeuralTestSection } from './components/sections/NeuralTestSection';
import { TrainingSimulatorSection } from './components/sections/TrainingSimulatorSection';
import { MissionControlSection } from './components/sections/MissionControlSection';
import { DataArchiveSection } from './components/sections/DataArchiveSection';
import { FinalProtocolSection } from './components/sections/FinalProtocolSection';
import { Footer } from './components/layout/Footer';
import './styles/cyberpunk.css';

export const App: React.FC = () => {
  const [bootCompleted, setBootCompleted] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('smart_lab_booted') === 'true';
    } catch {
      return false;
    }
  });

  const [progressRevision, setProgressRevision] = useState(0);

  const handleBootComplete = () => {
    setBootCompleted(true);
    try {
      sessionStorage.setItem('smart_lab_booted', 'true');
    } catch {
      // ignore
    }
  };

  const handleReboot = () => {
    setBootCompleted(false);
  };

  const notifyProgressChange = () => {
    setProgressRevision((prev) => prev + 1);
  };

  return (
    <div className="smart-lab-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="cyber-scanlines" aria-hidden="true" />

      {!bootCompleted && <BootSequence onComplete={handleBootComplete} />}

      <Navbar onReboot={handleReboot} />

      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <HeroSection />
        <SystemOverview />
        <SmartProtocolSection onCriterionViewed={notifyProgressChange} />
        <HistoricalArchive />
        <GoalHackerSection />
        <NeuralTestSection onScoreUpdated={notifyProgressChange} />
        <TrainingSimulatorSection onChallengeCompleted={notifyProgressChange} />
        <MissionControlSection
          progressRevision={progressRevision}
          onProgressPurged={notifyProgressChange}
        />
        <DataArchiveSection />
        <FinalProtocolSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
