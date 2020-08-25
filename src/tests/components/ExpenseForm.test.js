import React from "react"
import { shallow } from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseForm correctly with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})