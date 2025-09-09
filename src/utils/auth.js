export const getToken = () => localStorage.getItem('token');
export const getUserId = () => localStorage.getItem('userId');
export const getRole = () => localStorage.getItem('role');

export const setAuthData = (token, userId, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('role', role);
};

export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};