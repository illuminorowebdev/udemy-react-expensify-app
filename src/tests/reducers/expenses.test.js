import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"
import moment from "moment"

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual([])
})

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expense id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "4",
            description: "Car Loan",
            note: "",
            amount: 30000,
            createdAt: moment(0).add(5, "days").valueOf()
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test("should  edit an expense that is not found", () => {
    const amount = 122000
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test("should  edit an expense that is not found", () => {
    const amount = 122000
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})