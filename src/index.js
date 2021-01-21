module.exports = function check(str, bracketsConfig) {
  if (str == undefined || bracketsConfig == undefined) {
    return false;
  }

  let configLeft = true;
  while (str.length != 0 && configLeft) {
    configLeft = false;

    for (let config of bracketsConfig) {
      let bracket = config.join('');
      if (str.includes(bracket)) {
        str = str.replace(bracket, '');
        configLeft = true;
      }
    }
  }

  return str.length == 0;
}
