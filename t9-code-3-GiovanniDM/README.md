<h1>T9 Coding Challenge 3</h1>
<div class="custom-markdown steps-contents">
    <div class="custom-markdown steps-contents">
        <div class="custom-markdown steps-contents">
            <h2>Summary</h2>
            <p><em>Figure 9&ndash;42</em>
                <span>&nbsp;</span>shows a preview of a page containing an analog clock with moving second, minute, and hour hands.
            </p>
            <p>&nbsp;</p>
            <figure>
                <a class="markdown-image-link" title="Open image in a new tab" href="https://cdn.filestackcontent.com/C1JVL5W3RXWtlX550fkl" target="_blank" rel="noopener">
                    <img src="https://cdn.filestackcontent.com/C1JVL5W3RXWtlX550fkl" alt="A screenshot of an H T M L page displays the image of an analog clock with second, minutes, and hour&rsquo;s hands." />
                </a>
            </figure>
            <sup><em>Figure 9-42</em></sup>
            <p>&nbsp;</p>
            <p>Do the following:</p>
        </div>
        <div class="step-block-outer step-block--not-last">
            <div class="step-block-header" role="heading" aria-level="2">Tasks</div>
            <div class="step-block-header" role="heading" aria-level="2">
                <span>Open the files&nbsp;</span><em>code9-3.html</em>
                <span>&nbsp;and&nbsp;</span><em>clockface9-3.js</em>
                <span>&nbsp;and in the comment section enter your&nbsp;</span><strong>name</strong>
                <span>&nbsp;(First + Last) and the&nbsp;</span><strong>date</strong>
                <span>&nbsp;(MM/DD/YYYY) into the&nbsp;</span><code>Author:</code>
                <span>&nbsp;and&nbsp;</span><code>Date:</code>
                <span>&nbsp;fields of each file.
                    <br />
                    <br />
                </span>
            </div>
            <div class="step-block-header" role="heading" aria-level="2">
                <span>Go to the&nbsp;<em>code9-3.html</em>&nbsp;file and within the&nbsp;<code>head</code>&nbsp;section insert a&nbsp;<code>script</code>&nbsp;element connecting the page to the&nbsp;<em>clockface9-3.js</em>&nbsp;file. Add the&nbsp;<code>defer</code>&nbsp;attribute to the&nbsp;<code>script</code>&nbsp;element.</span>
            </div>
            <div class="step-block-header" role="heading" aria-level="2">
                <br /><p>Open the<span>&nbsp;</span><em>clockface9-3.js</em>
                    <span>&nbsp;</span>file and below the initial comment section insert the<span>&nbsp;</span><code>moveHands()</code>
                    <span>&nbsp;</span>function that moves the three hands of the analog clock. Add the following to the function:
                </p>
                <ol>
                    <li>Create a variable named<span>&nbsp;</span><code>nowTime</code>
                        <span>&nbsp;</span>that contains the current date and time.
                    </li>
                    <li>Create the<span>&nbsp;</span><code>nowSeconds</code>,<span>&nbsp;</span><code>nowMinutes</code>, and<span>&nbsp;</span><code>nowHours</code>
                        <span>&nbsp;</span>variables containing the seconds, minutes, and hours values from the<span>&nbsp;</span><code>nowTime</code>
                        <span>&nbsp;</span>variable.
                    </li>
                    <li>Calculate the angle that the second hand makes on the clock face by multiplying the<span>&nbsp;</span><code>nowSeconds</code>
                        <span>&nbsp;</span>value by<span>&nbsp;</span><strong>6</strong>. Store the result in the<span>&nbsp;</span><code>secondsAngle</code>
                        <span>&nbsp;</span>variable.
                    </li>
                    <li>Determine the angle that the minute hand makes on the clock face by calculating the following expression:<span>&nbsp;</span><code>(nowMinutes + nowSeconds/60)*6</code>. Store the calculated value in the<span>&nbsp;</span><code>minutesAngle</code>
                        <span>&nbsp;</span>variable.
                    </li>
                    <li>Determine the angle that the hour hand makes on the clock face by calculating the following expression:<span>&nbsp;</span><code>(nowHours + nowSeconds/3600 + nowMinutes/60)*30</code>. Store the calculated value in the<span>&nbsp;</span><code>hoursAngle</code>
                        <span>&nbsp;</span>variable.
                    </li>
                    <li>Call the<span>&nbsp;</span><code>rotateHand()</code>
                        <span>&nbsp;</span>function using<span>&nbsp;</span><code>secondsAngle</code>
                        <span>&nbsp;</span>and<span>&nbsp;</span><strong>seconds</strong>
                        <span>&nbsp;</span>as the argument value to rotate the image of the second hand. Call the<span>&nbsp;</span><code>rotateHand()</code>
                        <span>&nbsp;</span>function again using the<span>&nbsp;</span><code>minutesAngle</code>
                        <span>&nbsp;</span>and<span>&nbsp;</span><strong>minutes</strong>
                        <span>&nbsp;</span>as the argument values. Call the<span>&nbsp;</span><code>rotateHand()</code>
                        <span>&nbsp;</span>function one last time using the<span>&nbsp;</span><code>hoursAngle</code>
                        <span>&nbsp;</span>and<span>&nbsp;</span><strong>hours</strong>
                        <span>&nbsp;</span>as the argument values.
                    </li>
                </ol>
                <p>
                    <span>Directly below the&nbsp;</span><code>moveHands()</code>
                    <span>&nbsp;function insert a command to run the&nbsp;</span><code>moveHands()</code>
                    <span>&nbsp;function and then use the&nbsp;</span><code>setInterval()</code>
                    <span>&nbsp;method to run the&nbsp;</span><code>moveHands()</code>
                    <span>&nbsp;method every second.</span>
                </p>
                <p>
                    <span>Open the website in the browser preview. Verify that the page shows an analog clock face with the current time and that the hands of the clock move as the time changes.</span>
                </p>
            </div>
        </div>
    </div>
</div>
