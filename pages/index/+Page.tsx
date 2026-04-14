import { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import SaveDatePopup from '../../components/SaveDatePopup';
import Navbar from '../../components/Navbar';
import Story from '../../components/Story';
import Events from '../../components/Events';
import Venue from '../../components/Venue';
import Family from '../../components/Family';
import Gallery from '../../components/Gallery';
import RSVP from '../../components/RSVP';
import Footer from '../../components/Footer';
import PetalCanvas from '../../components/PetalCanvas';
import AudioPlayer from '../../components/AudioPlayer';
import '../index.css';

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PetalCanvas />
      <AudioPlayer />
      <SaveDatePopup show={showPopup} onClose={() => setShowPopup(false)} />
      <Navbar />
      <Hero />
      <Story />
      <Events />
      <Venue />
      <Family />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}
