import axios from './libs/axios';

export const getClient = async (url, token) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: !!token ? token : null,
    },
  });
  return response.data;
};

export const postClient = async (url, data, token) => {
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteClient = async (url, token) => {
  const response = await axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
