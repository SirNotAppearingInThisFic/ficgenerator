class Utils {
  static sample(array) {
    const index = randomTo(array.length);
    return array[index];
  }

  static randomTo(length) {
    const random = Math.random();
    return Math.floor(random * length);
  }

  static shufflePair(pair) {
    const random = Math.random();
    const firstIndex = Math.floor(random * 2);
    const secondIndex = (firstIndex + 1) % 2;

    return [pair[firstIndex], pair[secondIndex]];
  }

  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
