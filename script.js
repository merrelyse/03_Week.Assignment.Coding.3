//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes below here↓↓↓↓↓↓↓↓↓↓↓↓
const MIDIengine = class {
    constructor (
    input,
    output   
    ){
    this.MIDIin = `input`;  
    this.MIDIout = `output`;  
    this.running = false;
    }   
}
enable(on_off) {
this.running = on_off;
console.log(`The MIDI enigine is now ${this.running `on` , `off`}.`);
}
printInfo(){
console.log (`The MIDI engine has an input of ${this.MIDIin} and an output of ${this.MIDIout}`);   
}



//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//Do not edit below this comment!
const testMIDI = new MIDIengine("MAudio", "PreSonus Interface")
const testMIDI2 = new MIDIengine("OP-1","MOTU")
