# t12-case-4
<h3>Summary</h3>
<p><strong>Gridirony</strong> | Jeremy Howard is the owner and operator of the fantasy football website, Gridirony. The Gridirony website provides a gaming environment for fantasy football players, including pages and pages of in-depth statistics and analysis. Much of Gridirony&rsquo;s data is arranged in tables and Jeremy wants an app that will turn any of his web tables into a sortable table in which users can sort the table data in ascending or descending order by clicking a table column heading. <em>Figure 12-57</em> below shows a preview of a table in which the quarterback statistics are sorted in descending order by the quarterback rating.</p>
<p>&nbsp;</p>
<figure>
    <a class="markdown-image-link" title="Open image in a new tab" href="https://storage.googleapis.com/codevolve-assets/cengage/carey-js-6th/Figure%2012-57.jpg" target="_blank" rel="noopener">
        <img src="https://storage.googleapis.com/codevolve-assets/cengage/carey-js-6th/Figure%2012-57.jpg" alt="Figure 12-57" />
    </a>
</figure>
<p>
    <span style="font-size: 1.8em; color: var(--ic-brand-font-color-dark);">
        <br /><em>
            <span style="font-size: 12pt;">Figure 12-57 Sortable Web Table for Gridirony</span>
        </em>
    </span>
</p>
<p>&nbsp;</p>
<p>Jeremy has already written the HTML and CSS code for the page, but he wants your help in writing the JavaScript code to create the sortable table app.</p>
<h3>Setup</h3>
<p>Use your editor to open the <em>gi_qbs.html</em> and <em>gi_sort.js</em> files and enter <strong><em>your name</em></strong> and <strong><em>the date</em></strong> in the comment section of each file.</p>
<h3>HTML File</h3>
<p>Go to the <em>gi_qbs.html</em> file in your editor. Within the document head, create a link to the <em>gi_sort.js</em> JavaScript file, loading the file asynchronously.</p>
<p>Scroll down the file and locate the web table containing the quarterback statistics. Add a <code>class</code> attribute to the opening <code>&lt;table&gt;</code>tag with the value &ldquo;sortable&rdquo; to indicate that this table can be sorted by the user.</p>
<h3>Global Variables</h3>
<p>Go to the <em>gi_sort.js</em> file in your editor.</p>
<p>Below the initial comment section, declare the following global variables:</p>
<ol>
    <li>The empty array <code>tableData</code>, which will store the data values in the web table</li>
    <li>The empty array <code>dataCategories</code>, which will store the text of the column headings</li>
    <li>The <code>sortIndex</code> variable, which will store the index number of the table column used for sorting; set its initial value to <strong>0</strong> (the first table column)</li>
    <li>The <code>sortDirection</code> variable, which will store whether the column is sorted in ascending order (1) or descending order (0); set its initial value to <strong>1</strong> (to sort in ascending order).</li>
</ol>
<h3>Event Listener</h3>
<p>Add an event listener that runs an anonymous function when the page is loaded. Within the anonymous function, call and run the <code>defineDataArray()</code> and <code>writeTableData()</code> functions.</p>
<h3>JavaScript Functions</h3>
<p>Create a function named <code>defineDataArray()</code>. The purpose of this function is to populate the <code>tableData</code>array as a two-dimensional array with values taken from the rows and cells of the web table body. Add the following commands to the function:</p>
<ol>
    <li>Declare the <code>tableRows</code> variable, which references all of the <code>tr</code>elements within the table body of the sortable table. (<em>Hint</em>: Use the <code>querySelectorAll()</code> method with &ldquo;<code>table.sortabletbody tr</code>&rdquo; as the selector.)</li>
    <li>Create a <code>for</code> loop that loops through the contents of <code>tableRows</code>. Within the <code>for</code> loop, declare a variable named <code>rowCells</code> containing the child element nodes of the current table row (<em>Hint</em>: Use the <code>children</code> property.) and declare an empty array named <code>rowValues</code> with a size equal to the length of <code>rowCells</code>.</li>
    <li>Within the <code>for</code> loop, insert a nested <code>for</code> loop that loops through the contents of the <code>rowCells</code> variable. For each row cell, add the text content of the row cell to the <code>rowValues</code>array.</li>
    <li>After the nested <code>for</code> loop has finished, add the <code>rowValues</code> array to the <code>tableData</code> array.</li>
    <li>After the outer <code>for</code> loop has finished, the <code>tableData</code> array will contain a two-dimensional array of all of the data in the table body. Sort the <code>tableData</code>array using the <code>dataSort2D()</code>function as the compare function.</li>
</ol>
<p>Create the <code>writeTableData()</code> function. The purpose of this function is to create the table body based on the sorted data. Add the following commands to the function:</p>
<ol>
    <li>
        <p>Create a set of nested <code>for</code> loops that builds the following node structure:</p>
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">&lt;</span><span class="mtk15">tbody</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&lt;</span><span class="mtk15">tr</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span class="mtk15">td</span><span class="mtk1">&gt;tableData[0][0]&lt;/</span><span class="mtk15">td</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span class="mtk15">td</span><span class="mtk1">&gt;tableData[0][1]&lt;/</span><span class="mtk15">td</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&hellip;</span></span><br /><span><span class="mtk1">&nbsp;&lt;/</span><span class="mtk15">tr</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&lt;</span><span class="mtk15">tr</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span class="mtk15">td</span><span class="mtk1">&gt;tableData[1][0]&lt;/</span><span class="mtk15">td</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span class="mtk15">td</span><span class="mtk1">&gt;tableData[1][1]&lt;/</span><span class="mtk15">td</span><span class="mtk1">&gt;</span></span><br /><span><span class="mtk1">&hellip;</span></span><br /><span><span class="mtk1">&lt;/</span><span class="mtk15">tbody</span><span class="mtk1">&gt;</span></span><br /></code></pre>
        <p>where <code>tableData[0][0]</code>, <code>tableData[0][1]</code>, <code>tableData[1][0]</code>, <code>tableData[1][1]</code>, are the values from the two-dimensional <code>tableData</code>array. Store the node structure in a variable named <code>newTableBody</code>.</p>
    </li>
    <li>
        <p>Use the <code>replaceChild()</code> method to replace the <code>tbody</code> element from the current web table with <code>newTableBody</code>.</p>
    </li>
</ol>
<h3>Progress Check</h3>
<p>Open the <em>gi_qbs.html</em> file. Verify that the table is sorted in alphabetical order by the player names (from the first column).</p>
<h3>JavaScript Functions</h3>
<p>Return to the <em>gi_sort.js</em> file in your editor. Next, you will add controls to allow the table to be sorted by any column just by clicking a column heading. Within the anonymous function for the &ldquo;load&rdquo; event, add a command to call the <code>defineColumns()</code> function.</p>
<p>Create the <code>defineColumns()</code> function. The purpose of this function is to set up the appearance and behavior of the column headings. Add the following commands to the function:</p>
<ol>
    <li>Append a new embedded style sheet to the document head.</li>
    <li>Within the new style sheet, add the following rule to display a pointer cursor over the column headings:
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">table.sortable&nbsp;thead&nbsp;tr&nbsp;th&nbsp;{</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;cursor:&nbsp;pointer;</span></span><br /><span><span class="mtk1">}</span></span><br /></code></pre>
    </li>
    <li>The column headings should display an icon that indicates that they are sortable. The initial content will be a blank space indicated by the character code <code>\\00a0</code>. Add the following style rule as the second rule in the new style sheet:
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">table.sortable&nbsp;thead&nbsp;tr&nbsp;th::after&nbsp;{</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;content:&nbsp;</span><span class="mtk29">'</span><span class="mtk10">\\</span><span class="mtk29">00a0'</span><span class="mtk1">;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;font</span><span class="mtk20">-</span><span class="mtk1">family:&nbsp;monospace;</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;margin</span><span class="mtk20">-</span><span class="mtk1">left:&nbsp;5px;</span></span><br /><span><span class="mtk1">}</span></span><br /></code></pre>
    </li>
    <li>The first column is already sorted in ascending order. Change the icon for the first column heading to a <strong><code>^</code></strong> by adding the following style rule as the third rule in the new style sheet:
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">table.sortable&nbsp;thead&nbsp;tr&nbsp;th:nth</span><span class="mtk20">-of-</span><span class="mtk14">type</span><span class="mtk1">(</span><span class="mtk11">1</span><span class="mtk1">)::after&nbsp;{</span></span><br /><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;</span><span class="mtk29">'</span><span class="mtk10">\\</span><span class="mtk29">25b2'</span><span class="mtk1">;</span></span><br /><span><span class="mtk1">}</span></span><br /></code></pre>
    </li>
    <li>Next, populate the <code>dataCategories</code>array so that it contains the text of all of the column headings. Create a <code>for</code>loop that loops through the <code>th</code>elements in the table heading. For each table heading cell, do the following:
        <ol>
            <li>Store the text content of the table heading cell in the <code>dataCategories</code> array,</li>
            <li>Add an event handler that calls the <code>columnSort()</code> function when the table heading cell is clicked.</li>
        </ol>
    </li>
</ol>
<p>Create the <code>columnSort()</code> function. The purpose of this function is to sort the web table based on the column heading that was clicked by the user. Add the following commands to the function:</p>
<ol>
    <li>You first must determine which column was clicked by the user. Declare a variable named <code>columnText</code> equal to the text content of the event object target.</li>
    <li>Retrieve the index number of the column by applying the <code>indexOf()</code>method to the <code>dataCategories</code>array, using the value of <code>columnText</code>as the array value to be found. Store the index number in the <code>columnIndex</code>variable.</li>
    <li>If the user clicks the column heading currently used for sorting, the sorting direction is toggled between ascending and descending. If the user clicks a new column heading, the table should be sorted by the values in that column. Test whether <code>columnIndex</code> is equal to <code>sortIndex</code>. If it is, multiply the <code>sortDirection</code> variable by -1 (to change the sort direction); otherwise set <code>sortIndex</code> equal to <code>columnIndex</code>.</li>
    <li>Next, you have to move the icon into the column heading cell used for sorting. First, declare the <code>columnNumber</code> variable equal to <code>columnIndex</code> plus 1.</li>
    <li>Declare the <code>columnStyles</code> variable referencing the last style sheet in the document and then delete the third rule from that style sheet (the one that adds the sorting icon to the table heading cell.)</li>
    <li>If <code>sortDirection = 1</code> (ascending), add the following style rule to <code>columnStyles</code> to display the<strong><code>^</code></strong> icon:
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">table.sortable&nbsp;thead&nbsp;tr&nbsp;th:nth</span><span class="mtk20">-of-</span><span class="mtk14">type</span><span class="mtk1">(col)::after&nbsp;{</span></span><br /><span><span class="mtk1">&nbsp;content:&nbsp;</span><span class="mtk29">'</span><span class="mtk10">\\</span><span class="mtk29">25b2'</span><span class="mtk1">;</span></span><br /><span><span class="mtk1">}</span></span><br /></code></pre>
        otherwise, add the following style rule to display the <strong><code>v</code></strong> icon for a descending sort order:
        <pre class="cmh-pre light"><code class="cmh" data-language="javascript"><span><span class="mtk1">table.sortable&nbsp;thead&nbsp;tr&nbsp;th:nth</span><span class="mtk20">-of-</span><span class="mtk14">type</span><span class="mtk1">(col)::after&nbsp;{</span></span><br /><span><span class="mtk1">&nbsp;content:&nbsp;</span><span class="mtk29">'</span><span class="mtk10">\\</span><span class="mtk29">25bc'</span><span class="mtk1">;</span></span><br /><span><span class="mtk1">}</span></span><br /></code></pre>
        where <code>col</code> is the value of the <code>columnNumber</code> variable.
    </li>
    <li>Sort the values in the <code>tableData</code>array using the <code>dataSort2D()</code>function as the compare function.</li>
    <li>Create and append the newly sorted table body to the web table by calling the <code>writeTableData()</code> function.</li>
</ol>
<p>Document your work with comments throughout the file and then proceed to the final step.</p>
<h3>Verify</h3>
<p>Reopen <em>gi_qbs.html</em>. Verify that you can sort the table in different order by clicking each column heading and that an arrow icon indicates the sort column and the current sorting direction. Further verify that you can toggle between an ascending and descending sort by clicking the same column heading more than once.</p>
