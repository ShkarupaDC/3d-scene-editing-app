export const API_URL = import.meta.env.VITE_API_URL;

const handleEachDetail = (detail) => {
  if (typeof detail === 'string') {
    return detail;
  }
  if (typeof detail === 'object') {
    const location = detail.loc.join('.');
    const context = detail?.ctx ? JSON.stringify(detail.ctx) : 'missing';
    return `Location: ${location} Error type: ${detail.type}. Message: ${detail.msg}. Context: ${context}`;
  }
  return JSON.stringify(detail);
};

export const handleAPIError = async (response) => {
  if (response.ok) {
    return;
  }
  const unknownErrorMessage = async () =>
    `Unknown error. Status: ${response.status}, ${
      response.statusText
    }. Message: ${await response.text()}`;
  let body, message;
  try {
    body = await response.json();
  } catch (error) {
    throw new Error(await unknownErrorMessage());
  }
  if (!body?.detail) {
    throw new Error(await unknownErrorMessage());
  }
  const detail = body.detail;
  if (Array.isArray(detail)) {
    message = detail.map(handleEachDetail).join('\n');
  } else if (typeof detail === 'string') {
    message = detail;
  } else {
    message = JSON.stringify(detail);
  }
  throw new Error(message);
};

export const postTrain = async (email, dataURL) => {
  const requestBody = { data_url: dataURL, email, dataset_type: 'blender' };
  const response = await fetch(`${API_URL}/experiment/train`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  await handleAPIError(response);
  return await response.json();
};

export const getRendering = async (experimentId) => {
  const response = await fetch(
    `${API_URL}/experiment/${experimentId}/rendering`,
  );
  await handleAPIError(response);
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
  await handleAPIError(response);
  return await response.json();
};

export const postEditImageMasks = async (
  email,
  baseExperimentId,
  masks,
  cameras,
  innerRegion,
) => {
  const formData = new FormData();
  formData.set('email', email);
  formData.set('base_experiment_id', baseExperimentId);
  for (const mask of masks) {
    formData.append('image_masks', mask);
  }
  formData.set('cameras', JSON.stringify({ cameras }));
  formData.set('inner_region', innerRegion);
  const response = await fetch(`${API_URL}/experiment/edit/image-masks`, {
    method: 'POST',
    body: formData,
  });
  await handleAPIError(response);
  return await response.json();
};

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
  await handleAPIError(response);
  return await response.json();
};
