const iArgv = process.argv.splice(2)

const obj = {
  'a': 1,
  '@': 2
}

switch (iArgv[0]) {
  case 'a':
    console.log(1)
    break

  default:
    break
}

console.log(obj)
