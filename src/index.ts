import dotenv = require('dotenv')
import JadeClient from './classes/JadeClient'

dotenv.config()
export const client = new JadeClient()
void client.login(process.env.TOKEN)
