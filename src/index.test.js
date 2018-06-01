import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';  // fs comes from node and stands for file system. Interact with the file system using node

describe('Our first test', ()=> {
  it('should pass', ()=> {
    expect(true).to.equal(true);
  });
});


describe('index.html', ()=>{
  it('should say God Bless You', (done)=>{
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("God Bless You");
      done();
      window.close();
    });
  });
});
