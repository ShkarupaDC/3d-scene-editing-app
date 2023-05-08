import EditSection from '../components/sections/edit-section';
import EditMaskSection from '../components/sections/edit-mask-section';
import TrainSection from '../components/sections/train-section';
import ComposeSection from '../components/sections/compose-section';
import RenderingSection from '../components/sections/rendering-section';
import EmailSection from '../components/sections/email-section';

// 1. Error handling

const IndexPage = () => {
  return (
    <>
      <EmailSection />
      <TrainSection />
      <EditSection />
      <EditMaskSection />
      <ComposeSection />
      <RenderingSection />
    </>
  );
};

export default IndexPage;
