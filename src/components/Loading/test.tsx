import { render } from 'utils/test-utils';

import Loading from '.';

describe('<Loading />', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />);

    expect(container).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
