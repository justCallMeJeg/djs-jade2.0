/**
 * @file logger
 * @description Handles console logging and transports
 * @module logger
 */
import pino from 'pino'
import 'pino-pretty'

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      ignore: 'pid,hostname'
    }
  }
})
