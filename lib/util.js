const defs = {
  green: (str) => str,
  yellow: (str) => str
}

const noColorSetting = process.env['NO_COLOR']
if (!noColorSetting || noColorSetting === 'false') {
  Object.assign(defs, {
    green: (str) => `\x1b[92m${str}\x1b[0m`,
    yellow: (str) => `\x1b[33m${str}\x1b[0m`
  })
}

module.exports = defs
