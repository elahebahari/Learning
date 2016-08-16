angular.module('myApp').factory('postService',function(){
  return{
    getPosts:function(){
      return[
        {id:'1',title:'t1',body:'some text here for t1',author:'Elahe Bahari'},
        {id:'2',title:'t2',body:'some text here for t2',author:'Idin Khayami'},
        {id:'3',title:'t3',body:'some text here for t3',author:'Amir Daliri'},
        {id:'4',title:'t4',body:'some text here for t4',author:'Danial vahdat'}
      ];
    }
  };
});
