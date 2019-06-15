class isFlie{
   constructor(file,options){
        this.filetype=file.type.match(/\/(\w+)$/i)[1];//获取图片类型
        this.filesize=file.size/1024/1024;//图片大小
        this.type=options.type;//默认类型
        this.size=options.size;//默认大小
        // console.log(this.isType(),this.isSize());
   }
   isType(){
       //判断类型
       return this.type.includes(this.filetype)
   }
   isSize(){
       //判断大小
       return this.size>this.filesize
   }
}


export default isFlie;
