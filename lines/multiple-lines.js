const canvas = document.getElementById('first-canvas')
const ctx = canvas.getContext('2d')

const step = 75
let x = 100

const colors = ['red', 'green', 'blue', 'pink', 'orange']

for (let i = 0; i < colors.length; i++) {
  ctx.beginPath()
  ctx.moveTo(x + (i * step), 100)
  ctx.lineTo(x + (i * step), 400)
  ctx.lineWidth = 3 + (i * 3)
  ctx.strokeStyle = colors[i]
  ctx.stroke()
}
