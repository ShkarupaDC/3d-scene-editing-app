import { styled } from "solid-styled-components";
import { createFormControl, createFormGroup } from "solid-forms";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import HashInput from "../form/hash-input";
import NumberInput from "../form/number-input";
import Button from "../form/button";
import { addMesh, getBoxCenter, getBoxSize } from "../../helpers";
import { createEffect, createSignal } from "solid-js";
import Header from "../header";

const SectionCut = () => {
  const group = createFormGroup({
    hash: createFormControl(""),
    xMin: createFormControl(0),
    yMin: createFormControl(0),
    zMin: createFormControl(0),
    xMax: createFormControl(0),
    yMax: createFormControl(0),
    zMax: createFormControl(0),
  });

  const [min, setMin] = createSignal(
    new THREE.Vector3(
      group.controls.xMin.value,
      group.controls.yMin.value,
      group.controls.zMin.value
    )
  );
  const [max, setMax] = createSignal(
    new THREE.Vector3(
      group.controls.xMax.value,
      group.controls.yMax.value,
      group.controls.zMax.value
    )
  );

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

  const box = new THREE.Box3();
  const helper = new THREE.Box3Helper(box, 0xffff00);
  scene.add(helper);

  createEffect(() => {
    setMin(
      new THREE.Vector3(
        group.controls.xMin.value,
        group.controls.yMin.value,
        group.controls.zMin.value
      )
    );
    setMax(
      new THREE.Vector3(
        group.controls.xMax.value,
        group.controls.yMax.value,
        group.controls.zMax.value
      )
    );
  });

  createEffect(() => {
    helper.box.setFromCenterAndSize(
      getBoxCenter(min(), max()),
      getBoxSize(min(), max())
    );
    console.log(helper);
  });

  // creating Orbit Controls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.update();
  // callback update dom and return it
  const getThreeDom = () => {
    requestAnimationFrame(getThreeDom);
    renderer.render(scene, camera);

    return renderer.domElement;
  };

  const postAABB = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/AABB`, {
      method: "POST",
      body: {
        aabb: [
          [min().x, min().y, min().z],
          [max().x, max().y, max().z],
        ],
        hash: group.controls.hash.value,
        inner: false,
      },
    });
  };

  return (
    <>
      <Header text="Edit scene" />
      <Wrapper>
        <div>{getThreeDom()}</div>
        <Sidebar>
          <Fieldset>
            <NumberInput
              name={`xMin`}
              placeholder={`x min`}
              control={group.controls.xMin}
            />
            <NumberInput
              name={`yMin`}
              placeholder={`y min`}
              control={group.controls.yMin}
            />
            <NumberInput
              name={`zMin`}
              placeholder={`z min`}
              control={group.controls.zMin}
            />
          </Fieldset>
          <Fieldset>
            <NumberInput
              name={`xMax`}
              placeholder={`x max`}
              control={group.controls.xMax}
            />
            <NumberInput
              name={`yMax`}
              placeholder={`y max`}
              control={group.controls.yMax}
            />
            <NumberInput
              name={`zMax`}
              placeholder={`z max`}
              control={group.controls.zMax}
            />
          </Fieldset>
        </Sidebar>
        <Fieldset left>
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
        <Button
          name={`apply`}
          placeholder={`Apply`}
          type={`button`}
          onClick={postAABB}
        />
      </Wrapper>
    </>
  );
};

export default SectionCut;

const Wrapper = styled("section")`
  justify-content: center;
  display: grid;
  grid-template-columns: 1000px 256px;
  gap: 32px;
`;

const Fieldset = styled("fieldset")`
  display: ${(props) => (props.left ? "flex" : "block")};
  width: ${(props) => (props.left ? "1000px" : "96px")};
  input {
    width: ${(props) => (props.left ? "872px" : "96px")};
  }
  button {
    width: 128px;
  }
`;

const Sidebar = styled("div")`
  display: grid;
  grid-template-columns: auto auto;
`;
