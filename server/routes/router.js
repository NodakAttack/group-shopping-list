const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "items" ORDER BY id ASC;';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    // Basic validation checks
    if (!req.body.name) {
        return res.status(400).json({ message: 'Item name is required.' });
    }
    
    if (isNaN(req.body.quantity) || quantity <= 0) {
        return res.status(400).json({ message: 'Invalid quantity.' });
    }
    
    let queryText = 'INSERT INTO "items" ("name", "quantity", "unit", "purchased") VALUES ($1, $2, $3, $4);'
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit, false])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id' , (req,res) => {
    let { id } = req.params
    const sqlText = `DELETE FROM "items" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
    .then((response) => {
        console.log(`got stuff from database`, response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query` , error);
        res.sendStatus(500);
    })
})

router.post('/reset', (req, res) => {
    const sqlText = `UPDATE "items" SET "purchased" = false;`;
    pool.query(sqlText)
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/clear', (req, res) => {
    const deleteQuery = `DELETE FROM "items";`;
    const resetSequenceQuery = `ALTER SEQUENCE items_id_seq RESTART WITH 1;`;

    pool.query(deleteQuery)
        .then(() => {
            // After deleting, reset the sequence
            return pool.query(resetSequenceQuery);
        })
        .then(() => {
            console.log('Items deleted and sequence reset');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error making database query', error);
            res.sendStatus(500);
        });
});

router.put('/toggle/:id' , (req,res) => {
    let { id } = req.params;
    const sqlText = `UPDATE "items" SET "purchased" = NOT "purchased" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
    .then((response) => {
        console.log(`got stuff from database`, response);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query` , error);
        res.sendStatus(500);
    })
})

module.exports = router;