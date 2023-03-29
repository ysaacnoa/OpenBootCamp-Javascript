let factorial=1;

for (let i = 0; i < 10; i++) {
  factorial*=(i+1); // 1=1*1 
                    //1=1*(2)
                    //2=2*(3)
                    //6=6*(4)
                    //24=24*(5)
                    //....
  console.log(factorial);
}