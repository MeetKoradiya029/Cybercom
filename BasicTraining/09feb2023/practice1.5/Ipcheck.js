s = "25525511135";

function possibleIpAddresses(s) {
  let result = [];
  let segments = [];

  function backtrack(start) {                   
    if (start === s.length && segments.length === 4) {
      result.push(segments.join("."));
      console.log(result)
      return;
    }
    if (segments.length >= 4 || start === s.length) return;

    for (let i = start; i < start + 3 && i < s.length; i++) {
      let segment = s.substring(start, i + 1);
    //   console.log(segment);
      if (segment > 255 || (segment.length > 1 && segment[0] === "0")) return;
      segments.push(segment);
      backtrack(i + 1);
      segments.pop();
    
    }
    console.log(segments+" segment length:- "+segments.length)
  }

  backtrack(0);
  return result;
}

console.log(possibleIpAddresses(s));
