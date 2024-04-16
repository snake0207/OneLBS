export class HexGrid {
    constructor(_diameter) {
        var f0 = 3.0 / 2.0
        var f1 = 0.0
        var f2 = Math.sqrt(3.0) / 2.0
        var f3 = Math.sqrt(3.0)
        var radius = _diameter / 2.0

        this.gridToXY = function (_x, _y) {
            return this.cubeToXY(this.hexToCube(_x, _y))
        }

        this.hexToCube = function (_x, _y) {
            var q = _x
            var r = _y - parseInt(_x / 2)
            var s = -q - r
            return [q, r, s]
        }

        this.cubeToXY = function (_cube) {
            var x = (f0 * _cube[0] + f1 * _cube[1]) * radius
            var y = (f2 * _cube[0] + f3 * _cube[1]) * radius
            return [x, y]
        }

        this.getPolygonPaths = function (_hexX, _hexY) {
            return this.getCubePolygonPaths(this.hexToCube(_hexX, _hexY))
        }

        this.getCubePolygonPaths = function (_cube) {
            var corners = new Array(7)
            var center = this.cubeToXY(_cube)

            for (var i = 0; i < 6; i++) {
                var angle = (2.0 * Math.PI * -i) / 6.0
                var offsetX = radius * Math.cos(angle)
                var offsetY = radius * Math.sin(angle)
                corners[i] = {
                    x: (center[0] + offsetX).toFixed(6),
                    y: (center[1] + offsetY).toFixed(6),
                }
            }
            corners[6] = corners[0]
            return corners
        }

        this.getCubePolygonCenter = function (_hexX, _hexY) {
            return this.cubeToXY(this.hexToCube(_hexX, _hexY))
        }
    }
}

// export default { HexGrid }
