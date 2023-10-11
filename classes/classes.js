class Clock { 

    //define constructor for Clock object with template object as an parameter
      constructor ({template}) { 
        this.template = template;
        this.timer = null; 
      }

     
        render() {
    
          //create new DATE object (which holds actual hours,minutes and seconds, ...)
         let date = new Date();
    
         //variable hours which will hold the hours parameter of DATE object
          let hours = date.getHours();
    
         if (hours < 10) hours = '0' + hours;
    
          //variable mins which will hold the minutes parameter of DATE object
          let mins = date.getMinutes();
    
         if (mins < 10) mins = '0' + mins;
    
          //variable secs which will hold the seconds parameter of DATE object
          let secs = date.getSeconds();
    
         if (secs < 10) secs = '0' + secs;
    
    
          //variable output which holds the output logic
          let output = this.template
    
           .replace('h', hours)
    
           .replace('m', mins)
    
           .replace('s', secs);
    
          console.log(output);
    
       }
           //define START method of the template
           start () {
     
            this.render();
       
            this.timer = setInterval(() =>
             this.render(), 1000)};

        //define stop method of the template
        stop() {
    
          clearInterval(this.timer);
  
        }
      };
    
      //create new Clock object with template constructor called
      let clock = new Clock({template: 'h:m:s'});
    
     clock.start();