"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Brian
   Date:   6/27/18

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

// Generate an outline based on h1 through h6 headings in source document //
window.addEventListener("load", makeOutline);

function makeOutline () {
	// Location of the document outline //
	var outline = document.getElementById("outline");
	
	// Source document for the outline //
		var source = document.getElementById("doc");
		
		var mainHeading = document.createElement("h1");
		var outlineList = document.createElement ("ol");
		var headingText = document.createTextNode("Outline");
		
		mainHeading.appendChild(headingText);
		outline.appendChild(mainHeading);
		outline.appendChild (outlineList);
		
		createList(source, outlineList);
}

function createList(source, outlineList) {
	// Headings for the outline //
	var headings = ["H1","H2","H3","H4","H5","H6"];
		
		// Previous lvl of the headings //
		var prevLevel = 0;
		// Loop through all of the child nodes of source article until no child node are left //
		for (var n = source.firstChild; n !== null; n = n.nextSibling) {
		var headLevel = headings.indexOf(n.nodeName);

			if (headLevel !== -1) {
				var listElem = document.createElement("li");
				listElem.innerHTML = n.firstChild.nodeValue;
				outlineList.appendChild(listElem);
				
				if (headLevel === prevLevel) {
					// Append the list item to current list //
					outlineList.appendChild(listElem);
				} else if (headLevel > prevLevel) {
					// Start a new nested list //
					var nestedList = document.createElement("ol");
					nestedList.appendChild(listElem);
					// Append nexted list to last item in the current list //
					outlineList.lastChild.appendChild(nestedList);
					// Change current list to nested list //
					outlineList = nestedList;
					
				} else {
					// Append the list item to a higher list 
					// Calculate the difference between the current and previous level //
					var levelUp = prevLevel - headLevel;
					// Go up to the higher level //
					for (var i = i; i <= levelUp; i++){
						outlineList = outlineList.parentNode.parentNode;
					}
					outlineList.appendChild(listElem);
				}
				
				// Update the value of prevLevel //
				prevLevel = headLevel; 
		}
	}
}

