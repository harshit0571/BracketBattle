export default function splitArrayInHalf(originalArray) {
  const middleIndex = Math.floor(originalArray.length / 2);
  const firstHalf = originalArray.slice(0, middleIndex);
  const secondHalf = originalArray.slice(middleIndex);
  return [firstHalf, secondHalf];
}
