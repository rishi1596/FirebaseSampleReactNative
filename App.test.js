const App = require("./App")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", async () => {
        await inst.componentDidMount()
    })
})

// @ponicode
describe("getToken", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", async () => {
        await inst.getToken()
    })
})

// @ponicode
describe("requestPermission", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", async () => {
        await inst.requestPermission()
    })
})
