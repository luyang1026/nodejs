class PraiseBtn (){
  constructor (num, ele) {
    this.num = num
    this.ele = ele
  }
  clickAction () {
    this.ele.click(() => {
      if(this.num<10){
        this.num++
      }else{
        this.num=0
      }
    })
  }
}