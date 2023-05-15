import EditSection from "../components/sections/edit-section";
import EditMaskSection from "../components/sections/edit-mask-section";
import TrainSection from "../components/sections/train-section";
import ComposeSection from "../components/sections/compose-section";
import RenderingSection from "../components/sections/rendering-section";
import EmailSection from "../components/sections/email-section";

// 1. Test everything
// 2. Responsive canvases
// 3. TransformControls for mesh in AABB viewer
// 4. Add file with cameras per object on backend
// 5. Send mask filenames to backend

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
