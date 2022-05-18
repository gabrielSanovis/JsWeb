const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 0', function () {
    console.log('Executando tarefa 1', new Date().getSeconds(0))
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 4)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa 2 em execução', new Date().getSeconds())
})