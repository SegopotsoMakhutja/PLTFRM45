import { screen } from "@testing-library/react"
import { render } from "../../../test-utils"
import { Drawer } from '../Drawer';

test("renders drawer with heading and text description.", () => {

    const description = 'This is a design that you will need to code up and impress us.'
    const heading = 'Front-end Challenge!'

    const onToggle = jest.fn().mockImplementation()

    render(<Drawer description={description} heading={heading} isOpen={true} onToggle={onToggle} />)

    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /chevron-for-drawer/i })).toBeInTheDocument();
})
