//1zad:
function sum(arr){
    let num1=Number(arr[0]);
    let num2=Number(arr[1]);
    let num3=Number(arr[2]);

    let sum=num1+num2+num3;
    console.log(sum);
}
sum(['2','3','4']);

//2zad:
function calcSumAndVat(arr){
    let sum=0;
    for(let price of arr){
        sum+= Number(price);
    }
    console.log({sum});

    let vat=sum*0.2;
    console.log({vat});

    let total=sum+vat;
    console.log({total});
}
calcSumAndVat(['1.20','3.60','4.80']);

//3zad:
function countLetter([string,letter]){
    let count=0;

    for(let char of string){
        if(char==letter){
            count++;
        }
    }
    console.log({count});
}
countLetter(['hello','l']);
//4zad:
function figureArea([w,h,W,H]){
    let fig1Area=Number(w)+Number(h);
    let fig2Area=Number(W)+Number(H);

    let commonArea=Math.min(Number(w),Number(W)* Math.min(Number(h).Number(H)));
    let figureArea=fig1Area+fig2Area-commonArea;
    console.log(figureArea);
}
figureArea(['2','4','5','3']);

//5zad:
function leapYear(year){
    let condOne= year%4==0&&year%100!=0;
    let condTwo=year%400==0;
    if(condOne||condTwo){
        console.log('Yes');
        return;
    }
    console.log('No');
}
leapYear(1999);
leapYear(2000);

//6zad:
function stringOfNumber(lastNum){
    let result='';
    for(let i=1;i<=lastNum;i++){
        result+=i;
    }
    console.log(result);
}
stringOfNumber(10);
stringOfNumber(20);

//7zad:
function distancePoints([x1,y1,x2,y2]){
    let vectOne=Math.pow((Number(x2)-Number(x1)),2);
    let vectTwo=Math.pow((Number(y2)-Number(y1)),2);
    let result=Math.sqrt(vectOne+vectTwo);
    console.log(result);
}
distancePoints(['2','4','5','0']);

//8zad:
function boxesAndBottles(bottles,capacity){
    let result=Math.ceil(bottles/capacity);
    console.log(result);
}
boxesAndBottles(20,5);
boxesAndBottles(15,7);
//9zad:
function triangleArea(arr){
    arr=arr.map(Number);//tazi funkciq map shte vyrne nov masiv i shte go prevyrne v chislo;

    let sideA=arr[0];
    let sideB=arr[1];
    let sideC=arr[2];

    let semiperim=(sideA+sideB+sideC)/2;
    let area=Math.sqrt(semiperim*(semiperim-sideA)*(semiperim*(semiperim-sideB)*(semiperim*(semiperim-sideC));

    console.log(area);
}
triangleArea(['3','4','5']);
//10zad.homew
function VolCone([radius, h]){
	[radius, h] = [radius, h].map(Number);
	
	let pi = 3.14;
	let onethird = 0.33;
	let VolCone = onethird * pi * [radius] * Math.pow([h], 2);
    let basesurfaceA = pi * Math.pow([radius], 2);
    let literalsurfaceA = pi * [radiuss] * basesurfaceA;
    let area = basesurfaceA + literalsurfaceA;


	console.log('Обемът на конуса е:' + VolCone); console.log('Повърхнината е:' + area);
}
 
 
VolCone(['4', '8']);

//11zad:
function oddOrEven(number){

    if(number%1==0){
        if(number%2==0){

            console.log("event");
        }else{
            console.log("odd");
        }

    }else{
        console.log('invalid number');
    }
}
oddOrEven(2);
oddOrEven(3.2);
//12zad.homework
function simpleNum(num) {

    if (num === 2) {
      return 'Числот е просто.';
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return 'Числото е просто';
        } else {
          return 'Числото не е просто';
        }
      }
    } 
  
  }
  
  console.log(simpleNum(2));
  console.log(simpleNum(25));
  console.log(simpleNum(31));


//13zad:ще я обясни следващия път
function distanceTime([speed1,speed2,timeInseconds]){
    S=V*T
}
//14zad:
function props(arr){
    let object={};//deklarirame si obekt
    object[arr[0]]=arr[1]; //prisvoqvame na obekta svoistvo;
    object[arr[2]]=arr[3];
    object[arr[4]]=arr[5];

    console.log(object);
}
props(['name','pesho','age','23','street','pobeda']);

//15zad:
function biggest([num1,num2,num3]){
    [num1,num2,num3]=[num1,num2,num3].map(Number);
    console.log(Math.max(num1,num2,num3));
}
biggest(['-2','56','78']);
biggest(['5','-56','744']);

//16zad:
function calculate([a,b,op]){
    [a,b]=[a,b].map(Number);

    let add=function(a,b){
        return a+b;
    }
    let subtract=function(a,b){
        return a-b;
    }
    let multiply=function(a,b){
        return a*b;
    }
    let devide=function(a,b){
        return a/b;
    }
    let calc=function(a,b,op){return op(a,b);}
    switch(op){
        case'+':return calc(a,b,add);
        case'-':return calc(a,b,subtract);
        case'*':return calc(a,b,multiply);
        case'/':return calc(a,b,devide);
        
    }
}
console.log(calculate(['2','4','+']));
console.log(calculate(['4','4','-']));
console.log(calculate(['4','4','*']));
console.log(calculate(['4','4','/']));
//17зад.за домашно!
function upperCase(String){
   
    console.log(String.toUpperCase());
}
upperCase('Hello');
