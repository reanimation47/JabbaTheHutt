module.exports = {
    name: 'oldInteractions',
    description: 'just old stuff',
    execute(interaction){
        if (!interaction.isCommand()) {
            return
          }
        
          const { commandName, options } = interaction
        
          if (commandName === 'ping') {
            interaction.reply({
              content: 'pong',
            })
          } else if (commandName === 'add') {
            const num1 = options.getNumber('num1') || 0;
            const num2 = options.getNumber('num2') || 0;
            const sum = num1 + num2;
        
            interaction.reply({
              content: `and the sum is ${sum}`
            })
        
          } else if (commandName === 'chuibanh') {
            let i = 0
            const solan = options.getNumber('solan') || 0;
            while (i < solan) {
              interaction.channel?.send('dm banh')
              i++
        
        
            }
          }
    }
}