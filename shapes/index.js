const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'
ctx.fillRect(50, 50, 100, 100)

ctx.strokeStyle = 'blue'
ctx.lineWidth = 5
ctx.strokeRect(25, 25, 150, 150)
ctx.clearRect(100, 100, 150, 150)

ctx.strokeStyle = 'green'
ctx.arc(250, 250, 100, Math.PI, 2 * Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.arc(250, 250, 50, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.moveTo(350, 350)
ctx.lineTo(450, 350)
ctx.lineTo(450, 450)
ctx.lineTo(350, 350)
ctx.fillStyle = 'orange'
ctx.fill()
