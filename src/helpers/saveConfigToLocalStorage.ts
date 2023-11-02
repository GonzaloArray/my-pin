export const saveConfigToLocalStorage = () => {
  localStorage.setItem('status', "0");
  localStorage.setItem('removeGuide', JSON.stringify(true));
};