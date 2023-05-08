import EditSection from '../components/sections/edit-section';
import TrainSection from '../components/sections/train-section';
import ComposeSection from '../components/sections/compose-section';
import RenderingSection from '../components/sections/rendering-section';
import EmailSection from '../components/sections/email-section';

// 1. Separate handler for backend errors
// 2. Class for renderer - done
// 3. fetchRendering - createResource?
// 4. Download image button recheck!
// 5. Edit section -> Edit AABB | Edit Image Masks (tabs)
// 6. Compose section: add controls; redo load; extract T; send POST request - done
// 7. Edit section: add inner / outer checkbox
// 8. Edit AABB: make x, y, z a separate form - won't do
// 9. Handle isTouched
// 10. Experiment with OrbitsControl - done
// 11. Forward backend traffic to local network - done
// 12. Image masks

const IndexPage = () => {
  return (
    <>
      <EmailSection />
      <TrainSection />
      <EditSection />
      <ComposeSection />
      <RenderingSection />
    </>
  );
};

export default IndexPage;
