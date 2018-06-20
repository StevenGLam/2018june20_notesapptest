console.log(uuidv4());


let getSavedNotes = function(){

let notesJSON = localStorage.getItem('notes');

if(notesJSON !== null){
    
 return JSON.parse(notesJSON); 
} else{
    
     return [];
}
    
    
    }

//generate dom structure for a note

let generateNoteDom = function(note){
    
    let button = document.createElement('button');
    let textEl = document.createElement('span');
    let noteEl = document.createElement('div');
    
        
    button.textContent='x';
    
     noteEl.appendChild(button);
    
        if(note.title.length > 0 ){
            
           textEl.textContent = note.title; 
        } else{
            
            textEl.textContent = 'unnamed note';
        }
    
    noteEl.appendChild(textEl);
       return noteEl; 
}

//Render App notes
let renderNotes = function(pic, filters){
  
    let filtered = pic.filter((note) => {
        
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    document.querySelector('#chassis').innerHTML='';
    
    
    filtered.forEach((note) => {
        
        let noteEl = generateNoteDom(note);
        document.querySelector('#chassis').appendChild(noteEl);
    })
    
}



