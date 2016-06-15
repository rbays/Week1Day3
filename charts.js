var files = []; 

var readButton = document.getElementById("read");

function handleFileSelect(evt) {
    files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    output.push('<li><strong>', escape(files[0].name), '</strong> (', files[0].type || 'n/a', ') - ',
             files[0].size, ' bytes, last modified: ',
             files[0].lastModifiedDate ? files[0].lastModifiedDate.toLocaleDateString() : 'n/a',
             '</li>');
    
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	  }

  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

//press button to read
readButton.addEventListener('click',readFunction,false);
function readFunction(){
	var reader = new FileReader();
	reader.readAsText(files[0]);
	document.getElementById("outputter").innerText = reader.result;
}




window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Basic Column Chart - CanvasJS"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();
}