const canvas = document.getElementById('particles')
const ctx = canvas.getContext('2d')

const COLORS = [
  '--color-charcoal',
  '--color-cadet',
  '--color-powder-blue',
  '--color-ghost-white',
  '--color-celadon',
  '--color-shadow-blue',
  '--color-ksu-purple',
  '--color-mauve'
]
const CHARS = ['🎉', '💿', '🏈', '🎹', '👓', '🌞', '🍟', '⚽', '♟']

const PARTICLE_RADIUS = 2
const UPDATE_TIMEOUT = 1000/60

const drawCircle = (x, y, color) => {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.arc(x, y, PARTICLE_RADIUS, 0, Math.PI * 2);
  ctx.stroke()
  ctx.fill()
}

const drawText = (text, x, y, size) => {
  ctx.font = `${size}px sans-serif`
  ctx.fillStyle = 'black'
  ctx.fillText(text, x, y);
}

const getInteractionPointFromEvent = (event) => {
  if (event.clientX) {
    return [event.clientX, event.clientY]
  }

  if (event.changedTouches && event.changedTouches[0]) {
    const touch = event.changedTouches[0]
    return [touch.clientX, touch.clientY]
  }
}

const randomDelta = () => {
  return (Math.random() > .5 ? 1 : -1) * (Math.random() * 2 + .5)
}

const lifeToAlpha = (life) => {
  const change = Math.abs(Math.sin(life * Math.PI / 360))
  return Math.round(change * 0xFF).toString(16).padStart(2, '0')
}

if (ctx) {
  const computedStyle = getComputedStyle(document.documentElement)
  const colors = COLORS.map(c => computedStyle.getPropertyValue(c))

  let stageWidth = window.innerWidth
  let stageHeight = window.innerHeight
  let maxParticles = Math.round(stageWidth * 0.08)

  const handleResize = () => {
    stageWidth = window.innerWidth
    stageHeight = window.innerHeight
    maxParticles = Math.round(stageWidth * 0.08)
    canvas.setAttribute('width', stageWidth)
    canvas.setAttribute('height', stageHeight)
  }
  window.addEventListener('resize', handleResize)
  handleResize()

  let particles = []

  let mouseX = 0, mouseY = 0
  let spawnGoodies = false
  let tick = 0

  const setMousePositionFromInteractionEvent = event => {
    const point = getInteractionPointFromEvent(event)
    mouseX = point[0]
    mouseY = point[1]
  }
  const startBurst = (event) => {
    spawnGoodies = true
    setMousePositionFromInteractionEvent(event)
  }
  const adjustBurst = event => {
    setMousePositionFromInteractionEvent(event)
  }
  const stopBurst = () => spawnGoodies = false

  window.addEventListener('mousedown', startBurst)
  window.addEventListener('mousemove', adjustBurst)
  window.addEventListener('mouseup', stopBurst)
  window.addEventListener('touchstart', startBurst)
  window.addEventListener('touchmove', adjustBurst)
  window.addEventListener('touchend', stopBurst)

  const update = () => {
    tick += 1

    if (particles.length <= 200) {
      const particle = {
        type: 'circle',
        x: Math.round(Math.random() * stageWidth),
        y: Math.round(Math.random() * stageHeight),
        dx: randomDelta(),
        dy: randomDelta(),
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
      }
      particles.push(particle)
    }

    if (spawnGoodies && tick % 6 === 0) {
      const particle = {
        type: 'char',
        x: mouseX + Math.round(Math.random() * 10 - 5),
        y: mouseY + Math.round(Math.random() * 10 - 5),
        dx: Math.random() * 10 - 5,
        dy: -5,
        size: Math.round(Math.random() * 12) + 20,
        life: 0,
        gravity: 0.3,
        text: CHARS[Math.floor(Math.random() * CHARS.length)],
      }
      particles.push(particle)
    }

    particles = particles.filter(p => {
      if (p.x < 0 || p.x > stageWidth || p.y < 0 || p.y > stageHeight)
        return false

      return true
    })
    particles.forEach(p => {
      p.x += p.dx
      p.y += p.dy
      p.life += 1

      if (p.gravity) {
        p.dy += p.gravity
      }
    })
    setTimeout(update, UPDATE_TIMEOUT)
  }
  update()

  const draw = () => {
    ctx.clearRect(0, 0, stageWidth, stageHeight)
    particles.forEach(p => {
      if (p.type === 'circle') {
        drawCircle(p.x, p.y, `${p.color}${lifeToAlpha(p.life)}`)
      } else if (p.type === 'char') {
        drawText(p.text, p.x, p.y, p.size)
      }
    })
    requestAnimationFrame(draw)
  }
  requestAnimationFrame(draw)
}