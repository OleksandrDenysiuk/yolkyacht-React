export function isObject(obj) {
  return obj !== undefined && obj !== null && obj.constructor === Object;
}

export const isEmail = (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
