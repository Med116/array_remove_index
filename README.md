array_remove_index
==================

removes an index of an array, using array splice and concat, returns new array, only works on deduped arrays

#install

   npm install remove_array_index
   
#example use



    var arrayRemoveIndex = require("remove_array_index");
    
    var arr = ["a","b","c"];
    
    var newArr = arrayRemoveIndex(arr,indexOf("b"))
    
    console.log(newArr);
    
    > ["a","c"]
