import axiosInstance from '@/api/interceptor';

export const loginUser = (credentials) => {
  return axiosInstance.post('/login', credentials);
};

export const logoutUser = () => {
  return axiosInstance.post('/logout');
};

export const getUserProfile = () => {
  return axiosInstance.get('/user/profile');
};

export const updateUserProfile = (data) => {
  return axiosInstance.put('/user/profile', data);
};

// Add more API calls as needed
export default {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};
