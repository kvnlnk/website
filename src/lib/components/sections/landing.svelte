<div class="flex h-full w-full" id="home">
  <div class="m-auto w-2/3 h-3/4 p-4 rounded-lg">
    <p class="text-9xl font-bold bg-gradient-to-r from-white via-success-500 to-success-500 bg-clip-text text-transparent p-4">
        Kevin Lingk
    </p>
    <p class="text-3xl text-surface-400 mt-4 p-4">
        Computer Science Student
    </p>
    <p class="text-xl mt-4 p-4">
        I enjoy developing applications <br>
        and creating solutions that are efficient,<br>
        user-friendly, and maintainable.
    </p>

    <!-- Add buttons for navigation -->
    <div class="mt-8 flex flex-row gap-4 p-4">
        <a href="#projects" class="px-4 py-2 rounded  transition-colors b1">
                <span class="text1">View Projects</span>
        </a>
        <a href="#github" class="bg-surface-700 text-white px-4 py-2 rounded hover:bg-surface-600 transition-colors b2">
           <span class="text2">View GitHub</span>
        </a>
    </div>
  </div>
</div>

<style>
   /* Credit: https://codepen.io/kay8/pen/azKbjN*/
.b1{
  background: linear-gradient(to right, var(--color-success-600) 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
}

.b2{
  background: linear-gradient(to right, white 50%, var(--color-success-600) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
}

.b1:hover, .b2:hover {
  background-position: left bottom;
}

.text1, .text2 {
  text-align: center;
  font-size: 16px;
  line-height: 30px; 
  transition: all .6s ease-out;
}

.text1 {
  color: var(--color-success-500);
}

.text2 { 
  color: white;
}

.b1:hover .text1 {
    color: white;  
}

.b1:hover {
    box-shadow: 0 2px 16px white;
}

.b2:hover {
    box-shadow: 0 2px 16px var(--color-success-500);
}

.b2:hover .text2 {
  color: var(--color-success-500);
}
</style>