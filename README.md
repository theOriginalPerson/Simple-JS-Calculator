<h1>A Simple JavaScript Calculator</h1>
<h3>Intro</h3>
<p>Hello and welcome! This is a tutorial on how to develop a simple JS calculator using HTML, CSS and basic JS concepts.</p>
<h3>How to reproduce this</h3>
<ol>
	<li>Create the HTML layout of your buttons</li>
	<li>Style them (it doesn't have to be perfect, as long as it looks decent)</li>
	<li>Add JS</li>
</ol>
<h3>How to create your JS file</h3>
<ol>
	<li>Extract all of the buttons and their values using <code>const [insert btn name] = document.getElementById("insert ID name of button")</code> and <code>[insert btn name].value</code>, as shown in lines 5-39 of the <code>main.py</code> template we've provided</li>
	<li>Once all the values of the buttons are extracted, place the buttons into an array (the reason is because we will use the <code>[the array of buttons].forEach(functionName()</code>) method of looping through each one</li>
	<li>Find the calculator display ID in the HTML page and use the getElementById method to retrieve it in the JS file</li>
	<li>Create a function that displays all the values in the placeholder of the display when a button is pressed</li>
	<li>Create another function (named 'operation') that does the following: 
		<ul>
			<li>Takes in a string value parameter (from the display.placeholder)</li>
			<li>Has conditions for each operation (i.e. addition, subtraction, etc) that tries to find the operations' signs</li>
			<li>Slices the string accordingly to return A and B values that you can turn into a Number</li>
			<li>For each appropriate condition, return the operation of that condition (i.e. if the display string has a plus, add the number values; if it has a minus, subtract them, etc)</li>
		</ul>
 </li>
	<li>Create a final function that takes whatever the operation function's value was and put it back into the display's placeholder</li>
	<li>Add event listeners for each of the buttons. Take a look at lines 93-97 of the <code>script.js</code> file and try to do something similar</li>
</ol>
<h3>How to use it</h3>
<p>Currently, it's only possible to use the buttons, as the input does not work. The placeholder is what is displaying the button inputs and calculated results. The reasoning for using an actual input opposed to a header tag was because it seemed like a unique alternative where the actual typed value of the calculator display can be developed later. Nonetheless, it works like any other simple calculator out there.</p>