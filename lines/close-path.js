const canvas2 = document.getElementById('second-canvas')
const ctx2 = canvas2.getContext('2d')

ctx2.beginPath()

ctx2.moveTo(100, 100)
ctx2.lineTo(400, 100)
ctx2.lineTo(400, 400)

ctx2.lineWidth = 5
ctx2.strokeStyle = 'red'

ctx2.closePath()
ctx2.stroke()
