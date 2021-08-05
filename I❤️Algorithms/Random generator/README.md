## Random number generator ##

This is the type of algorithm I love. They are apparently useless but once implemented they can be used for many things. And they are beautiful.

The goal is to create a function that returns a certain amount of different numbers between a maximum and minimum.

The function will have the following signature 

```
var randomPick = (n, min, max) => {...}. 
```

Using the function above, if we want to pick 10 random numbers between 1 and 100, we will use it like this:

```
randomPick (10, 1, 100);
```

This will return something like this:

```
[24, 83, 2, 94, 84, 38, 23, 69, 16, 89]
```
