// plugins/api/handler.ts
// import uuid, { v4 as uuidv4 } from 'uuid';
import * as Hapi from '@hapi/hapi';
import Boom, { boomify } from '@hapi/boom';
import Joi from '@hapi/joi';
// import * as bcrypt from 'bcrypt';
// import { string } from 'joi';
// import { userInfo } from 'os';

/**
 * GET Products
 * @param request UserRequest extends Hapi.Request
 * @param h Hapi.ResponseToolkit
 */
export const getProducts = async function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  try {
    // fetch from db
    // ** implment your db query code here
    const result = [
      { id: 1, name: 'Product A' },
      { id: 2, name: 'Product B' },
      { id: 3, name: 'Product C' }
    ];

    if (result.length > 0) {
      return h.response(result);
    }

    return h.response(result).code(404);
  } catch (error) {
    return Boom.badImplementation('Bad Implementation', error);
  }
};

/**
 * GET a Product
 * @param request UserRequest extends Hapi.Request
 * @param h Hapi.ResponseToolkit
 */
export const getProduct = async function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<object> {
  const _id = request.params.id;

  try {
    // fetch product by id
    // ** implment your db query code here
    const result = [{ id: 1, name: 'Product A' }];

    if (result.length > 0) {
      return h.response(result);
    }
    return h.response(result).code(404);
  } catch (error) {
    return Boom.badImplementation('Bad Implementation', error);
  }
};

/**
 * CREATE a Product
 * @param request UserRequest extends Hapi.Request
 * @param h Hapi.ResponseToolkit
 */
export const createProduct = async function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<object> {
  // Joi Schema
  // const schema = Joi.object({
  //   id: Joi.string()
  //     .trim()
  //     .uuid()
  //     .required(),
  //   name: Joi.string()
  //     .trim()
  //     .required()
  //     .min(5)
  // });

  try {
    // implement code here
    // validate Joi
    const joiError = 1;
    if (joiError) {
      return Boom.badRequest('Bad Request', 'Invalid input values');
    }
    // insert new row
    const insertedRow = [];
    return h.response(insertedRow[0]).code(201);
  } catch (error) {
    return Boom.badImplementation();
  }
};

/**
 * UPDATE a Product
 * @param request UserRequest extends Hapi.Request
 * @param h Hapi.ResponseToolkit
 */
export const updateProduct = async function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<object> {
  try {
    // ** CODE
    return h.response().code(200);
  } catch (error) {
    return Boom.badImplementation(error);
  }
};

/**
 * DELETE a Product
 * @param request UserRequest extends Hapi.Request
 * @param h Hapi.ResponseToolkit
 */
export const deleteProduct = async function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
): Promise<object> {
  try {
    // ** CODE
    return h.response().code(200);
  } catch (error) {
    return Boom.badImplementation(error);
  }
};
