import { render } from '@testing-library/svelte'

import Header from "./Header.svelte"

test("says 'hello world!'", () => {
   const { queryByText } = render(Header);

    const node = queryByText("The Collection");

    expect(node).not.toBeNull();
})