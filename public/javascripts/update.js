      var updateDB = function(){
        console.log('here');
        var update = {};

          update['title'] = document.getElementById('title').value.toString();
          update['category'] = document.getElementById('category').value.toString();
          update['locationCity'] = document.getElementById('city').value.toString();
          update['locationArea'] = document.getElementById('area').value.toString();
          update['date'] = document.getElementById('date').value.toString();
          update['time1'] = document.getElementById('time1').value.toString();
          update['time2'] = document.getElementById('time2').value.toString();
          update['description'] = document.getElementById('description').value.toString();

        update = JSON.stringify(update);
        console.log(update);
        var key = ref.push().key;
        console.log(key);
        ref.on('value',snap =>{
          console.log(snap.val());
        });
        try{
          update = JSON.parse(update);
        }catch(err){
          console.log(err);
        }
        try{
          ref.child(key).set(update);
        }catch(err){
          console.log(err);
        }
        console.log(update);
        console.log('Yay');
        //ref.push(update);
      }