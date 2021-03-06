
class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear()
  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peakTime = false) {
    return peakTime ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3);
  }

}
