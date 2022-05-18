const { inc } = require("./instanciaUnica")

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}