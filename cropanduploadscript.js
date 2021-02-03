	var formData;
	var submitready=0;
	window.onload = function() {
		
	};
	
	var blobdata;
    function readURL1(input) {
		formData=new FormData(document.getElementById("form_object"));		
        if (input.files && input.files[0]) {
			
            var reader = new FileReader();
			
            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
		    		.width()
		    		.height();
            };
            reader.readAsDataURL(input.files[0]);

		}
	}

	function readURL2(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah2')
                    .attr('src', e.target.result)
		    		.width()
		    		.height();
            };
            reader.readAsDataURL(input.files[0]);

		}
	}

	function readURL3(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah3')
                    .attr('src', e.target.result)
		    		.width()
		    		.height();
            };
            reader.readAsDataURL(input.files[0]);

		}
	}

	function readURL4(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah4')
                    .attr('src', e.target.result)
		    .width()
		    .height();
            };
            reader.readAsDataURL(input.files[0]);

		}
	}
	var img1 = document.getElementById("blah");
	var img2 = document.getElementById("blah2");
	var img3 = document.getElementById("blah3");
	var img4 = document.getElementById("blah4");
	const newImgw = 1;
	const newImgx = 2;
	const newImgy = 3;
	const newImgz = 4;

	
	img1.onload = function () {
		
   		run_function(img1,newImgw);
	}
	img2.onload = function () {
   		run_function(img2,newImgx);
	}
	img3.onload = function () {
   		run_function(img3,newImgy);
	}
	img4.onload = function () {
		   run_function(img4,newImgz);
		   
	}
	
    function run_function(input1,input2) {
	
		var img=input1;
		var newImg0=document.createElement("img");
    	var canvas1 = document.getElementById("myCanvas1");
    	var ctx1 = canvas1.getContext("2d");
		var canvas2 = document.getElementById("myCanvas2");
    	var ctx2 = canvas2.getContext("2d");
		var canvas3 = document.getElementById("myCanvas3");
		var ctx3 = canvas3.getContext("2d");
		var canvas4 = document.getElementById("myCanvas4");
		var ctx4 = canvas4.getContext("2d");
		var canvas5 = document.getElementById("myCanvas5");
		var ctx5 = canvas5.getContext("2d");
		var canvas6 = document.getElementById("myCanvas6");
		var ctx6 = canvas6.getContext("2d");
		var canvas7 = document.getElementById("myCanvas7");
		var ctx7 = canvas7.getContext("2d");
		var canvas8 = document.getElementById("myCanvas8");
		var ctx8 = canvas8.getContext("2d");
		var canvas9 = document.getElementById("myCanvas9");
		var ctx9 = canvas9.getContext("2d");
		canvas1.width=img.width/3;
		canvas1.height=img.height/3;
		canvas2.width=img.width/3;
		canvas2.height=img.height/3;
		canvas3.width=img.width/3;
		canvas3.height=img.height/3;
		canvas4.width=img.width/3;
		canvas4.height=img.height/3;
		canvas5.width=img.width/3;
		canvas5.height=img.height/3;
		canvas6.width=img.width/3;
		canvas6.height=img.height/3;
		canvas7.width=img.width/3;
		canvas7.height=img.height/3;
		canvas8.width=img.width/3;
		canvas8.height=img.height/3;
		canvas9.width=img.width/3;
		canvas9.height=img.height/3;



		ctx1.drawImage(img,0,0,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx2.drawImage(img,img.width/3,0,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx3.drawImage(img,2*img.width/3,0,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx4.drawImage(img,0,img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx5.drawImage(img,img.width/3,img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx6.drawImage(img,2*img.width/3,img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx7.drawImage(img,0,2*img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx8.drawImage(img,img.width/3,2*img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);
		ctx9.drawImage(img,2*img.width/3,2*img.height/3,img.width/3,img.height/3,0,0,img.width/3,img.height/3);

		imgData1 = ctx1.getImageData(0, 0, img.width, img.height);
		var sum1 = imgData1.data.reduce(function(a, b){
				return a + b;
			}, 0);
		var avg1= sum1/imgData1.data.length;
		//var mean1= math.mean(imgData1.data);
		imgData2 = ctx2.getImageData(0, 0, img.width, img.height);
		var sum2 = imgData2.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum2= eval(imgData2.data.join('+'));
		var avg2= sum2/imgData2.data.length;
		//var mean2= math.mean(imgData2.data);
		imgData3 = ctx3.getImageData(0, 0, img.width, img.height);
		var sum3 = imgData3.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum3= eval(imgData3.data.join('+'));
		var avg3= sum3/imgData3.data.length;
		//var mean3= math.mean(imgData3.data);
		imgData4 = ctx4.getImageData(0, 0, img.width, img.height);
		var sum4 = imgData4.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum4= eval(imgData4.data.join('+'));
		var avg4= sum4/imgData4.data.length;
		//var mean4= math.mean(imgData4.data);
		imgData5 = ctx5.getImageData(0, 0, img.width, img.height);
		var sum5 = imgData5.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum5= eval(imgData5.data.join('+'));
		var avg5= sum5/imgData5.data.length;
		//var mean5= math.mean(imgData5.data);
		imgData6 = ctx6.getImageData(0, 0, img.width, img.height);
		var sum6 = imgData6.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum6= eval(imgData6.data.join('+'));
		var avg6= sum6/imgData6.data.length;
		//var mean6= math.mean(imgData6.data);
		imgData7 = ctx7.getImageData(0, 0, img.width, img.height);
		var sum7= imgData7.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum7= eval(imgData7.data.join('+'));
		var avg7= sum7/imgData7.data.length;
		//var mean7= math.mean(imgData7.data);
		imgData8 = ctx8.getImageData(0, 0, img.width, img.height);
		var sum8 = imgData8.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum8= eval(imgData8.data.join('+'));
		var avg8= sum8/imgData8.data.length;
		//var mean8= math.mean(imgData8.data);
		imgData9 = ctx9.getImageData(0, 0, img.width, img.height);
		var sum9 = imgData9.data.reduce(function(a, b){
				return a + b;
			}, 0);
		//var sum9= eval(imgData9.data.join('+'));
		var avg9=sum9/imgData9.data.length;
		//var mean9= math.mean(imgData9.data);
		console.log(imgData1.data);
		console.log(imgData2.data);
		console.log(imgData3.data);
		console.log(imgData4.data);
		console.log(imgData5.data);
		console.log(imgData6.data);
		console.log(imgData7.data);
		console.log(imgData8.data);
		console.log(imgData9.data);
		console.log(avg1);
		console.log(avg2);
		console.log(avg3);
		console.log(avg4);
		console.log(avg5);
		console.log(avg6);
		console.log(avg7);
		console.log(avg8);
		console.log(avg9);
		//src="https://unpkg.com/mathjs@9.0.0/lib/browser/math.js"

		canvas1.setAttribute("title", avg1);
		canvas2.setAttribute("title", avg2);
		canvas3.setAttribute("title", avg3);
		canvas4.setAttribute("title", avg4);
		canvas5.setAttribute("title", avg5);
		canvas6.setAttribute("title", avg6);
		canvas7.setAttribute("title", avg7);
		canvas8.setAttribute("title", avg8);
		canvas9.setAttribute("title", avg9);
		var avgs=[avg1,avg2,avg3,avg4,avg5,avg6,avg7,avg8,avg9];
		var maxavg = avgs.reduce(function(a, b) {
		return Math.max(a, b);
		});
		console.log(maxavg);
		if (canvas1.getAttribute("title")==maxavg){
			canvas1.toBlob(function(blob) {
			
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas2.getAttribute("title")==maxavg){
			canvas2.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas3.getAttribute("title")==maxavg){
			canvas3.toBlob(function(blob) {
			var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas4.getAttribute("title")==maxavg){
			canvas4.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas5.getAttribute("title")==maxavg){
			canvas5.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas6.getAttribute("title")==maxavg){
			canvas6.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas7.getAttribute("title")==maxavg){
			canvas7.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas8.getAttribute("title")==maxavg){
			canvas8.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		else if (canvas9.getAttribute("title")==maxavg){
			canvas9.toBlob(function(blob) {
			//var newImg1 = document.createElement('img'),
			url = URL.createObjectURL(blob);
			blobdata=blob;
			newImg0.onload = function() {
			// no longer need to read the blob so it's revoked
			URL.revokeObjectURL(url);
			};

			newImg0.src = url;
			selector(blobdata,input2,newImg0);
			});
		}
		ctx1.clearRect(0,0,img.width/3,img.height/3);
		ctx2.clearRect(0,0,img.width/3,img.height/3);
		ctx3.clearRect(0,0,img.width/3,img.height/3);
		ctx4.clearRect(0,0,img.width/3,img.height/3);
		ctx5.clearRect(0,0,img.width/3,img.height/3);
		ctx6.clearRect(0,0,img.width/3,img.height/3);
		ctx7.clearRect(0,0,img.width/3,img.height/3);
		ctx8.clearRect(0,0,img.width/3,img.height/3);
		ctx9.clearRect(0,0,img.width/3,img.height/3);
		document.body.appendChild(newImg0);
		
		
			
		
	}
var done=0;
//document.getElementById("form_object").onsubmit = setTimeout(ajaxquery,5000);
//$(document).ready(function() {
 // $("#myform").submit(async function(event){
//		if(done==0){
 //      	event.preventDefault();  }
 //   		});  
//		  });
var buttin=document.getElementById("buttin");

function ajaxquery() {
	
	$.ajax({
    	type: "POST",
    	data: formData,
    	processData: false,
    	contentType: false,
    	success: function (response) {
			done=1;
    	},
    	error: function () {
    	}
	  });
	
};
//console.log(formData);
function selector(blobdata,input2,newImg0){
		if(input2==1){
			var Frontal=newImg0;
			formData.append('Frontal', blobdata,);
			submitready++;
			for (var pair of formData.entries()) {
    			console.log(pair[0]+ ', ' + pair[1]); 
			}
			//console.log(formData.entries());
		}
		else if(input2==2){
			var Vertex=newImg0;
			formData.append('Vertex',blobdata);
			submitready++;
			for (var pair of formData.entries()) {
    			console.log(pair[0]+ ', ' + pair[1]); 
			}
			//console.log(formData);
		}
		else if(input2==3){
			var Parietal=newImg0;
			formData.append('Parietal',blobdata);
			submitready++;
			//console.log(formData);
			for (var pair of formData.entries()) {
    			console.log(pair[0]+ ', ' + pair[1]); 
			}
		}
		else if(input2==4){
			var Occipital=newImg0;
			formData.append('Occipital',blobdata);
			submitready++;
			//console.log(formData);
			for (var pair of formData.entries()) {
    			console.log(pair[0]+ ', ' + pair[1]); 
			}
		}else{
			var newImg5=newImg0;
			formData.append('newImg5',blobdata);
			submitready++;
			//console.log(formData);
			for (var pair of formData.entries()) {
    			console.log(pair[0]+ ', ' + pair[1]); 
			}
		}
}