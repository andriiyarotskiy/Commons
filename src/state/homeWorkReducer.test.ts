import {filteredAgeAC, hwReducer, sortDownAC, sortUpAndDownAC, StateType} from "./homeWorkReducer";

let startState = [] as Array<StateType>

beforeEach(() => {
    startState = [
        {id: '1', name: 'Andriy', age: 10},
        {id: '2', name: 'Ignat', age: 25},
        {id: '3', name: 'Alina', age: 50},
        {id: '4', name: 'Ira', age: 75}
    ]
})

test('sort people by age and name UP', () => {

    const action = sortUpAndDownAC('up')
    const endState = hwReducer(startState, action)

    expect(startState[0].age).toBe(10)
    expect(endState[0].age).toBe(10)
    expect(endState[3].age).toBe(75)
    expect(endState.length).toBeTruthy() // Проверка что массив не пустой
});
test('sort people by age and name DOWN', () => {
    const action = sortDownAC('down')
    const endState = hwReducer(startState, action)

    expect(startState[0].age).toBe(10)
    expect(endState[0].age).toBe(75)
    expect(endState[3].age).toBe(10)
    expect(endState.length).toBeTruthy() // Проверка что массив не пустой
});
test('filter people by age', () => {

    const action = filteredAgeAC(18)
    const endState = hwReducer(startState, action)

    expect(endState[0].age).toBe(25)
    expect(endState[1].age).toBe(50)
    expect(endState.length).toBe(3)
    expect(endState.length).toBeTruthy() // Проверка что массив не пустой
});