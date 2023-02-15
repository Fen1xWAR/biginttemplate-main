var BIGNUMS=[];
function my_first_function(e){
	console.log(arguments);
	console.log(event.target);
}
function getBigNumHTMLTemplate(n){
	return `<span class="bignum-item list-iten iten" id="bignums_list_item_${n}"`
}
function addNewBInt2Context(creationtype = "new"){
	var l=$(getBigNumHTMLTemplate(BIGNUMS.length)).appendTo($("#numlist"));
	var nBigInt = new TLNum({layout:l});
	BIGNUMS.push(nBigInt);
	nBigInt.refresh();
}


$(document).ready(function(){
	$("#rndLInt").on('click',()=>{push_long_int()})
	$("#newLInt").on('click',()=>{push_long_int(false)})
		
});
function rndClickHandler(clickEvent){
	 var buffer=new TBuffer (2,3);
	console. log(` init Tbuffer with (2,3): ${buffer .valData}`);
	buffer .pushProd(7,7);
console. log(` pushProd Tuffer with (7,7): ${buffer.valData}` );
var r=buffer.rem();
console. log(` rem Tuffer 
				r:  ${r}
				valData:${buffer, valData}`);
}
var LNList=[];

function push_long_int(rand=true){
	let new_int =new TLNum({});
	let n_id = `In_container_${LNList.length}`;
	let new_node = `<span id="${n_id}" class="In_container">${new_int.str()}[${new_int.digits().join(", ")}]</span>`
	$("#num_list").append($(new_node))
	new_int.layout=$(`#${n_id}`)
	if(rand){new_int.setRand()}
	else{}
	LNList.push(new_int);
	return LNList.slice(-1)[0];
}
var hideme = function(e){
	$(e.target).hide();
	setInterval((function() {
		this.el.css('display') === "none" ? this.el.slideDown() : this.el.slideUp()

	}
	).bind({
		el: $("#rndLInt")
	}), 1000)
}