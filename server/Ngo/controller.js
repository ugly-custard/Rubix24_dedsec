import db from '../db.js';
import { Router } from 'express';

const router = Router();

export const getAllNgo = async (req, res) => {
    try {
        const ngos = await db('ngos').select('*');
        res.status(200).json(ngos);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};

export const getNgoById = async (req, res) => {
    const { id } = req.params;
    try {
        const ngo = await db('ngos').where({ id: id }).first();
        res.status(200).json(ngo);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error('Login error:', error);
    }
};

export const createNgo = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const ngo = await db('ngos').insert({ name: name, email: email, password: password, phone: phone }).returning('*');
        console.log(ngo)
        res.status(201).json(ngo);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const updateNgo = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, phone } = req.body;
    try {
        const ngo = await db('ngos').where({ id: id }).update({ name: name, email: email, password: password, phone: phone }).returning('*');
        console.log(ngo)
        res.status(201).json(ngo);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const deleteNgo = async (req, res) => {
    const { id } = req.params;
    try {
        const ngo = await db('ngos').where({ id: id }).del();
        console.log(ngo)
        res.status(201).json(ngo);
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
