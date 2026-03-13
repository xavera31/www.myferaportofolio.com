let orbitAngle = 0
orbitAngle += 0.002
planet.position.x = Math.cos(orbitAngle) * 3
planet.position.z = Math.sin(orbitAngle) * 3 - 3
console.assert(typeof orbitAngle === "number", "orbitAngle should be defined")
console.assert(typeof animate === "function", "animate function should exist")
console.assert(scene instanceof THREE.Scene, "scene should be THREE.Scene")