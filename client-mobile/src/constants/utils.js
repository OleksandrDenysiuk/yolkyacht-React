export const successAction = name => `${name}_SUCCESS`;
export const failureAction = name => `${name}_FAILURE`;

export const apiAction = name => [
  name,
  successAction(name),
  failureAction(name),
];

/*
Example of makeActions usage:
-  input = {
-    key1: [v1, v2, v3],
-    key2: [v4, v5, v6],
-  }
-  output = {
-    key1: {
-      v1: 'key1/v1',
-      v2: 'key1/v2',
-      v3: 'key1/v3'
-    },
-    key2: {
-      v4: 'key2/v4',
-      v5: 'key2/v5',
-      v6: 'key2/v6'
-    }
-  }
-*/

export const makeActions = dict => Object.keys(dict).reduce((rv, key) => {
  const tmp = rv;
  const acts = dict[key].map(a => ({ [a]: `${key}/${a}` }));
  tmp[key] = acts.reduce((d, act) => Object.assign(d, act), {});
  return tmp;
}, {});
