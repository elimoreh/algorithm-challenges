var allAnagrams = function (string) {
  string = string.toLowerCase();
  let results = [];
  var sorted = string.split('').sort().join('');
  let combinations = (combo = '') => {
    if (combo.length === string.length) {
        if (sorted === combo.split('').sort().join('')) {
          results.push(combo);
        }
      return;
    }

    for (var i = 0; i < string.length; i++) {
      combinations(combo + string[i]);
    };
  };

  combinations();

  return Array.from(new Set(results));

};