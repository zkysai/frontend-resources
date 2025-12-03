/**
 目标：读取 test.txt 文件内容注意：代码中，使用绝对路径
 原因：Node.js执行时会以终端所在文件夹作为相对路径，
 去拼接代码中路径使用（导致找不到目标文件）解决：
 使用path.join（）和_dirname 来填写要查找的目标文件绝对地址
 */

//1.引入fs模块
const fs = require('fs');
console.log(fs);

//2.1写入方法,如果该文件不存在, 则会创建文件
// fs.writeFile('./test01.txt','你好 node',err=>{
//  console.log(err);//null ,如果写入成功, err为null
// });

//2.2 写入失败案例
// fs.writeFile('./顺丰到付顺丰/test02.txt','你好 node',err=>{
//  console.log(err); //写入失败
// })

/**
 *  {
 *   errno: -4058,
 *   code: 'ENOENT',
 *   syscall: 'open',
 *   path: 'D:\\WebstormProjects\\html_javascript_project\\v8dot6\\阶段04_项目一_数据可视化项目\\04-03 Node模块化\\day20-No
 * }
 */

//2.3 读取文件
fs.readFile('./test01.txt',(err,data)=>{
 //console.log(err); //null
 // Buffer数据流(UTF-8编码)
 //console.log(data);  //<Buffer e4 bd a0 e5 a5 bd 20 6e 6f 64 65>
 //console.log(data.toString());

 if(err){
  console.log(err);
 }else{
  console.log(data.toString());
 }
});
