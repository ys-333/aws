import chalk from 'chalk'
class Logger {
  static defaultMessage: string = 'har har mahadev'
  static info(message: string) {
    console.log(chalk.blue(message || Logger.defaultMessage))
  }
  static error(message: string) {
    console.log(chalk.red(message || Logger.defaultMessage))
  }
}

export default Logger
