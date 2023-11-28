class Calculator {
    constructor() {
        // Aqui é a propriedade que recebe os valores digitados pelo usuário
        this.displayValue = ""
    }

    // Este método adiciona valores à propriedade displayValue
    // Em seguida chama a função updateDisplay que atualiza o input para apresentar o valor clicado
    appendToDisplay(value) {
        this.displayValue += value
        this.updateDisplay()
    }

    // Este método limpa o displayContent
    clearDisplay() {
        this.displayValue = ""
        this.updateDisplay()
    }

    // Este método calcula a equação apresentada no displayContent
    calculate() {
        try {
            const result = eval(this.displayValue)
            this.displayValue = result
            this.updateDisplay()
        } catch(error) {
            this.displayValue = "error"
            this.updateDisplay()
        }
    }

    // Este método atualiza o displayContent
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue
    }
}

// Instanciando o objeto

const calc = new Calculator()

