import App from './app'

describe('probar metodo verificar()', () => {
    it('should reject negative numbers', (result) => {
        expect(App.verificar(-1)).toBe(false)
    })
})


describe('probar metodo verificar()', () => {
    it('should reject numbers gt 999999999', (result) => {
        expect(App.verificar(1000000000)).toBe(false)
    })
})