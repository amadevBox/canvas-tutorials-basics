const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()

const amountOfTrees = 1000
const [canvasWidth, canvasHeight] = [500, 500]
const [imgWidth, imgHeight] = [100, 200]
// size coefficients
const [minC, maxC] = [0.1, 0.2]

img.onload = () => {
  for (let i = 0; i < amountOfTrees; i++) {
    const x = (Math.random() * (canvasWidth - imgWidth * maxC))
    const y = (Math.random() * (canvasHeight - imgHeight * maxC))
    // to make top trees smaller than trees at the bottom, for visual effect
    const currentK = (y / canvasHeight) * (maxC - minC) + minC
    const treeWidth = imgWidth * currentK
    const treeHeight = imgHeight * currentK
    ctx.drawImage(img, x, y, treeWidth, treeHeight)
  }
}

img.src = './tree.png'
