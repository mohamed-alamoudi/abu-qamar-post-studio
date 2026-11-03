export const BRAND={blue:'#054474',orange:'#F74C05',red:'#C50610',gold:'#DABD05',mist:'#EAF1F8',ink:'#0B2A45',logo:'/brand/c0623626-ad80-4330-bcbb-e072e8d6210f.png'};
export function frame(ctx:CanvasRenderingContext2D,w:number,h:number,logo:HTMLImageElement,footer:string){
 ctx.save();ctx.scale(w/1080,h/1350);
 const box=(x:number,y:number,width:number,height:number,r:number,color:string)=>{ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,width,height,r);ctx.fill()};
 box(880,17,161,184,36,'#fff');box(905,195,111,6,3,BRAND.orange);const lh=150,lw=lh*logo.width/logo.height;ctx.drawImage(logo,960-lw/2,29,lw,lh);
 box(36,1222,1008,92,46,'#fff');box(73,1222,934,5,2,BRAND.orange);ctx.textAlign='right';ctx.direction='rtl';ctx.fillStyle=BRAND.ink;ctx.font='500 23px Tajawal';const address=footer.split('\n')[0].replace(/^📍\s*/,'');ctx.fillText(address,1010,1278,570);ctx.fillStyle=BRAND.blue;ctx.font='700 24px Cairo';ctx.direction='ltr';ctx.textAlign='left';ctx.fillText('+972 597797247',70,1278,320);ctx.restore();
}
export function productLabel(ctx:CanvasRenderingContext2D,w:number,h:number,name:string,weight:string,price:string){
 ctx.save();ctx.scale(w/1080,h/1350);ctx.direction='rtl';ctx.textAlign='center';
 ctx.fillStyle=BRAND.orange;ctx.beginPath();ctx.roundRect(191,79,260,76,[0,38,0,38]);ctx.fill();ctx.fillStyle='white';ctx.font='900 32px Cairo';ctx.fillText('متوفر الآن',321,129);
 if(name){ctx.fillStyle=BRAND.blue;ctx.beginPath();ctx.roundRect(191,177,365,90,40);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.roundRect(191,171,365,90,40);ctx.fill();ctx.fillStyle=BRAND.blue;ctx.font='900 42px Cairo';ctx.fillText(name,373,231,320)}
 if(weight){ctx.fillStyle=BRAND.ink;ctx.font='500 26px Tajawal';ctx.fillText(weight,373,307,340)}
 if(price!==''){ctx.fillStyle=BRAND.gold;ctx.beginPath();ctx.arc(210,423,91,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(210,423,85,0,Math.PI*2);ctx.fill();const g=ctx.createRadialGradient(190,390,0,210,423,79);g.addColorStop(0,'#E5202B');g.addColorStop(1,BRAND.red);ctx.fillStyle=g;ctx.beginPath();ctx.arc(210,423,79,0,Math.PI*2);ctx.fill();ctx.fillStyle='#FFE9A8';ctx.font='700 20px Tajawal';ctx.fillText('السعر',210,390);ctx.fillStyle='#fff';ctx.font='900 44px Cairo';ctx.fillText(price,210,441,135);ctx.font='900 24px Cairo';ctx.fillText('₪',210,477)}ctx.restore();
}
