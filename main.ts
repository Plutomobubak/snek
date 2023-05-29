
class coords {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
//vars
let dir = 0
let pos = new coords(2, 2);
let cells: Array<coords>=[pos];
let food = new coords(randint(0, 4), randint(0, 4));
//callbacks
input.onButtonPressed(Button.B, () => dir == 0 ? dir = 3 : dir--)
input.onButtonPressed(Button.A, () => dir == 3 ? dir = 0 : dir++)
//cycle
while(true) {
    pos.x += (dir - 2) % 2
    pos.y += (dir - 1) % 2
    pos.x > 4 ? pos.x = 0 : pos.x < 0 ? pos.x = 4 : 0
    pos.y > 4 ? pos.y = 0 : pos.y < 0 ? pos.y = 4 : 0
    for (let i = cells.length - 1; i > 0; i++) {
        cells[i] = cells[i - 1];
    }
    cells[0] = pos;
    for(let c=0;c<cells.length;c++)led.plot(cells[c].x,cells[c].y);
    if (pos.x == food.x && pos.y == food.y) {
        food.x = randint(0, 4), food.y = randint(0, 4)
        cells.push(new coords(4, 4));
    }
    led.plot(food.x, food.y);
    pause(500);
    led.unplot(pos.x, pos.y);
}
