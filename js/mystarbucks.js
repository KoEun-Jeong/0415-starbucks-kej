//VISUAL

/*
순서대로 나타나는 기능

gsap.to(요소,지속시간,옵션)

*/

//나타날 요소들(.fade-in) 찾기
const fadeEls=document.querySelectorAll(".visual .fade-in");
console.log(fadeEls);

//나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl,index){
    // fadeEl > 요소명 , index:색인번호
    console.log(fadeEl);
    console.log(index);

    // 각 요소들을 순서대로(dalat:지연) 보여지게함
    gsap.to(fadeEl,1,{
        delay:(index+1) * 0.7, //0.7,1.4,2.1,2.8호 후에 
        opacity:1
    });
});
