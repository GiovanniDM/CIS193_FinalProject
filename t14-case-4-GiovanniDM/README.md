# t14-case-4
Kidder Garden Stamps
<h3>Summary</h3>
<p><strong><em>Kidder Garden</em></strong> Pete Burnham of the Kidder Garden website wants you to develop an application for drawing images or "stamps". As a proof of concept, he wants you to create a webpage in which users can choose stamps of a specified size and shade (opacity) and then place those stamp images on a canvas using the mouse.</p>
<p>The user can then modify the size, position, rotation, or shading (opacity) by clicking tools from a toolbar and applying that tool to a stamp image. Pete has already designed the webpage. He needs you to write the code to create the stamp objects and place them as images on the page's canvas. Figure 14-50 shows a preview of a completed page with stamp images created and modified by the user.</p>
<p>&nbsp;</p>
<figure>
    <a class="markdown-image-link" title="Open image in a new tab" href="https://storage.googleapis.com/codevolve-assets/cengage/carey-js-6th/Figure%2014-50.png" target="_blank" rel="noopener">
        <img src="https://storage.googleapis.com/codevolve-assets/cengage/carey-js-6th/Figure%2014-50.png" alt="Stamps game at Kidder Garden" />
    </a>
</figure>
<h3><strong>Figure 14-50. Stamps game at Kidder Garden</strong></h3>
<p>&nbsp;</p>
<p>Pete has also supplied you with the following object methods that will be useful to you:</p>
<ul>
    <li>The <code>elementX()</code> method for the <code>Event</code> object prototype that returns the x-coordinate of a mouse click event occurring within an element.</li>
    <li>The <code>elementY()</code> method for the <code>Event</code> object prototype that returns the y-coordinate of a mouse click event occurring within an element.</li>
    <li>The <code>removeChildren()</code> method that removes all child nodes from an element.</li>
</ul>
<p>The final form of the code is up to you and may include enhancements that you think will add to the value of the final application, but it must include the following:</p>
<ul>
    <li>An interface that shows the currently selected shape, size, and shading (opacity) controls and the currently selected tool from the toolbar.</li>
    <li>A custom <code>stamp</code> object that stores the <code>shape</code>, <code>size</code>, and <code>shade</code> (opacity) of a stamp.</li>
    <li>A custom <code>game</code> object that stores the current control and tool option selected by the user and includes an array named <code>stamps</code> that stores all stamp objects created by the user.</li>
    <li>A custom method named <code>addToGame</code>defined as a prototype for the class of <code>stamp</code> objects to add the <code>stamp</code> to the <code>stamps</code> array within the <code>game</code>object.</li>
    <li>A custom method named <code>removeStamps</code> defined as a prototype for the class of <code>game</code> objects to empty out the <code>game</code> object's <code>stamps</code> array.</li>
    <li>Functions to place stamp images on the page canvas at the location of the user's mouse click and add the stamp object to the game object's stamps array.</li>
    <li>Functions to modify the stamp image's size, position, rotation, and shading when the image is clicked by the user. Another function to remove the stamp image when clicked by the user and to remove the stamp object from the game object's stamps array.</li>
    <li>A function that removes all stamp images from the canvas and all stamp objects from the game object's stamps array, when the user clicks the garbage can icon.</li>
</ul>
<h3>Setup</h3>
<p>Use your editor to open the <em>kg_stamps.html</em>and <em>kg_stamps.js</em> files. Enter <strong><em>your name</em></strong>and <strong><em>the date</em></strong> in the comment section of each file.</p>
<h3>Linking JS File</h3>
<p>Go to the <em>kg_stamps.html</em> file in your editor. Link the file to the <em>kg_stamps.js</em> file, loading that file asynchronously.</p>
<p>Take some time to study the content and structure of the <em>kg_stamps.html</em> file, becoming familiar with the page elements, their classes, and their <code>id</code>'s.</p>
<p>Open the <em>kg_stamps.js</em> file in your editor.</p>
<p>Write code that will satisfy the conditions that Pete has given you for the final application (review the <strong>Introduction</strong> step).</p>
<p>Comment your work throughout, documenting all objects, properties, and methods you created for this project.</p>
<p>
    <span>Create custom </span><code>stamp</code>
    <span> object</span>
</p>
<p>
    <span>Create custom <code>game</code> object</span>
</p>
<p>
    <span>Define <code>addToGame()</code> <code>stamp</code> prototype method</span>
</p>
<p>
    <span>Define <code>removeStamps()</code> <code>game</code> prototype method</span>
</p>
<p>
    <span>A shape can be placed on the canvas using with button with id <code>addStamp</code></span>
</p>
<p>
    <span>The 'Sizes' option allows the size of the next stamp to be placed to be selected</span>
</p>
<p>
    <span>The 'Shades' option allows changing the opacity of the next stamp to be placed</span>
</p>
<p>
    <span>All images are removed from the canvas when the garbage can icon is clicked</span>
</p>
<p>
    <span>Button with id <code>removeStamp</code> allows the user to remove a stamp</span>
</p>
<p>
    <span>Button with id <code>enlargeStamp</code> allows increasing the <code>width</code>and/or <code>height</code> styles of a stamp</span>
</p>
<p>
    <span>Button with id <code>shrinkStamp</code> allows decreasing the <code>width</code> and/or <code>height</code> styles of a stamp</span>
</p>
<p>
    <span>Button with id <code>moveLeft</code> allows moving a stamp left on the canvas</span>
</p>
<p>
    <span>Button with id <code>moveRight</code> allows moving a stamp right on the canvas</span>
</p>
<p>
    <span>Button with id <code>moveUp</code> allows moving a stamp up on the canvas</span>
</p>
<p>
    <span>Button with id <code>moveDown</code> allows moving a stamp down on the canvas</span>
</p>
<p>
    <span>Button with id <code>rotateRight</code> allows increasing the degrees of rotation for the <code>transform</code> style of a stamp</span>
</p>
<p>
    <span>Button with id <code>rotateLeft</code> allows decreasing the degrees of rotation for the <code>transform</code> style of a stamp</span>
</p>
<p>
    <span>Button with id <code>lighten</code> allows decreasing the value of the <code>opacity</code> style for a stamp</span>
</p>
<p>
    <span>Button with id <code>darken</code> allows increasing the value of the <code>opacity</code> style for a stamp</span>
</p>
<h3>Verify</h3>
<p>Open <em>kg_stamps.html</em>, and test your code in your browser. Verify that you can place stamp images on the canvas using the controls on the page. Verify that you can modify a stamp image on the canvas by clicking one of the toolbar tools and then clicking the stamp image.</p>
