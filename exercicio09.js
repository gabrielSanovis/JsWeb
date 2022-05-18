function nota (notaDoAluno) {
    notaDoAluno = arredondar(notaDoAluno)
    if (notaDoAluno > 100 || notaDoAluno < 0) {
        return `A nota ${notaDoAluno} é inválida.`
    }else if (typeof notaDoAluno != typeof 0) {
        return `Digete um número inteiro por favor`
    }else if (notaDoAluno < 40) {
        return `Aluno Reprovado, nota: ${notaDoAluno}`
    }else {
        return `Aluno aprovado, nota: ${notaDoAluno}`
    }
    
    function arredondar (notaDoAluno) {
        if(notaDoAluno % 5 > 2) {
            notaDoAluno = notaDoAluno + (5 - (notaDoAluno % 5))
            return notaDoAluno
        }else {
            return notaDoAluno
        }
    }
}
console.log(nota(98))