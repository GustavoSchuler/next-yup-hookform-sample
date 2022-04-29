import '@testing-library/jest-dom/extend-expect';
(global as any).console.error = (message: any) => {
  throw message;
};