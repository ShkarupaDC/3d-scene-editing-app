const API_URL = import.meta.env.VITE_API_URL;

export const postTrain = async (email, dataURL) => {
  const requestBody = { data_url: dataURL, email, dataset_type: 'blender' };
  const response = await fetch(`${API_URL}/experiment/train`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data['detail']);
  }
  return data;
};

export const getRendering = async (experimentId) => {
  const response = await fetch(
    `${API_URL}/experiment/${experimentId}/rendering`,
  );
  if (response.status >= 400) {
    const data = await response.json();
    throw new Error(data['detail']);
  }
  const imageBlob = await response.blob();
  return URL.createObjectURL(imageBlob);
};

export const postEditAABB = async (
  email,
  baseExperimentId,
  aabb,
  innerRegion,
) => {
  const responseBody = {
    email,
    base_experiment_id: baseExperimentId,
    aabb,
    inner_region: innerRegion,
  };
  const response = await fetch(`${API_URL}/experiment/edit/aabb`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(responseBody),
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(JSON.stringify(data['detail']));
  }
  return data;
};

export const postEditImageMasks = async () => {};

export const postRender = async (email, scenes, imageSize, camera) => {
  const responseBody = {
    email,
    scenes,
    image_size: imageSize,
    camera,
  };
  const response = await fetch(`${API_URL}/experiment/render`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(responseBody),
  });
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(JSON.stringify(data['detail']));
  }
  return data;
};
