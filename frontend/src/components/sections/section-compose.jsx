import { styled } from "solid-styled-components";
import { createFormControl, createFormGroup } from "solid-forms";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import HashInput from "../form/hash-input";
import Button from "../form/button";
import { addMesh } from "../../helpers";
import Header from "../header";
import TextInput from "../form/text-input";

const SectionCompose = () => {
  const group = createFormGroup({
    hash: createFormControl(""),
    imageID: createFormControl(""),
  });

  const loader = new PLYLoader();

  // creating scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xd0d0d0);

  // creating camera
  const camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 1000);
  camera.position.set(2, 2, 2);
  camera.lookAt(0, 0, 0);

  // creating renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(1000, 750);

  // creating Orbit Controls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.update();

  // callback update dom and return it
  const getThreeDom = () => {
    requestAnimationFrame(getThreeDom);
    renderer.render(scene, camera);

    return renderer.domElement;
  };

  return (
    <>
      <Header text="Composing meshes" />
      <Wrapper>
        <div>{getThreeDom()}</div>
        <Sidebar>
          <Fieldset>
            <HashInput
              name={`hash`}
              placeholder={`Hash`}
              control={group.controls.hash}
            />
            <Button
              name={`submit`}
              placeholder={`Load`}
              type={`button`}
              onClick={() => addMesh(loader, scene, group.controls.hash.value)}
            />
          </Fieldset>
          <TextInput
            name={`image`}
            placeholder={`Image ID`}
            control={group.controls.imageID}
          />
          <BottomWrapper>
            <Button
              name={`submit`}
              placeholder={`Render`}
              type={`button`}
              onClick={() => addMesh(loader, scene, group.controls.hash.value)}
            />
          </BottomWrapper>
        </Sidebar>
      </Wrapper>
    </>
  );
};

export default SectionCompose;

const Wrapper = styled("section")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
  input: {
    width: 100%;
  }
`;

const Fieldset = styled("fieldset")`
  display: flex;
  width: 100%;
  input {
    width: 192px;
  }
  button {
    width: 66px;
  }
`;

const Sidebar = styled("div")`
  display: flex;
  align-self: baseline;
  flex-wrap: wrap;
  gap: 32px;
`;

const BottomWrapper = styled.div`
  display: flex;
  vertical-align: bottom;
`;
