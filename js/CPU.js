function CPU() 
{
  this.chosenOption = null;

  this.getOption = function() {
    var randomInt = Math.floor(Math.random() * 3);
    this.chosenOption = randomInt;
    return randomInt;
  };
           
  this.getOptionChosenName = function() {
    return arrayOfChoices[this.chosenOption]
  };

}