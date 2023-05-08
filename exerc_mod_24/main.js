function Animals(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.speak = function(){
        console.log(this.name + " diz Olá");
    }
}

function Cats (name, age, weight, breed){
    this.breed = breed;
    Animals.call(this, name, age, weight);
    this.sound = function(){
        console.log("Miauuu")
    }
}

function Dogs (docile, name, age, weight, breed){
    this.docile = docile;
    Cats.call(this, name, age, weight, breed);
    this.sound = function(){
        if(docile==='yes'){
            console.log("au! au! ")
        }else{
            console.log("ão! ão! rrrrr! ")
        }
    }

}

const cats1 = new Cats("Soneca", 2 ,"2 kg", "Siamês");
const dogs1 = new Dogs("yes","Guito",8,"2 kg","Maltês");
const dogs2 = new Dogs("no","Agatha",7,"20kg kg","Rottweiler");


console.log(cats1);
console.log(dogs1);
console.log(dogs2);



cats1.speak();
cats1.sound();

dogs1.speak();
dogs1.sound();

dogs2.speak();
dogs2.sound();
