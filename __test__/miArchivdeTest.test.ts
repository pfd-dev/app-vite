import { numeros } from "./../src/numero.model"


describe('mi primer test', () => {
    test('validar numero', () => {


        expect(numeros).toBe(123123)
    })

    test('testeo palabras iguales', () => {

        expect("CarlOs".toLocaleLowerCase()).toBe("carlos");
    })
})