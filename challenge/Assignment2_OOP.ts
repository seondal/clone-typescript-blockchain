type Words = {
    [key: string]: string;
  };
  
  class Word {
    constructor(
      public term: string,
      public def: string
    ) {}
  }
  
  class Dict {
    private words: Words
    constructor () {
      this.words = {}
    }
    add(term: string, def: string) {
      if(!this.words[term]) {
        this.words[term] = def;
      }
    }
    get(term: string) {
      return this.words[term]
    }
    delete(term: string) {
      delete this.words[term];
    }
    update(term: string, newDef: string) {
      if(this.words[term]) {
        this.words[term] = newDef;
      }
    }
    showAll() {
      Object.keys(this.words).forEach((term) =>
        console.log(`${term} : ${this.words[term]}`)
      );
    }
    count() {
      return Object.keys(this.words).length;
    }
  }
  
  
  const dict = new Dict()
  
  dict.add("김치", "밋있는 한국 음식");
  dict.showAll();
  console.log(dict.count());
  dict.update("김치", "밋있는 한국 음식!!!");
  console.log(dict.get("김치"));
  dict.delete("김치");
  console.log(dict.count());