
class QueueElement {
  constructor(elem, priNo) {
  this.element = elem;
  this.priority = priNo;
  }
}

class PriorityQueue {
  constructor() {
    this.queArr = [];
  }
  put(elem, priNo) {
    let queueElem = new QueueElement(elem, priNo);
    let contain = false;
    for (let i = 0; i < this.queArr.length; i++) {
      if (this.queArr[i].priority > queueElem.priority) {
        this.queArr.splice(i, 0, queueElem);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.queArr.push(queueElem);
    }
  }
  get() {
    if (this.isEmpty()) return null;
    return this.queArr.shift();
  }
  front() {
    if (this.isEmpty()) return 'No elements in Queue';
    return this.queArr[0];
  }
  rear() {
    document.write('</br>The rear element of the priority queue is : ');
    if (this.isEmpty()) return 'The Queue is Empty..!';
    return this.queArr[this.queArr.length - 1];
  }
  isEmpty() {
    return this.queArr.length == 0;
  }
  display() {
    document.write('The Elements in the priority queue are : </br>');
    let res_Str = '';
    for (let i = 0; i < this.queArr.length; i++)
      res_Str += this.queArr[i].element + ' ';
    return res_Str;
  }
}

function aStar(grid, startNode, endNode) {
  var count = 0;
  var openSet = new PriorityQueue()
  openSet.put((count, startNode), 0)
  var cameFrom = {}
  var openSetHash = []
  var fScore = []
  var gScore = []
  var INFINITY = Math.pow(10,1000)
  for (const row of grid){
    let tempRow = []
    for (const col of row){
      tempRow.push(INFINITY)
    }
    fScore.push(tempRow)
    gScore.push(tempRow)
    fScore[startNode.row][startNode.col] = hScore(startNode, endNode)
    gScore[startNode.row][startNode.col] = 0
    
  }

  while (openSetHash){
    let currentNode = openSet.get()
    openSetHash = openSetHash.filter(node => node.id !== currentNode.id)
  }

}

function hScore(node1, node2){
  return Math.abs(node1.row - node2.row) + Math.abs(node1.col - node2.col)
}

// def algorithm(draw, grid, start, end):
//     count = 0
//     open_set = PriorityQueue()
//     open_set.put((0, count, start))
//     came_from = {}

//     g_score = {node: float("inf") for row in grid for node in row}
//     f_score = {node: float("inf") for row in grid for node in row}
//     f_score[start] = h(start.get_pos(), end.get_pos())
//     g_score[start] = 0

//     open_set_hash = {start}

//     while not open_set.empty():
//         for event in pygame.event.get():
//             if event.type == pygame.QUIT:
//                 pygame.quit()

//         current = open_set.get()[2]
//         open_set_hash.remove(current)
//         if current == end:
//             end.end()

//             reconstruct(came_from, end, draw)
//             start.start()
//             return True
//         for neighbor in current.neighbor:
//             temp_g = g_score[current] + 1

//             if temp_g < g_score[neighbor]:
//                 g_score[neighbor] = temp_g
//                 came_from[neighbor] = current
//                 f_score[neighbor] = g_score[neighbor] + h(
//                     neighbor.get_pos(), end.get_pos())

//                 if neighbor not in open_set_hash:
//                     count += 1
//                     open_set.put((f_score[neighbor], count, neighbor))
//                     open_set_hash.add(neighbor)
//                     neighbor.open()
//         draw()

//         if current != start:
//             current.close()
//     return False
