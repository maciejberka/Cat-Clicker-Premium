//MODEL object contain data using by app

const model = {
  
  cats: [
    {
      name: 'Puszek',
      clicks: 0,
      image: 'img/cat_1.jpg'
    },
    
    {
      name: 'Marta',
      clicks: 0,
      image: 'img/cat_2.jpg'
    },
    
    {
      name: 'Filemon',
      clicks: 0,
      image: 'img/cat_3.jpg'
    },
    
    {
      name: 'Kracy',
      clicks: 0,
      image: 'img/cat_4.jpg'
    },
    
    {
      name: 'Janusz',
      clicks: 0,
      image: 'img/cat_5.jpg'
    } 
  ]
  
};

//OCTOPUS object contain methods which are using to communicate MODEL object and VIEW objects

const octopus = {
  
  getCats: function() {
    return model.cats;
  }
  
};

//VIEW objects contain methods using to render view for a user

const listView = {
  
  render: function(){
    //Our <ul>
    const catsList = document.querySelector('.cats-list');
    //Get the array of cats to this variable using octopus's method. We do this cause we don't want to let View objects talk directly with Model object
    const cats = octopus.getCats();
    
    //Iterate trough array of cats...
    for(cat of cats){
      listElement = document.createElement('li');
      listElement.textContent = cat.name;
      
      listElement.addEventListener('click', function(){
        //render areaView for clicked list element
      });
      
      //Add element to the <ul>
      catsList.appendChild(listElement);
    }
  }
    
};

const areaView = {
  
};












