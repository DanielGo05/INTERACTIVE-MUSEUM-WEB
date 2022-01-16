class Team{
    constructor(image, history, trophy){
      this.image = image;
      this.history = history;
      this.trophy = trophy;
    }
    getImage(){
      return this.image;
    }
    setImage( image ){
      this.image = image
    }
    getHistory(){
      return this.history;
    }
    setHistory( history ){
      this.history = history
    }
    getTrophy(){
      return this.trophy;
    }
    setTrophy( trophy ){
      this.trophy = trophy
    }
  }