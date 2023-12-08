alert("Hola! Bienvenidos/as a LA CALCU.");

while (true) {
    let eleccion = prompt("Elegir qué desea utilizar:\n1- Calculadora\n2- Calculadora de impuestos argentinos");
    eleccion = parseInt(eleccion);

    if (!isNaN(eleccion) && (eleccion === 1 || eleccion === 2)) {

        if (eleccion === 1) {

            let num1 = Number(prompt("Has elegido la calculadora.\nIngresa el primer número"));
            let operacion = prompt("Ingresa la operación a realizar\n(+, -, *, /)");
            let num2 = Number(prompt("Ingresa el segundo número"));

            function calcular(num1, operacion, num2) {
                switch (operacion) {
                    case "+":
                        return num1 + num2;
                    case "-":
                        return num1 - num2;
                    case "*":
                        return num1 * num2;
                    case "/":
                        return num1 / num2;
                    default:
                        return "Operación no válida";
                }
            }

            let resultado = calcular(num1, operacion, num2);
            alert(`${num1} ${operacion} ${num2} = ${resultado}`);

        } else if (eleccion === 2) {

            let importe = prompt("Has elegido la calculadora de impuestos argentinos.\nIngresa un monto a calcular");

            let impGanancias = 1;
            let bienesPersonales = 0.25;
            let impPais = 0.30;
            let iva21 = 0.21;
            let iva105 = 0.105;
            let iva27 = 0.27;

            function calcularImpGanancias(importe, impGanancias) {
                let resultado = importe * impGanancias;
                return resultado;
            }

            function calcularBsPersonales(importe, bienesPersonales) {
                let resultado = importe * bienesPersonales;
                return resultado;
            }

            function calcularImpPais(importe, impPais) {
                let resultado = importe * impPais;
                return resultado;
            }

            function calcularIva21(importe, iva21) {
                let resultado = importe * iva21;
                return resultado;
            }

            function calcularIva105(importe, iva105) {
                let resultado = importe * iva105;
                return resultado;
            }

            function calcularIva27(importe, iva27) {
                let resultado = importe * iva27;
                return resultado;
            }

            let resultadoImpGanancias = calcularImpGanancias(importe, impGanancias);
            let resultadoBsPersonales = calcularBsPersonales(importe, bienesPersonales);
            let resultadoImpPais = calcularImpPais(importe, impPais);
            let resultadoImpIva21 = calcularIva21(importe, iva21);
            let resultadoImpIva105 = calcularIva105(importe, iva105);
            let resultadoImpIva27 = calcularIva27(importe, iva27);

            alert(`$ ${importe}\nImpuesto a las ganancias (100%) = $ ${resultadoImpGanancias}\nImpuesto a los bienes personales (25%) = $ ${resultadoBsPersonales}\nImpuesto país (30%) = $ ${resultadoImpPais}\nIva 21% = $ ${resultadoImpIva21}\nIva 10.5% = $ ${resultadoImpIva105}\nIva 27% = $ ${resultadoImpIva27}`);
        }
    } else {
        alert("Opción no válida. Por favor, elige 1 o 2.");
    }
}