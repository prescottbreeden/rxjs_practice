//import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        observer.next('Rubber baby buggy bumpers')
        setInterval(() => {
            observer.next('I am Chuck Norris')
        }, 2000)
    } catch(err) {
        observer.error(err)
    }
});

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001)


// Our handy function for showing the values:
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


