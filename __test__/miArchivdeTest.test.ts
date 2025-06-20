import { numeros } from "./../src/numero.model"


describe('mi primer test', () => {
    test('validar numero', () => {


        expect(numeros).toBe(1)
    })

    test('testeo palabras iguales', () => {

        expect("CarlOs".toLocaleLowerCase()).toBe("carlos");
    })
})