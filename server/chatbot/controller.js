import db from '../db/db.js'
import { Router } from 'express'
import { spawn } from 'child_process'

const router = Router()

export const getReply = async (req, res) => {
  const { query } = req.body
  try {
    const bot = spawn('python', ['./chatbot.py', query])

    let out
    bot.stdout.on('data', (data) => {
      out += data.toString()
    })
    bot.on('close', () => {
      console.log(out)
    })
    res.status(200).json(out)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}
