let a; // now its type is any
a = "abc";
let b = (a as string).endsWith("b");
let c = (<string>a).endsWith("c");
