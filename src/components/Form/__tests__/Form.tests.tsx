import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../../test-utils"
import { Form } from '../Form';

describe("Form", () => {
    test("renders fields.", () => {

        render(<Form />)

        expect(screen.getByLabelText("Name")).toBeInTheDocument();
        expect(screen.getByText(/gender/i)).toBeInTheDocument();
        expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Mobile")).toBeInTheDocument();
        expect(screen.getByLabelText("Customer Id")).toBeInTheDocument();
        expect(screen.getByText(/membership/i)).toBeInTheDocument();
    })

    test("renders buttons.", () => {

        render(<Form />)
        expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    })

    test.skip("cancel button clears data.", () => {

        render(<Form />)
    })
})
