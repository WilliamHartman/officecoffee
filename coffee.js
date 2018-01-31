function CoffeeSolver() {
    let solution = null;

    this.traverse = (column, row, counter, office) => {
        let newOffice = office.map( arr => arr.slice())
        
        if(office[column][row] === 'C') {
            if(counter < solution || solution === null){
              solution = counter;
            }
        } else if(newOffice[column][row] === '-') {
            counter++;
            newOffice[column][row] = 'v';
            if(column < office.length - 1) {
                this.traverse(column + 1, row, counter, newOffice);
            }
            if(row < office[column].length - 1) {
                this.traverse(column, row + 1, counter, newOffice);
            }
            if(column > 0) {
                this.traverse(column - 1, row, counter, newOffice);
            }
            if(row > 0) {
                this.traverse(column, row - 1, counter, newOffice);
            }
        }
        this.solution = solution;
    }
}





module.exports = {
    distanceToCoffee: (numRows, numColumns, deskLocation, coffeeLocations, walls) => {
        let office = [];
        
        //Create 2d array of specified size full of desks '-'
        for(let i=0; i < numRows; i++){
          office.push([])
          for(let j=0; j < numColumns; j++){
            office[i].push('-');
          }
        }
        
        //Add coffee machines
        for(let i=0; i < coffeeLocations.length; i++){
          office[coffeeLocations[i][0]][coffeeLocations[i][1]] = 'C';
        }
        
        //Add walls
        for(let i=0; i < walls.length; i++){
          office[walls[i][0]][walls[i][1]] = 'X';
        }
                
        let ms = new CoffeeSolver();
        ms.traverse(deskLocation[0], deskLocation[1], 0, office)
        return ms.solution;
      }
};