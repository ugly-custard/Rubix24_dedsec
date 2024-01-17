import db from '../db.js'
import { Router } from 'express'

const router = Router()

export const getAllRequests = async (req, res) => {
  try {
    const requests = await db('requests').select('*')
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const getRequestById = async (req, res) => {
  const { id } = req.params
  try {
    const requests = await db('requests').where({ request_id: id }).first()
    res.status(200).json(requests)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
    console.error('Login error:', error)
  }
}

export const createRequests = async (req, res) => {
  const { username, n_people } = req.body
  try {
    const requests = await db('requests')
      .insert({ username: username, n_people: n_people })
      .returning('*')
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateRequest = async (req, res) => {
  const { id } = req.params
  const { username, n_people } = req.body
  try {
    const requests = await db('requests')
      .where({ request_id: id })
      .update({ username: username, n_people })
      .returning('*')
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteRequest = async (req, res) => {
  const { id } = req.params
  try {
    const requests = await db('requests').where({ request_id: id }).del()
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateStatus = async (req, res) => {
  const { id, next } = req.params
  try {
    const status = await db('requests')
      .select('status')
      .where({ request_id: id })

    // if not already rejected and
    // if you want to update to next step
    if (status != 0) && (next == true) {
      status = status + 1
    } else { // else reject
      status = 0
    }

    const requests = await db('requests')
      .where({ request_id: id })
      .update({ status: status })
      .returning('*')
    console.log(requests)
    res.status(201).json(requests)
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Server error' })
  }
}
