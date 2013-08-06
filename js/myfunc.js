demo1=function(){
var script1="var norm = new NormalDistribution(0,1) // normal distribution"+"\n"+"var q = norm.getQuantile(0.95);        // the 0.95 quantile"+"\n"+"alert(q);                              // output the result";
document.getElementById('edit').innerHTML=script1;
}
demo2=function(){
var script2="// Calculate the cumulative density of a beta distribution"+"\n"+"var cumulative = jstat.pbeta(0.5, 2.3, 4.1);"+"\n"+"alert(cumulative);  // output the result";
document.getElementById('edit').value=script2;
}
demo3=function(){
var script3="// generate 100 points betwen -5 and 5"+"\n"+"var range = jstat.seq(-5,5,100);"+"\n"+"// calculate the densities at each point"+"\n"+"var densities = jstat.pnorm(range, 0.0, 1.0);"+"\n"+"// produce the plot (no formatting)"+"\n"+"jstat.plot(range, densities);";
document.getElementById('edit').value=script3;
}
demo4=function(){
var script4="// generate random interger(0 to 19)"+"\n"+"var x = jstat.seq(1,10,10)"+"\n"+"var y = ["+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+","+Math.floor(20*Math.random())+"];"+"\n"+"// ploting x and y"+"\n"+"jstat.plot(x, y);";
document.getElementById('edit').value=script4;
}
function go_bottom(targetId){
    var obj = document.getElementById(targetId);
    if(!obj) return;
    obj.scrollTop = obj.scrollHeight;
}

start=function(){
var script=document.getElementById('edit').value;
eval(script);
document.getElementById('history').innerHTML=document.getElementById('history').innerHTML+"\n"+script;
go_bottom("history");
sh_highlightDocument();
}