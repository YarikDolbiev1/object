let student = {
     name: "Nicol",
    age: 15,
    marks: [4, 4, 5],
    show : function(){
        alert("Бип");
        alert(this.name + " " + this.age);
    },
    toString: function() {
        return "Студент" + this.name + " " + this.age;

    }
};
for (let prop in chevy){
    console.log(prop + ": " + chevy[prop]);
}
for (const key in student){
    console.log(student[key]);
    
}

console.log(student.marks.length);
for (let i = 0;i<student.marks.length;i++){
    console.log(student.marks[1]);
}
console.log(chevy.make);
console.log(student);
alert(student);
alert(student.name);
student.show();