export const calculateEditDistance = (incoming, expected) => {
  incoming = incoming.trim().replace(/\s{2,}/g, ' ').split(' ');
  expected = expected.trim().replace(/\s{2,}/g, ' ').split(' ');

  const dp = [];
  for (let i = 0; i < expected.length + 1; i++) {
    dp.push([]);
    for (let j = 0; j < incoming.length + 1; j++) {
      dp[i].push("");
    }
  }

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      const a = expected[i - 1];
      const b = incoming[j - 1];

      if (a === b) {
        dp[i][j] = dp[i -1][j - 1];
      }
      else {
        dp[i][j] =  Math.min(dp[i - 1][j], dp[i - 1][j -1], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[expected.length][incoming.length];
}

export const wordErrorRate = (incoming: string, expected: string) => {
  const editDistance = calculateEditDistance(incoming, expected);
  const score = editDistance / Math.max(incoming.split(" ").length, expected.split(" ").length);
  return score;
}
