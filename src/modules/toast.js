const toast = (data) => {
  document.dispatchEvent(
    new CustomEvent('toast', {
      detail: {
        data,
      },
      bubbles: true,
      cancelable: true,
    }),
  );
};

export default toast;
