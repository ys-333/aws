const chalk = require('chalk')
class Logger {
  static defaultMessage = 'har har mahadev'
  static info(message) {
    console.log(chalk.blue(message || Logger.defaultMessage))
  }
  static error(message) {
    console.log(chalk.red(message || Logger.defaultMessage))
  }
}

module.exports = Logger
