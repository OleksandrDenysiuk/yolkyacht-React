export function isObject(obj)
{
  return obj !== undefined && obj !== null && obj.constructor === Object;
}
