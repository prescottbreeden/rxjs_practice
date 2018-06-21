//import * as Rx from "rxjs/Observable";
import { Observable, fromEvent } from "rxjs";

var observableHot = fromEvent(document, 'mousemove')

setTimeout(() => {
    var subscription = observableHot.subscribe (
        (x: any) => addItem(x)
    )
}, 2000);
 
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
})

var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    var ovserver2 =  observable.subscribe(
        (x: any) => addItem('Subscriber 2: ' + x)
    )
}, 1000)


// Our handy function for showing the values:
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


