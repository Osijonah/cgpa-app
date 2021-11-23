let addSemester = document.querySelector('.add-semester');
addSemester.addEventListener('click', function(){
   let divBody = document.getElementById('body');
   let newSemester = document.querySelector('.semester');
   newSemester.innerHTML = '<h2>Semester 1</h2><div></div>';
   console.log('Amen');
});

let addCourse = document.querySelector('.add-course');
   addCourse.addEventListener('click', function () {
   // newSemester.div.setAttribute('class', 'course');
   let divSelect = document.getElementsByTagName('div')[2];
   table = document.createElement('table');
   table.setAttribute('class', 'float');
   table.innerHTML = '<thead><tr><th colspan="2">Course</th></tr></thead><tbody><tr><td><select name="" id=""><option value="">Grade</option><option value="">A</option><option value="">B</option><option value="">C</option><option value="">D</option><option value="">E</option><option value="">F</option></select></td><td><select name="" id=""><option value="">Unit</option><option value="">1</option><option value="">2</option><option value="">3</option><option value="">4</option><option value="">6</option></select></td></tr></tbody>'
   divSelect.appendChild(table);
   // divSelect.innerHTML = '<table class="float"><thead><tr><th colspan="2">Course</th></tr></thead><tbody><tr><td><select name="" id=""><option value="">Grade</option></select></td><td><select name="" id=""><option value="">Units</option></select></td></tr></tbody></table>'
});
