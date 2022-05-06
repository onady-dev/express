const express = require('express')
const router = express.Router();
const ctrl = require('./user.ctrl')

router.get("/", ctrl.index);
router.post("/login", ctrl.login);
/** 
* @swagger
*     components:
*         schemas:
*             User:
*                 type: object
*                 required:
*                     - name
*                 properties:
*                     id:
*                         type: integer
*                         description: 유저 인덱스
*                     name:
*                         type: string
*                         description: 유저 이름.
*                     createdAt:
*                         type: string
*                         format: date
*                         description: 생성된 날짜.
*                     updatedAt:
*                         type: string
*                         format: date
*                         description: 수정된 날짜.
*/
/**
*  @swagger
*  tags:
*    name: User
*    description: API to manage your Users.
*/
/**
*  @swagger
*  paths:
*   /user:
*     get:
*       summary: Lists all the users
*       tags: [User]
*       responses:
*         "200":
*           description: The list of users.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
*/
/**
*  @swagger
*  paths:
*   /user/login:
*     post:
*       summary: Login User
*       tags: [User]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*       responses:
*         "200":
*           description: Login User.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
*/

module.exports = router;