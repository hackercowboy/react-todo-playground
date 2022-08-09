jest.mock('react-dom/client', () => ({
  createRoot: () => ({ render: jest.fn() }),
}));

describe('<index/>', () => {
  it('should load ', () => {
    // eslint-disable-next-line global-require
    require('../index');
  });
});
