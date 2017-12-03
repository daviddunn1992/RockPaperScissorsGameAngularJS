function MainGameAction() 
{
   this.getWinner = function(Player1Choice,CPUplayerChoice){
    if (Player1Choice == CPUplayerChoice){
        return "Draw";
    }
    else if (Player1Choice == 0 && CPUplayerChoice == 1){
        return "CPU";
    }
    else if (Player1Choice == 0 && CPUplayerChoice == 2){
      return "Player";
    }  
    else if (Player1Choice == 1 && CPUplayerChoice == 0){
        return "Player";   
    }
    else if (Player1Choice == 1 && CPUplayerChoice == 2){
        return "CPU"; 
    }
    else if (Player1Choice == 2 && CPUplayerChoice == 0){
        return "CPU"; 
    }
    else if (Player1Choice == 2 && CPUplayerChoice == 1){
        return "Player";                                 
    }   
    else{
        return "CPU";
    }
  };


  getOutcomeImage = function(outcomeVar){
    if (outcomeVar == "Draw"){
      return "draw.jpg";
    }
    else if (outcomeVar == "Player"){
      return "won.gif";

    }
    else if (outcomeVar == "CPU"){
      return "lost.gif";
    }
    return "";

  }

  this.generateModal = function(choiceFromPlayer,choiceFromCPU,outcomeVar){
   
    if (choiceFromCPU != null && outcomeVar != null){
      return "<div class='modal fade' id='myModal' role='dialog'><div class='modal-dialog'><div class='modal-content'> <div class='modal-body'><p>"+"You chose "+ String(choiceFromPlayer) +"<br/>CPU chose "+ String(choiceFromCPU) + "</br></br>" +"<img src='./img/"+getOutcomeImage(outcomeVar) +"'> </p> </div><div class='modal-footer'><button type='button' class='btn btn-success' data-dismiss='modal'>Play Again</button></div></div></div></div>";
    }
    return "";
  };


}