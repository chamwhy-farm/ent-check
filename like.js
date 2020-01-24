$(document).ready(function(){

  if(Entry.projectId != undefined){
    var id = Entry.projectId;
    checkLike(id);
    checkFavorite(id);
    $(".likeBtn").click(function(){
      checkLike(id);
    });
    $(".interestBtn").click(function(){
      checkFavorite(id);
    })
  }
});

function checkLike(id){
  console.log("likeBtn is clicked");
  $.ajax({
    url: `https://playentry.org/api/project/likes/${id}?rows=100000000000000&targetSubject=project&targetType=individual`,
    dataType:"json",
    type:"GET",
    success:
    function(data){
      for(var i = 0; i<data.length;i++){
        if(data[i].user.username == window.user.username){
          break;
        }
      }
      Entry.variableContainer.getVariableByName("entLike").setValue((i!=data.length) ? "1" : "0");
      console.log(Entry.variableContainer.getVariableByName("entLike").value_);
    }
  });
}

function checkFavorite(){
  console.log("favorBtn is clicked");
  $.ajax({
    url: `https://playentry.org/api/project/favorites/${id}?rows=100000000000000&targetSubject=project&targetType=individual`,
    dataType:"json",
    type:"GET",
    success:
    function(data){
      for(var i = 0; i<data.favorites.length;i++){
        if(data.favorites[i].user.username == window.user.username){
          break;
        }
      }
      Entry.variableContainer.getVariableByName("entFavor").setValue((i!=data.favorites.length) ? "1" : "0");
      console.log(Entry.variableContainer.getVariableByName("entLike").value_);
    }
  });
}



//(t,e){var o=e.getField("VARIABLE",e),r=e.getValue("VALUE",e);return Entry.variableContainer.getVariable(o,t).setValue(r),e.callReturn()}
// console.log("like System is start");
// console.log(Entry);
//
