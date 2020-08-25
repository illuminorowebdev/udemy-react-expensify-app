import React from "react"
import { shallow } from "enzyme"
import NotFoundPage from "../../components/ExpenseDashboardPage"
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";


test("should render ExpenseDashboardPage correct", () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})