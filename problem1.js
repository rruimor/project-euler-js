var sum = 0, limit = 1000;

for(var i = 1; i < limit; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

print(sum);