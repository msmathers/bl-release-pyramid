function sortReleases(releases) {
  var sortedReleases = releases.slice()
  sortedReleases.sort(function(x, y) { return y.length > x.length ? 1 : -1 })
  var pyramid = new Array(releases.length - 1)
  for (var n=0; n<pyramid.length; n+=2) {
    pyramid[n/2] = sortedReleases[n]
    if (n+1 < releases.length) {
      pyramid[releases.length - 1 - (n/2)] = sortedReleases[n+1]
    }
  }
  return pyramid
}

function parseReleases(textarea) {
  return textarea.value
    .split('\n')
    .map(function(x) { return x.trim() })
    .filter(function(x) { return !!x })
}

function updateOutput(textarea, output) {
  var releases = parseReleases(textarea)
  var sortedReleases = sortReleases(releases)
  output.textContent = sortedReleases.join('\n')
}

(function() {
  var textarea = document.getElementById('input-textarea')
  var output = document.getElementById('output')
  textarea.addEventListener('input', function() {
    updateOutput(textarea, output)
  })
  updateOutput(textarea, output)
})()
